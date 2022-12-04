import { useContext } from 'react';

import { UiContext } from '~/stores/ui-store';

export function useUi() {
	const uiContext = useContext(UiContext);
	if (typeof uiContext === 'undefined') {
		throw new Error('`useUi()` must be used within UiContextProvider');
	}
	return uiContext;
}
