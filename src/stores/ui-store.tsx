import {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useMemo,
	useReducer,
} from 'react';
import toast from 'react-hot-toast';

import { Cookie } from '~/utils';

interface ShowToastProps {
	message: string;
	type: 'success' | 'error';
}

interface UiState {
	isMiniCartOpen: boolean;
	openMiniCart: () => void;
	closeMiniCart: () => void;
	isAnnouncementBannerOpen: boolean;
	openAnnouncementBanner: () => void;
	closeAnnouncementBanner: () => void;
	isFullscreenLoadingOverlayOpen: boolean;
	openFullscreenLoadingOverlay: () => void;
	closeFullscreenLoadingOverlay: () => void;
	showToast: ({ message, type }: ShowToastProps) => void;
}

type UiAction =
	| { type: 'ui/open-mini-cart' }
	| { type: 'ui/close-mini-cart' }
	| { type: 'ui/open-announcement-banner' }
	| { type: 'ui/close-announcement-banner' }
	| { type: 'ui/open-fullscreen-loading-overlay' }
	| { type: 'ui/close-fullscreen-loading-overlay' };

const initialUiState: UiState = {
	isMiniCartOpen: false,
	openMiniCart: () => {},
	closeMiniCart: () => {},
	isAnnouncementBannerOpen: false,
	openAnnouncementBanner: () => {},
	closeAnnouncementBanner: () => {},
	isFullscreenLoadingOverlayOpen: false,
	openFullscreenLoadingOverlay: () => {},
	closeFullscreenLoadingOverlay: () => {},
	showToast: () => {},
};

function uiReducer(state: UiState, action: UiAction): UiState {
	switch (action.type) {
		case 'ui/open-mini-cart': {
			return {
				...state,
				isMiniCartOpen: true,
			};
		}
		case 'ui/close-mini-cart': {
			return {
				...state,
				isMiniCartOpen: false,
			};
		}
		case 'ui/open-announcement-banner': {
			return {
				...state,
				isAnnouncementBannerOpen: true,
			};
		}
		case 'ui/close-announcement-banner': {
			Cookie.set('ui/was-announcement-banner-closed', true);
			return {
				...state,
				isAnnouncementBannerOpen: false,
			};
		}
		case 'ui/open-fullscreen-loading-overlay': {
			return {
				...state,
				isFullscreenLoadingOverlayOpen: true,
			};
		}
		case 'ui/close-fullscreen-loading-overlay': {
			return {
				...state,
				isFullscreenLoadingOverlayOpen: false,
			};
		}
		default: {
			return { ...state };
		}
	}
}

export const UiContext = createContext(initialUiState);

UiContext.displayName = 'UIContext';

export const UiContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
	const [uiState, dispatch] = useReducer(uiReducer, initialUiState);

	function openMiniCart() {
		dispatch({ type: 'ui/open-mini-cart' });
	}

	function closeMiniCart() {
		dispatch({ type: 'ui/close-mini-cart' });
	}

	function openAnnouncementBanner() {
		dispatch({ type: 'ui/open-announcement-banner' });
	}

	function closeAnnouncementBanner() {
		dispatch({ type: 'ui/close-announcement-banner' });
	}

	function openFullscreenLoadingOverlay() {
		dispatch({ type: 'ui/open-fullscreen-loading-overlay' });
	}

	function closeFullscreenLoadingOverlay() {
		dispatch({ type: 'ui/close-fullscreen-loading-overlay' });
	}

	function showToast({ message, type }: ShowToastProps) {
		if (type === 'error') {
			toast.error(message);
		} else {
			toast.success(message);
		}
	}

	const memoizedUiState = useMemo(
		() => ({
			...uiState,
			openMiniCart,
			closeMiniCart,
			openAnnouncementBanner,
			closeAnnouncementBanner,
			openFullscreenLoadingOverlay,
			closeFullscreenLoadingOverlay,
			showToast,
		}),
		[uiState],
	);

	// Read persisted UI state from local-storage and update the UI
	useEffect(() => {
		const wasAnnouncementBannerClosed = Cookie.get(
			'ui/was-announcement-banner-closed',
		);
		// The announcement banner is closed by default. If the user has not closed
		// it before, we open it. Else we do nothing.
		if (!wasAnnouncementBannerClosed) {
			memoizedUiState.openAnnouncementBanner();
		}
	}, []);

	return (
		<UiContext.Provider value={memoizedUiState}>{children}</UiContext.Provider>
	);
};
