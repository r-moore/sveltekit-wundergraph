<script lang="ts">
	import Posts from "$lib/Posts.svelte";
	import { createQuery } from "$lib/wundergraph";

	const postsQuery = createQuery({ operationName: "ReadPosts" });

	$: ({ data, error, isLoading, isSuccess } = $postsQuery);
</script>

{#if isLoading}
	Loading...
{/if}

{#if error}
	An error has occurred: {error.message}
{/if}

{#if isSuccess}
	<Posts posts={data?.db_findManyPost} />
{/if}
