import { toast } from 'react-hot-toast';
import create from 'zustand';

import { SessionStorage } from '~/utils';

interface ShowToastProps {
	message: string;
	type: 'success' | 'error';
}

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
	openFullscreenLoadingOverlay: () => void;
	closeFullscreenLoadingOverlay: () => void;
	// Toast
	showToast: ({ message, type }: ShowToastProps) => void;
	// Close all modals and sidebars
	closeAllModalsAndSidebars: () => void;
}

export const useUi = create<UiState>(set => ({
	// Mini-cart
	isMiniCartOpen: false,
	openMiniCart: () => set({ isMiniCartOpen: true }),
	closeMiniCart: () => set({ isMiniCartOpen: false }),
	// Announcement banner
	isAnnouncementBannerOpen: false,
	openAnnouncementBanner: () => set({ isAnnouncementBannerOpen: true }),
	closeAnnouncementBanner: () => {
		SessionStorage.set('ui/was-announcement-banner-closed', true);
		set({ isAnnouncementBannerOpen: false });
	},
	// Fullscreen loading overlay
	isFullscreenLoadingOverlayOpen: false,
	openFullscreenLoadingOverlay: () =>
		set({ isFullscreenLoadingOverlayOpen: true }),
	closeFullscreenLoadingOverlay: () =>
		set({ isFullscreenLoadingOverlayOpen: false }),
	// Toast
	showToast: ({ message, type }) => {
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
