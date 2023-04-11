<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;

	import Posts from "$lib/Posts.svelte";

	import { useSubscription, fetching } from "$lib/wundergraph.store";
	import type { ReadPostsResponseData } from "wundergraph/generated/models";

	let posts: ReadPostsResponseData["db_findManyPost"] = [];
	if ("db_findManyPost" in data) posts = data.db_findManyPost;

	useSubscription("ReadPosts", (res) => {
		if (res.data) {
			posts = res.data.db_findManyPost;
		}
	});
</script>

<Posts {posts} />
