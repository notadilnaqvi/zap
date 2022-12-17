import { useUi } from '~/hooks/ui';
import { SessionStorage } from '~/utils';

/**
 * Read persisted UI state from browser storage and update the current UI
 * state accordingly.
 *
 * This hook only needs to be used once and only in `_app.tsx`
 *
 * NOTE: Middlewares like `zustand/persist` are not used here because they
 * do not work well with SSR.
 */
export function useSyncWithPersistedUiState() {
	const openAnnouncementBanner = useUi(state => state.openAnnouncementBanner);
	const isAnnouncementBannerOpen = useUi(
		state => state.isAnnouncementBannerOpen,
	);

	function syncWithPersistedUiState() {
		const wasAnnouncementBannerClosed = SessionStorage.get(
			'ui/was-announcement-banner-closed',
		);
		// Announcement banner is closed by default. Open it if it was not closed
		// by the user previously and it is not open already.
		const shouldOpenAnnouncementBanner =
			!wasAnnouncementBannerClosed && !isAnnouncementBannerOpen;
		if (shouldOpenAnnouncementBanner) {
			openAnnouncementBanner();
		}
	}

	return syncWithPersistedUiState;
}
