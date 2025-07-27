<script lang="ts">
	import '../app.css';

	import sdk from '@farcaster/miniapp-sdk';

	import { onMount } from 'svelte';
	import { frameWalletConfig, isViewingFromFrame } from '$lib/stores/global/main';
	import OnlyViewUsingFrame from './OnlyViewUsingFrame.svelte';

	import { page as SveltePage } from '$app/state';
	import { config } from '$lib/config';

	import { generateURLFCFrameEmbed } from '$lib/frames/global/client/fc-frame-v2';

	const ogImage = `${config.resolvedBaseUrl}/logo.png`;
	const pageUrl = SveltePage.url.href.replace('http:', 'https:');
	const pageTitle = 'SveleteKit starter Mini App';
	const pageDescription =
		'Mini app starter for SvelteKit using Farcaster, 2 demo apps are included';

	onMount(async () => {
		const context = await sdk.context;

		sdk.on('miniAppAdded', ({ notificationDetails: details }) => {
			console.log(`miniAppAdded${details ? ', notifications enabled' : ''}`);
			if (details) {
				console.log('notificationDetails', details);
			}
		});

		sdk.on('miniAppAddRejected', ({ reason }) => {
			console.log(`miniAppAddRejected, reason ${reason}`);
		});

		sdk.on('miniAppRemoved', () => {
			console.log('miniAppRemoved');
		});

		sdk.on('notificationsEnabled', ({ notificationDetails: details }) => {
			console.log('notificationsEnabled');
			console.log('notificationDetails', details);
		});

		sdk.on('notificationsDisabled', () => {
			console.log('notificationsDisabled');
		});

		sdk.on('primaryButtonClicked', () => {
			console.log('primaryButtonClicked');
		});

		sdk.actions.ready();

		if ((context?.user?.fid || 0) > 0) {
			isViewingFromFrame.set(true);
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
	<a
		href="https://github.com/eugenioclrc/farcaster-miniapp-sveltekit-starter"
		target="_blank"
		class="underline"
	>
		Source on Github
	</a>
</p>
