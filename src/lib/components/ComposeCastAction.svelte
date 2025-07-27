<script lang="ts">
    import sdk from '@farcaster/miniapp-sdk';
  
    let result: any = $state(null);
  
    async function compose() {
      result = await sdk.actions.composeCast({
        text: 'Hello from Demo Mini App',
        embeds: ['https://farcaster-miniapp-sveltekit-starter.vercel.app/'],
      });
    }
  </script>
  
  <div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">📝 Cast</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        sdk.actions.composeCast( ... )
    </div>
  
    <button
      class="btn w-full bg-purple-500 hover:bg-purple-600 text-white font-bold"
      onclick={compose}
    >
      Compose Cast
    </button>
  
    {#if result?.cast?.hash}
      <div class="alert alert-info text-xs">
        Cast Hash: {result.cast.hash}
      </div>
    {/if}
  </div>
  