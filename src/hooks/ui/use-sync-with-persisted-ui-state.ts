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
	// TODO
	function syncWithPersistedUiState() {
		console.log('Syncing with persisted UI state...');
	}

	return syncWithPersistedUiState;
}
