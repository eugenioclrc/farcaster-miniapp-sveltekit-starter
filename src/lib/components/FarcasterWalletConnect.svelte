<script lang="ts">
    import { getConfig } from '$lib/frames/global/farcaster-wallet';
	import { watchConnections, getAccount, connect } from '@wagmi/core';
	import { farcasterMiniApp as miniAppConnector } from '@farcaster/miniapp-wagmi-connector';
    import { frameWalletConfig, isWalletReady, userWallet } from '$lib/stores/global/main';
    import { onMount } from 'svelte';

    let unwatch: (() => void) | undefined;

    onMount(async () => {
        const config = getConfig();
        $frameWalletConfig = config;

        		if (getAccount($frameWalletConfig)?.address) {
			$isWalletReady = true;
            $userWallet = getAccount($frameWalletConfig)?.address || null;
		} else {
			unwatch = watchConnections($frameWalletConfig, {
				onChange() {
					if (getAccount($frameWalletConfig)?.address) {
						$isWalletReady = true;
                        $userWallet = getAccount($frameWalletConfig)?.address || null;
					}
				}
			});
		}
    });

    onMount(() => {
        return () => {
            if (unwatch) unwatch();
        };
    });

    async function doConnect() {
        const result = await connect(getConfig(), {
            connector: miniAppConnector()
        });
        console.log(result);
    }
</script>

<div class="card bg-base-100 shadow-md p-4">
    <h2 class="text-lg font-semibold mb-2">💳 Wallet Connect</h2>
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        wagmi.connect
    </div>

    {#if $isWalletReady && !$userWallet}
    <button class="btn btn-primary" onclick={doConnect}>Wallet Connect</button>
    {:else if $userWallet}
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        Wallet Connected: {$userWallet}
    </div>
    {:else}
    <button class="btn btn-primary" onclick={doConnect}>Wallet Connect</button>
    {/if}
  </div>