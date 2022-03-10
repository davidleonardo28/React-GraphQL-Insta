const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createAt: String
  }
    type Query {
    # User
    getUser(id: ID, username: String): User
    search(search: String): [User]
  }`;

module.exports = typeDefs;