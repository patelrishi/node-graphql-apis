// const mongoose = require("mongoose");
// const { Schema,model } = mongoose;

// const userSchema = new Schema({
//     // id:String,
//     // body:String,
//     // createdAt :String,
//     // username :String,
// // menu:[ {
// //     name: String,
// //     price: String
// // }]
// username: String,
// password: String,
// email:String,
// createdAt:String
// });
// module.exports = mongoose.model("user", userSchema);


const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String
});

module.exports = model('User', userSchema);