<script lang="ts">
	import Header from './Header.svelte';
    import {
		frameSDK,
		frameWalletConfig,
		isViewingFromFrame,
		isWalletReady
	} from '$lib/stores/global/main';

    import QuickAuth from '$lib/components/QuickAuth.svelte';
    import ComposeCastAction from '$lib/components/ComposeCastAction.svelte';

    let token: string | null = $state(null);
    let isContextOpen = $state(false);
    let selectedUrl: string = $state("");
    const toggleContext = () => {
        isContextOpen = !isContextOpen;
    };

    let context: any = $state(null);
    $effect(() => {
        console.log('frameSDK', $frameSDK);
        if($frameSDK && $frameSDK.context) {
            console.log('frameSDK', $frameSDK);
            $frameSDK.context.then(ctx => {
                console.log('ctx', ctx);
                context = ctx;
            });
        }
    });

    let fid: number = $state(16270);
</script>
<Header />

<div class="max-w-md mx-auto p-4 space-y-6">
    <div class="text-center">
      <h1 class="text-3xl font-bold">🧪 Farcaster MiniApp</h1>
    </div>
  
    <div class="collapse collapse-arrow bg-base-200">
      <input type="checkbox" bind:checked={isContextOpen} />
      <div class="collapse-title font-medium">Client Context</div>
      <div class="collapse-content">
        <pre class="text-xs whitespace-pre-wrap break-words">{JSON.stringify(context, (_, v) => typeof v === 'bigint' ? v.toString() : v, 2)}</pre>
      </div>
    </div>
</div>
<div class="max-w-md mx-auto p-4">
    <h1 class="text-lg font-semibold mb-2">Actions</h1>
</div>
<div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">🔑 Quick Auth</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        sdk.quickAuth()
    </div>
    <QuickAuth setToken={(t) => token = t} />
</div>


<div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">📝 Cast</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        sdk.actions.composeCast( ... )
    </div>
    <ComposeCastAction />
  </div>


<div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">📝 Cast</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        sdk.actions.openUrl( URL )
    </div>
    <button class="btn btn-primary mt-0.5" onclick={() => $frameSDK.actions.openUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>Open URL</button>
    <button class="btn btn-primary mt-0.5" onclick={() => $frameSDK.actions.openUrl("https://warpcast.com/~/compose")}>Open Warpcast URL</button>
  </div>

<div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">👤 View Profile</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        sdk.actions.viewProfile(&#123; fid: FID &#125;)
    </div>
    <input type="number" bind:value={fid} class="input input-bordered w-full max-w-xs mt-0.5" />
    <button class="btn btn-primary" onclick={() => $frameSDK.actions.viewProfile({ fid: fid })}>View Profile</button>
</div>

<div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">📝 Cast</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        sdk.actions.close()
    </div>
    <button class="btn btn-primary" onclick={() => $frameSDK.actions.close()}>Close</button>
  </div>


