import {
	createContext,
	FC,
	PropsWithChildren,
	useMemo,
	useReducer,
} from 'react';
import toast from 'react-hot-toast';

import { LocalStorage } from '~/utils';

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
			LocalStorage.set('ui/is-mini-cart-open', true);
			return {
				...state,
				isMiniCartOpen: true,
			};
		}
		case 'ui/close-mini-cart': {
			LocalStorage.set('ui/is-mini-cart-open', false);
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
			LocalStorage.set('ui/should-show-announcement-banner', false);
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
	// useEffect(() => {
	// const shouldShowAnnouncementBanner = LocalStorage.get(
	// 	'ui/should-show-announcement-banner',
	// );
	// if (shouldShowAnnouncementBanner !== false) {
	// }
	// memoizedUiState.openAnnouncementBanner();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<UiContext.Provider value={memoizedUiState}>{children}</UiContext.Provider>
	);
};
