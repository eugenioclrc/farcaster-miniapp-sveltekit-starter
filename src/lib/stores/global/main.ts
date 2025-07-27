import { writable } from 'svelte/store';
import type { WalletConfig } from '$lib/types/frame-sdk';

export const navigationLoading = writable(false);
export const frameWalletConfig = writable<WalletConfig>(null as unknown as WalletConfig);
export const isViewingFromFrame = writable(false);
export const isWalletReady = writable(false);
