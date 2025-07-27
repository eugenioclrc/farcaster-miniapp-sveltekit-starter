<script lang="ts">
	import { onMount } from 'svelte';
	import NotFrameContextError from './NotFrameContextError.svelte';

	let isLoading = $state(true);
	const maxLoadingTime = 1800;
	let loadingTime = 0;

	onMount(() => {
		const interval = setInterval(() => {
			loadingTime += 100;
			if (loadingTime >= maxLoadingTime) {
				clearInterval(interval);
				isLoading = false;
			}
		}, 100);
	});
</script>

<div class="mt-8 flex h-96 flex-col items-center justify-center">
	{#if isLoading}
		<div class="flex flex-col items-center gap-4">
			<span class="loading loading-lg loading-ring text-primary"></span>
			<span class="text-sm text-gray-500">Waiting for frame context...</span>
		</div>
	{:else}
		<NotFrameContextError />
	{/if}
</div>
