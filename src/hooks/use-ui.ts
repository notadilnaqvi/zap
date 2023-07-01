'use client';

import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { SessionStorage } from '~/utils';

export type ShowToastProps = {
	message: string;
	type: 'success' | 'error'; // TODO: Add a warning type
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
	// Sign-up modal
	isNewsletterSignUpModalOpen: boolean;
	openNewsletterSignUpModal: () => void;
	closeNewsletterSignUpModal: () => void;
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
		const { message, type = 'success' } = props;
		if (type === 'error') {
			toast.error(message);
		} else if (type === 'success') {
			toast.success(message);
		}
	},
	// Sign-up modal
	isNewsletterSignUpModalOpen: false,
	openNewsletterSignUpModal: () => {
		set({ isNewsletterSignUpModalOpen: true });
	},
	closeNewsletterSignUpModal: () => {
		SessionStorage.set('ui/was-newsletter-sign-up-modal-closed', true);
		set({ isNewsletterSignUpModalOpen: false });
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
