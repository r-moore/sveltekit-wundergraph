import { onMount } from "svelte";
import { derived, writable } from "svelte/store";
import {
	createClient,
	type LiveQueries,
	type Mutations,
	type Queries,
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
	const result = writable<Queries[T]["response"]>();

	const fetchResult = async () => {
		status.set("loading");
		fetching.set(true);
		try {
			const res = await client.query({ operationName, input });
			if (res.data) {
				result.set(res.data);
				status.set("loaded");
			} else {
				status.set("error");
			}
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

export function useSubscription<T extends keyof LiveQueries>(
	operationName: T,
	onUpdate: (response: ClientResponse<LiveQueries[T]["response"]>) => void
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
