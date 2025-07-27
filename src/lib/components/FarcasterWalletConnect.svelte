<script lang="ts">
    import { getConfig } from '$lib/frames/global/farcaster-wallet';
	import { watchConnections, getAccount, connect, disconnect, getChainId, signMessage, signTypedData } from '@wagmi/core';
	import { farcasterMiniApp as miniAppConnector } from '@farcaster/miniapp-wagmi-connector';
    import { frameWalletConfig, isWalletReady, userWallet } from '$lib/stores/global/main';
    import { onMount } from 'svelte';

    let unwatch: (() => void) | undefined;

    let chainId: number | null = $state(null);

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
/*
    $effect(() => {
        if($frameWalletConfig && $isWalletReady) {
            chainId = getChainId($frameWalletConfig);
            $userWallet = getAccount($frameWalletConfig)?.address || null;
        }
    });
    */

    async function doConnect() {
        const result = await connect(getConfig(), {
            connector: miniAppConnector()
        });
        console.log(result);
        chainId = getChainId($frameWalletConfig);
        $userWallet = getAccount($frameWalletConfig)?.address || null;
    }

    async function doDisconnect() {
        try {
            const result = await disconnect(getConfig());
            console.log(result);
        } catch (error) {
            console.log("disconnect error, seems to be not working");
            console.error(error);
        }
        $userWallet = null;
    }


    function sign(){
        signMessage(getConfig(), { message: "Hello world from Frames v2!" });
    }

    function signTyped() {
        signTypedData(getConfig(), {
            domain: {
                name: "Frames v2 Demo",
                version: "1",
                chainId: 8453, // @important hardcoded for now
            },
            types: {
                Message: [{ name: "content", type: "string" }],
            },
            message: {
                content: "Hello world from Frames v2!",
            },
            primaryType: "Message",
        });
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
    <button class="btn btn-primary" onclick={doDisconnect}>Wallet Disconnect</button>
    {:else}
    <button class="btn btn-primary" onclick={doConnect}>Wallet Connect</button>
    {/if}
    <!-- chain id -->
    <div class="bg-neutral text-white font-mono text-sm rounded px-3 py-1">
        chain id: {chainId}
    </div>
    <button class="btn btn-primary" onclick={sign} disabled={!$isWalletReady || !$userWallet}>Sign</button>
    <button class="btn btn-primary" onclick={signTyped} disabled={!$isWalletReady || !$userWallet}>Sign Typed</button>
  </div>