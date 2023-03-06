const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

const db = require("./db");
const models = require("./moduls");
//.env 파일에 명시된 포트 또는 포트 4000에서 서버를 실행
const port = process.env.PORT || 4000;
//DB_HOST값을 변수로 저장
const DB_HOST = process.env.DB_HOST;

let notes = [
  { id: "1", content: "this is a note", author: "Adam Scott" },
  { id: "2", content: "this is author note", author: "Harlow Everly" },
  { id: "3", content: "Oh hey look, another note!", author: "Riley Harrison" },
];

//그래프QL 스키마 언어로 스키마를 구성
const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }

  type Query {
    hello: String!
    notes: [Note!]!
    note(id: ID!): Note!
  }

  type Mutation {
    newNote(content: String!): Note!
  }
`;

//스키마 필드를 위한 리졸버 함수 제공
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    notes: () => notes,
    note: async () => {
      return await models.Note.find();
    },
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: "Adam Scott",
      };
      notes.push(noteValue);
      return noteValue;
    },
  },
};

const app = express();
//DB에 연결
db.connect(DB_HOST);
//apolloserver에 연결
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
