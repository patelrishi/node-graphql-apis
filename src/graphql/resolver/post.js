const Post = require("../../model/post");
const User = require("../../model/user")
const checkauth = require("../../utils/check-auth")
module.exports = {

    Query: {
        async getAllpost() {
            try {
                const allpost = await Post.find()
                console.log("=====", allpost)
                return allpost
            } catch (error) {
                console.error("err---")
            }
        },

        async getpost(parent, args, context, info) {
            try {
                const getonepost = await Post.findById({ _id: args._id })

                return getonepost;
            } catch (error) {
                console.error("err---")
            }

        }
    },

    Mutation: {

        async createpost(_, body, context) {
            const useriddd = checkauth(context)
            const user = await User.findById({_id:useriddd.id})
            const usernamettttt =user.username
            const newpost = new Post({
                body: body.body,
                userId: user.id,
                username: usernamettttt,
                createdAt: new Date().toISOString()
            });
             await newpost.save();
            console.log("post", newpost)
            return newpost
        },

        async deletepost(_,{_id},context){
            const user = checkauth(context)
            console.log("user.id",user.id) 
               const deletepost = await Post.findByIdAndDelete({_id:_id})
            
                return{
                    deletepost,
                    msg:"delete sucessfully"
                } 
          
        }
    }
}