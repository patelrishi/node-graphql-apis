const Post = require("../../model/post");
const checkauth = require("../../utils/check-auth")
module.exports = {

    Mutation: {
        async createcomment(_, { _id, body }, context) {

            try {
            
                if (!body) {
                    throw new UserInputError('body must be required');
                }
                const post = await Post.findById(_id)
                const usernamettttt = post.username
                console.log("____", post)
                if (post) {
                    post.comments.push({
                        username:usernamettttt,
                        body,
                        createdAt: new Date().toISOString()
                    })
                    await post.save()
                    return post
                }
            } catch (error) {
                console.error("err---")
            }    
        },

        async Deletecomment(_,{_id,commentId},context){
        const yutyuty = checkauth(context)
        console.log("---", checkauth(context))

            try {
                const post = await Post.findById(_id)  
               
                if(post) {
                   const commentindex = await  post.comments.findIndex(c=>c.id===commentId)
                  const deletepost =await post.comments.splice(commentindex, 1)
                  console.log("deletepost",deletepost)
                  await deletepost.save()
                  return deletepost
                }
            } catch (error) {
                return ("eeeerrrrrrrr")
            }
        }


    }
}