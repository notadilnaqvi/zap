import { CtTokenInfo } from '~/lib/commercetools/types';
import { ctTokenInfoSchema } from '~/lib/commercetools/validators';

type LocalStorage = {
	'ct/token-info': CtTokenInfo;
	'ct/test': string;
};

function get<K extends keyof LocalStorage>(key: K): Maybe<LocalStorage[K]> {
	try {
		if (typeof window === 'undefined') return null;

		const item = window.localStorage.getItem(key);

		if (!item) return null;

		if (key === 'ct/token-info') {
			const value = ctTokenInfoSchema.parse(JSON.parse(item));
			return value as LocalStorage[K];
		}

		if (key === 'ct/test') {
			const value = ctTokenInfoSchema.parse(JSON.parse(item));
			return value as LocalStorage[K];
		}

		const _exhaustiveCheck: never = key;

		return null;
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
