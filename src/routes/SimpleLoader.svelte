<script lang="ts">
	const squares = Array.from({ length: 9 });
</script>

<div class="relative w-10 h-10">
	{#each squares as _, i}
		<div
			class="absolute w-[10px] h-[10px] bg-base-300"
			style="
				top: {(Math.floor(i/3) - 1) * 20}px;
				left: {((i % 3) - 1) * 20}px;
				animation: fade 0.675s ease-in-out {i * 75}ms infinite alternate;
			" />
	{/each}
</div>

<style>
	@keyframes fade {
		from { opacity: 0; }
		to   { opacity: 1; }
	}
</style>
