const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    password: String!
    message: String
  }
  type Post {
    id: ID!
    body: String!
    username: String!
    userId: String!
    createdAt: String!
    msg: String
    Likes: [likes]!
    comments: [Comments]!
  }

  type Comments {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type likes {
    id: ID!
    createdAt: String!
    username: String!
  }
  type registeruser {
    id: ID!
    email: String!
    createdAt: String!
    username: String!
  }

  input MenuItem {
    name: String
    price: Float
  }
  input RegisterInput {
    username: String
    password: String
    confirmPassword: String
    email: String
  }
  type Query {
    User(_id: String): User
    getpost(_id: String): Post
    getAllpost: [Post]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createpost(body: String!): Post!
    deletepost(_id: String!): Post!
    createcomment(_id: String!, body: String): Post!
    Deletecomment(_id: ID!, commentId: ID!): Post
    likepost(_id: ID!): Post!
  }
`;
