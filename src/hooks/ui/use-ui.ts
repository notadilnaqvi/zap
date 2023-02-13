'use client';

import { toast } from 'react-hot-toast';
import { create } from 'zustand';

type ShowToastProps = {
	message: string;
	type: 'success' | 'error';
};

type OpenFullscreenLoadingOverlayProps = {
	text: string;
};

interface UiState {
	// Mini-cart
	isMiniCartOpen: boolean;
	openMiniCart: () => void;
	closeMiniCart: () => void;
	// Announcement banner
	isAnnouncementBannerOpen: boolean;
	openAnnouncementBanner: () => void;
	closeAnnouncementBanner: () => void;
	// Fullscreen loading overlay
	isFullscreenLoadingOverlayOpen: boolean;
	fullscreenLoadingOverlayText: string;
	openFullscreenLoadingOverlay: (
		props: Maybe<OpenFullscreenLoadingOverlayProps>,
	) => void;
	closeFullscreenLoadingOverlay: () => void;
	// Toast
	showToast: (props: ShowToastProps) => void;
	// Close all modals and sidebars
	closeAllModalsAndSidebars: () => void;
}

export const useUi = create<UiState>(set => ({
	// Mini-cart
	isMiniCartOpen: false,
	openMiniCart: () => set({ isMiniCartOpen: true }),
	closeMiniCart: () => set({ isMiniCartOpen: false }),
	// Announcement banner
	isAnnouncementBannerOpen: true,
	openAnnouncementBanner: () => set({ isAnnouncementBannerOpen: true }),
	closeAnnouncementBanner: () => {
		set({ isAnnouncementBannerOpen: false });
	},
	// Fullscreen loading overlay
	isFullscreenLoadingOverlayOpen: false,
	fullscreenLoadingOverlayText: 'Loading...',
	openFullscreenLoadingOverlay: props => {
		set({
			isFullscreenLoadingOverlayOpen: true,
			fullscreenLoadingOverlayText: props?.text || 'Loading...',
		});
	},
	closeFullscreenLoadingOverlay: () => {
		set({
			isFullscreenLoadingOverlayOpen: false,
		});
	},
	// Toast
	showToast: props => {
		const { message, type } = props;
		if (type === 'error') {
			toast.error(message);
		} else if (type === 'success') {
			toast.success(message);
		}
	},
	// Close all modals and sidebars
	closeAllModalsAndSidebars: () => {
		set({
			// Add all modals, sidebars, etc. here that you want to close
			// when the route changes
			isMiniCartOpen: false,
		});
	},
}));
