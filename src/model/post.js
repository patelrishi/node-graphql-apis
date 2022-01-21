const mongoose = require("mongoose")
const {Schema,model}=require("mongoose")

const postschema = new Schema({
    body: String,
  
    createdAt: String,
    comments:[{
        username:String,
        createdAt:String,
        body:String
    }],
    Likes:[{
        username:String,
        createdAt:String
    }],
    username:{
        type:String
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users'
    //   }
    userId:{
        type: Schema.Types.ObjectId,
        ref: "user",
    }
})
module.exports = model('Post', postschema);