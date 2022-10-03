<script lang="ts">
	export let posts: ReadPostsResponseData["db_findManyPost"] = [];

	import Button from "./Button.svelte";
	import TextInput from "./TextInput.svelte";

	import type { ReadPostsResponseData } from "wundergraph/generated/models";

	import { useMutation } from "$lib/wundergraph.store";
	import Post from "./Post.svelte";

	const { mutate: createPost } = useMutation("CreatePost");

	let newPost = "";

	const submitHandler = async () => {
		await createPost({
			input: { body: newPost, User: { connect: { username: "demouser" } } },
		});
		newPost = "";
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
	<TextInput bind:value={newPost} />
	<Button type="submit">Add Post</Button>
</form>

<style>
	ul.posts {
		padding-left: 0;
		display: flex;
		flex-direction: column;
	}
</style>
