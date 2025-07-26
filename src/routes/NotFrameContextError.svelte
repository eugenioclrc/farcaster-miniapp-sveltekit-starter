<script lang="ts">
	function reload() {
		location.reload();
	}
</script>

<div class="card bg-base-200 text-base-content max-w-xs shadow-xl" role="alert">
	<div class="card-body items-center text-center gap-4 p-6">
		<!-- Icon bubble -->
		<div class="avatar placeholder">
			<div class="bg-error/20 text-error rounded-full w-12 h-12 flex items-center justify-center mx-auto">
				<svg
					aria-hidden="true"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.5"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
					/>
				</svg>
			</div>
		</div>

		<h2 class="card-title text-error">Error</h2>
		<p class="opacity-70 text-sm leading-relaxed">
			This website is meant to only be accessed through a Farcaster / Warpcast Frame V2 context.
			Please use a client that implements the V2 Frames spec.
		</p>

		<div class="card-actions w-full">
			<button class="btn btn-error btn-block" on:click|preventDefault={reload}>
				Reload
			</button>
		</div>
	</div>
</div>
