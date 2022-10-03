<script lang="ts">
	import Button from "./Button.svelte";
	import { slide } from "svelte/transition";

	import type { ReadPostsResponseData } from "wundergraph/generated/models";
	import { useMutation } from "$lib/wundergraph.store";
	const { mutate: deletePost, status } = useMutation("DeletePost");

	export let post: ReadPostsResponseData["db_findManyPost"][number];
</script>

<!-- Each message is wrapped in a li -->
<li transition:slide class="post">
	<!-- Message content -->
	<span>{post.User.username} said "{post.body}" at {post.created_at}</span>

	<!-- Button to delete the message -->
	<Button on:click={() => deletePost({ id: post.id })}>&times;</Button>
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
