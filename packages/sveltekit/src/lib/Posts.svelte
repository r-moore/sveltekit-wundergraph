<script lang="ts">
	import { useQueryClient } from "@tanstack/svelte-query";
	import type { ReadPostsResponseData } from "wundergraph/generated/models";
	import { createMutation, queryKey } from "./wundergraph";
	import Post from "./Post.svelte";
	import Button from "./Button.svelte";
	import TextInput from "./TextInput.svelte";

	// props
	export let posts: ReadPostsResponseData["db_findManyPost"] = [];

	// local state
	let postBodyTextInput = ""; // bind to TextInput value

	const client = useQueryClient();
	const createPostMutation = createMutation({ operationName: "CreatePost" });
	const submitHandler = async () => {
		const ReadPostsKey = queryKey({ operationName: "ReadPosts" });
		await $createPostMutation.mutateAsync(
			{
				input: {
					body: postBodyTextInput,
					User: { connect: { username: "demo_user" } },
				},
			},
			{ onSuccess: () => client.invalidateQueries([ReadPostsKey]) }
		);
		postBodyTextInput = ""; // reset input after mutation
	};
</script>

<h2>Posts</h2>

{#if posts?.length > 0}
	<ul class="posts">
		{#each posts as post (post.id)}
			<Post {post} />
		{/each}
	</ul>
{:else}
	<p>No messages</p>
{/if}

<form on:submit|preventDefault={submitHandler}>
	<TextInput bind:value={postBodyTextInput} />
	<Button type="submit">Add Post</Button>
</form>

<style>
	ul.posts {
		padding-left: 0;
		display: flex;
		flex-direction: column;
	}
</style>
