<script lang="ts">
	import '../app.css';

	import type { FrameSdk } from '$lib/types/frame-sdk';
	import { onMount } from 'svelte';
	import { getConfig } from '$lib/frames/global/farcaster-wallet';
	import {
		frameSDK,
		frameWalletConfig,
		isViewingFromFrame,
		isWalletReady
	} from '$lib/stores/global/main';
	import OnlyViewUsingFrame from './OnlyViewUsingFrame.svelte';
	import { watchConnections, getAccount, connect } from '@wagmi/core';
	import { farcasterMiniApp as miniAppConnector } from '@farcaster/miniapp-wagmi-connector';

	import { page as SveltePage } from '$app/state';
	import { config } from '$lib/config';

	import { generateURLFCFrameEmbed } from '$lib/frames/global/client/fc-frame-v2';

	const ogImage = `${config.resolvedBaseUrl}/images/ogs/ffe-og-index.webp`;
	const pageUrl = SveltePage.url.href.replace('http:', 'https:');
	const pageTitle = 'SveleteKit starter Mini App';
	const pageDescription =
		'Mini app starter for SvelteKit using Farcaster, 2 demo apps are included';

	async function pageIsReady(sdk: FrameSdk) {
		const context = await sdk.context;
		sdk.actions.ready();
		return context;
	}

	onMount(async () => {
		const module = await import('@farcaster/miniapp-sdk');
		const context = await pageIsReady(module.default);
		frameSDK.set(module.default);
		const config = await getConfig();
		frameWalletConfig.set(config);

		const result = await connect(config, {
			connector: miniAppConnector()
		});
		if ((context?.user?.fid || 0) > 0) {
			isViewingFromFrame.set(true);
		}
		if (getAccount($frameWalletConfig)?.address) {
			isWalletReady.set(true);
		} else {
			const unwatch = watchConnections($frameWalletConfig, {
				onChange() {
					if (getAccount($frameWalletConfig)?.address) {
						isWalletReady.set(true);
						unwatch();
					}
				}
			});
		}
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${pageUrl}`} />
	<meta property="og:image" content={ogImage} />

	<meta
		name="fc:miniapp"
		content={generateURLFCFrameEmbed({
			url: pageUrl,
			featureImage: ogImage
		})}
	/>
</svelte:head>

{#if !$isViewingFromFrame}
	<OnlyViewUsingFrame />
{:else}
	{@render children()}
{/if}
<!-- Small footer link to source on github -->
<p class="text-center text-xs text-gray-500">
	<a href="https://github.com/eugenioclrc/farcaster-miniapp-sveltekit-starter" target="_blank" class="underline">
		Source on Github
	</a>
</p>
