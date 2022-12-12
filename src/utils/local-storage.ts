import { ctTokenInfoSchema } from '~/lib/commercetools/schemas';
import { CtTokenInfo } from '~/lib/commercetools/types';

type LocalStorage = {
	'ct/token-info': CtTokenInfo;
};

function get<K extends keyof LocalStorage>(key: K): Maybe<LocalStorage[K]> {
	try {
		if (typeof window === 'undefined') return null;

		const item = window.localStorage.getItem(key);

		if (!item) return null;

		switch (key) {
			case 'ct/token-info': {
				const value = ctTokenInfoSchema.parse(JSON.parse(item));
				return value as LocalStorage[K];
			}
			default: {
				return null;
			}
		}
	} catch (err) {
		console.error('[LocalStorage]: Failed to get ' + key, err);
		return null;
	}
}

function set<K extends keyof LocalStorage, V extends LocalStorage[K]>(
	key: K,
	val: V,
) {
	if (typeof window === 'undefined') return;
	window.localStorage.setItem(key, JSON.stringify(val));
}

function remove<K extends keyof LocalStorage>(key: K) {
	if (typeof window === 'undefined') return;
	window.localStorage.removeItem(key);
}

export const LocalStorage = { get, set, remove };
