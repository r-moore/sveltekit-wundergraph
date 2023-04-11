<script lang="ts">
	export let value: string;
</script>

<input {...$$props} bind:value />

<style>
	input {
		border: 1px solid var(--slate-300);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: 2px;
	}
</style>
