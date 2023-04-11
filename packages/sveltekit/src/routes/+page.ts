import type { PageLoad } from "./$types";
import { createClient } from "wundergraph/generated/client";
import type { ReadPostsResponseData } from "wundergraph/generated/models";

export const load: PageLoad = async ({ fetch, setHeaders }) => {
	const client = createClient({
		baseURL: "http://127.0.0.1:9991",
		customFetch: fetch,
	});

	const { data, error } = await client.query({
		operationName: "ReadPosts",
	});

	setHeaders({
		"Cache-Control":
			error /* don't cache errored pages */ ||
			import.meta.env.DEV /* don't cache when working on localhost */
				? "no-cache"
				: "max-age: 3600, public",
		// max-age=3600 - refresh cache if the cached copy is older than 1hr (uses the Age header)
		// public - tells CDNs to cache this page (not just browsers)
	});

	return data as ReadPostsResponseData;
};
