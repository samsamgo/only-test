import React from "react";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import "./App.css";

function App() {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;
  const resolvers = {
    Query: {
      hello: () => "Hello world!",
    },
  };
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );

  return <>hello</>;
}

export default App;
