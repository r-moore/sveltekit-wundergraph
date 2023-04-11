<script lang="ts">
	import { useQueryClient } from "@tanstack/svelte-query";
	import type { ReadPostsResponseData } from "wundergraph/generated/models";
	import { createMutation, queryKey } from "./wundergraph";
	import { slide } from "svelte/transition";
	import Button from "./Button.svelte";

	// props
	export let post: ReadPostsResponseData["db_findManyPost"][number];

	const client = useQueryClient();
	const deletePostMutation = createMutation({ operationName: "DeletePost" });
	const deletePost = async (id: number) => {
		const ReadPostsKey = queryKey({ operationName: "ReadPosts" });
		await $deletePostMutation.mutateAsync(
			{ id },
			{ onSuccess: () => client.invalidateQueries([ReadPostsKey]) }
		);
	};
</script>

<li transition:slide class="post">
	<!-- Message content -->
	<span>{post.User.username} said "{post.body}" at {post.created_at}</span>

	<!-- Button to delete the message -->
	<Button on:click={() => deletePost(post.id)}>&times;</Button>
</li>

<style>
	li.post {
		background-color: floralwhite;
		flex-grow: 1;
		display: flex;
		border: 1px solid var(--slate-300);
		padding: var(--spacing-2);
		margin-bottom: var(--spacing-2);
		border-radius: 3px;
		justify-content: space-between;
		align-items: center;
	}
</style>
