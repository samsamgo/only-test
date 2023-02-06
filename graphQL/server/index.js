const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const port = process.env.PORT || 4000;

let notes = [
  { id: "1", content: "this is a note", author: "Adam Scott" },
  { id: "2", content: "this is author note", author: "Harlow Everly" },
  { id: "3", content: "Oh hey look, another note!", author: "Riley Harrison" },
];

const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String!
    notes: [Note!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    notes: () => notes,
  },
};

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

async function start() {
  await server.start();
  server.applyMiddleware({ app });
  app.listen({ port }, () =>
    console.log(
      `GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  );
}
start();
