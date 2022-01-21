const { ApolloServer } = require('apollo-server');
require("./db/connection");

const typeDefs = require("./graphql/typeDefs")
const resolvers = require ("./graphql/resolver/index")
const cors = require('cors')
  
const server = new ApolloServer({
typeDefs, 
resolvers,
context:({req})=>({req})
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});