import {
	Application,
	configureWunderGraphApplication,
	cors,
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

const myApplication = new Application({
	name: "app",
	apis: [db],
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
	application: myApplication,
	server,
	operations,
	codeGenerators: [
		{
			templates: [
				// use all the typescript react templates to generate a client
				templates.typescript.client,
				templates.typescript.operations,
				templates.typescript.linkBuilder,
			],
			// create-react-app expects all code to be inside /src
			path: "./generated",
		},
	],
	cors: {
		...cors.allowAll,
		allowedOrigins: ["http://127.0.0.1:3000", "http://localhost:3000"],
	},
	dotGraphQLConfig: {
		hasDotWunderGraphDirectory: false,
	},
	security: {
		enableGraphQLEndpoint: false,
	},
});
