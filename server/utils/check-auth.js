const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  console.log("-=-=-=-=-=-", authHeader);
  if (authHeader) {
    // Bearer ....
    const token = authHeader.split("Bearer ")[1];
    console.log("________", token);
    if (token) {
      try {
        const user = jwt.verify(token, "some very secrete key");
        console.log("++++++++", user);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
