import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  introspect,
  templates,
} from "@wundergraph/sdk";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";

const db = introspect.sqlite({
  apiNamespace: "db",
  databaseURL: "file:../database/dev.sqlite",
  introspection: {
    pollingIntervalSeconds: 5,
  },
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [db],
  server,
  operations,
  codeGenerators: [
    {
      templates: [
        // use all the typescript react templates to generate a client
        ...templates.typescript.all,
      ],
      // create-react-app expects all code to be inside /src
      path: "./generated",
    },
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      new EnvironmentVariable("WG_ALLOWED_ORIGIN"),
    ],
  },
  dotGraphQLConfig: {
    hasDotWunderGraphDirectory: false,
  },
  security: {
    enableGraphQLEndpoint: false,
  },
});
