import { useUi } from '~/hooks';
import { SessionStorage } from '~/utils';

/**
 * Read persisted UI state from browser storage and update the current UI
 * state accordingly.
 *
 * This hook only needs to be used once and only in the root layout
 */
export function useSyncWithPersistedUiState() {
	const openSignUpModal = useUi(state => state.openSignUpModal);
	function syncWithPersistedUiState() {
		const wasNewsletterSignUpModalClosed = SessionStorage.get(
			'ui/was-newsletter-sign-up-modal-closed',
		);
		// Only open the newsletter sign-up modal if it hasn't been closed before
		if (!wasNewsletterSignUpModalClosed) {
			openSignUpModal();
		}
	}

	return syncWithPersistedUiState;
}
