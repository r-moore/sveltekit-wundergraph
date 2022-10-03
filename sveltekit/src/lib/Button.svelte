<button {...$$props} on:click><slot /></button>

<style>
	button {
		padding: var(--spacing-1);
		padding-left: var(--spacing-2);
		padding-right: var(--spacing-2);
		border-radius: 3px;
		background-color: dodgerblue;
		color: white;
		font-weight: 500;
		letter-spacing: 0.03rem;
	}
</style>
