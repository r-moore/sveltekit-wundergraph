import { onMount } from "svelte";
import { derived, writable } from "svelte/store";
import {
	createClient,
	type Queries,
	type LiveQueries,
	type Mutations,
} from "wundergraph/generated/client";
import type { ClientResponse } from "@wundergraph/sdk/client";

type Status = "idle" | "loading" | "loaded" | "error";

const client = createClient({
	baseURL: "http://127.0.0.1:9991",
	customFetch: fetch,
});

export const fetching = writable<boolean>(false);

export function useQuery<T extends keyof Queries>(
	operationName: T,
	input: Queries[T]["input"]
) {
	const status = writable<Status>("loading");
	const result = writable<ClientResponse<Queries[T]["data"]>>();

	const fetchResult = async () => {
		status.set("loading");
		fetching.set(true);
		try {
			const res = await client.query({ operationName, input });
			result.set(res);
			status.set("loaded");
		} catch (err) {
			status.set("error");
		}
		fetching.set(false);
	};

	fetchResult();

	return {
		status: derived(status, (x) => x),
		result: derived(result, (x) => x),
		refetch: fetchResult,
	};
}

/**
 * Creates a live query that initializes with svelte#onMount and aborts on unmount.
 *
 * @param operationName the name of a WunderGraph operation
 * @param onUpdate Function to run when query result is updated
 */
export function useSubscription<T extends keyof LiveQueries>(
	operationName: T,
	onUpdate: (response: ClientResponse<LiveQueries[T]["data"]>) => void
) {
	// when the component using	 this hook mounts...
	onMount(async () => {
		const { signal: abortSignal, abort } = new AbortController();

		await client.subscribe(
			{ operationName, abortSignal, liveQuery: true },
			onUpdate
		);

		// when the component using this hook unmounts...
		return () => {
			abort();
		};
	});
}

export function useMutation<T extends keyof Mutations>(operationName: T) {
	const status = writable<Status>("idle");
	const result = writable<ClientResponse<Mutations[T]["data"]>>();

	return {
		status: derived(status, (x) => x),
		result: derived(result, (x) => x),
		async mutate(input: Mutations[T]["input"]) {
			fetching.set(true);
			status.set("loading");
			const res = await client.mutate({ operationName, input });
			result.set(res);
			status.set("loaded");
			fetching.set(false);
			return res;
		},
	};
}
