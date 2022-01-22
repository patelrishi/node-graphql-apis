const user = require("../../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { UserInputError } = require("apollo-server");
module.exports = {
  Query: {
    User(parent, args, context, info) {
      console.log(args);
      return user
        .findOne({ _id: args._id })
        .then((userrr) => {
          return userrr;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      if (!username || !email || !password || !confirmPassword) {
        throw new UserInputError("enter all fields value 😁😁");
      }

      if (password != confirmPassword) {
        throw new UserInputError("Password don't match 🤣🤣 ");
      }

      const existinguser = await user.findOne({ username });
      if (existinguser) {
        throw new UserInputError("username is already taken ");
      }

      const salt = await bcrypt.genSalt(saltRounds);
      const passwordhash = await bcrypt.hash(password, salt);
      console.log("passwordhashh", passwordhash);
      const newuser = new user({
        email,
        username,
        password: passwordhash,
        createdAt: new Date().toISOString(),
      });
      const res = await newuser.save();
      console.log("===", res);
      return {
        ...res._doc,
        message: "Register successful",
      };
    },

    async login(_, { username, password }) {
      if (!username || !password) {
        throw new UserInputError("enter all fields value 😁😁");
      }

      const userrr = await user.findOne({ username });
      if (!userrr) {
        throw new UserInputError("user is not found ");
      }

      const ismatch = await bcrypt.compare(password, userrr.password);
      if (!ismatch) {
        throw new UserInputError("invalid cradential");
      }

      const token = jwt.sign({ id: userrr.id }, SECRETE_KEY);
      return {
        message: "Login Succesful",
        token,
        id: userrr.id,
        email: userrr.email,
        username: userrr.username,
      };
    },
  },
};
