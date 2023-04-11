import { createSvelteClient } from "@wundergraph/svelte-query"; // change this to @wundergraph/svelte-query for versions >0.1.0
import { createClient, type Operations } from "wundergraph/generated/client";

const client = createClient(); // Typesafe WunderGraph client

export const {
	createFileUpload,
	createMutation,
	createQuery,
	createSubscription,
	getAuth,
	getUser,
	queryKey,
	// prefetchQuery, // missing in 0.1.0 of @wundergraph/svelte-query
} = createSvelteClient<Operations>(client);
