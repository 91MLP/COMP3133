import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import bodyParser from "body-parser";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const app = express();
const PORT = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

await server.start();

app.use("/graphql", bodyParser.json(), expressMiddleware(server));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
  console.log(`GraphQL Sandbox: http://localhost:${PORT}/graphql`);
});
