import type { CtTestData } from '~/lib/commercetools/types';
import { ctTestDataSchema } from '~/utils';

type LocalStorage = {
	'ct/test-data': CtTestData;
};

function get(key: 'ct/test-data'): Maybe<LocalStorage['ct/test-data']>;
function get(key: keyof LocalStorage) {
	try {
		if (typeof window === 'undefined') return null;

		const item = window.localStorage.getItem(key);

		if (!item) return null;

		if (key === 'ct/test-data') {
			const value = ctTestDataSchema.parse(JSON.parse(item));
			return value;
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

function remove(key: keyof LocalStorage) {
	if (typeof window === 'undefined') return;
	window.localStorage.removeItem(key);
}

export const LocalStorage = { get, set, remove };
