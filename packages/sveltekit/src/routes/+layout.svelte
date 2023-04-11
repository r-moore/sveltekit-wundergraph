<script lang="ts">
	import "$lib/variables.css";
	import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";
	import { browser } from "$app/environment";
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
			},
		},
	});
</script>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
