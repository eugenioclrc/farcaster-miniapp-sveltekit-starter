// import { browser } from '$app/environment'
import { http, createConfig } from '@wagmi/core';
import { base, mainnet } from 'wagmi/chains';

import { farcasterMiniApp as miniAppConnector } from '@farcaster/miniapp-wagmi-connector';

export const supportedChains = [
	base.id,
	mainnet.id,
];

let _config: ReturnType<typeof createConfig> | null = null;

export const getConfig = () => {
	if(_config != null) return _config;
	_config = createConfig({
		chains: [base, mainnet],
		transports: {
			[base.id]: http(),
			[mainnet.id]: http(),
		},
		connectors: [miniAppConnector()]
	});
	return _config;
};
