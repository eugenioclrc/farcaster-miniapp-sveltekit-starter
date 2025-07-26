<script lang="ts">
    import {
		frameSDK
	} from '$lib/stores/global/main';
  
    let result: any = $state(null);
  
    async function compose() {
      result = await $frameSDK.actions.composeCast({
        text: 'Hello from Demo Mini App',
        embeds: ['https://farcaster-miniapp-sveltekit-starter.vercel.app/'],
      });
    }
  </script>
  
  
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

  