// const { Mutation } = require("./user");
const userresolver = require("./user");
const Postresolver = require("./post")
const commentresolver = require("./comment") 

module.exports={
    Query:{
        ...userresolver.Query,
        ...Postresolver.Query
    },
    Mutation:{
        ...userresolver.Mutation,
        ...Postresolver.Mutation,
        ...commentresolver.Mutation
    }
}