import { createServer } from "miragejs";

import { createGraphQLHandler } from "@miragejs/graphql";

const graphQLSchema = `
  type Place {
    id: ID!
    name: String!
  }

  type Query {
    places(name: String): [Place]
    place(id: ID, name: String): Place
  }
`;

if (window.mockedServer) {
  window.mockedServer.shutdown();
}

window.mockedServer =
  process.env.NODE_ENV !== "production" &&
  createServer({
    routes() {
      this.post("/graphql", createGraphQLHandler(graphQLSchema, this.schema));
    },

    seeds(server) {
      server.create("Place", {
        name: "Hamburgueria 60",
      });
      server.create("Place", {
        name: "O Matuto Churrascaria",
      });
      server.create("Place", {
        name: "Outback",
      });
    },
  });
