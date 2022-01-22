const { ApolloServer } = require("apollo-server");
require("./db/connection");
const Cors = require("micro-cors");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolver/index");
const cors = require("cors");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

let PORT = 5000;
const startServer = server.listen(
  PORT,
  console.log(`graphQL Server running  on port ${PORT}`)
);

module.exports = cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  let test = await startServer;

  await server.createHandler({ path: "/api/graphql" })(req, res);
});
