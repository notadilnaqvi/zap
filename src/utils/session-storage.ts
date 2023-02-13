import { CtTestData } from '~/lib/commercetools/types';
import { ctTestDataSchema } from '~/lib/commercetools/validators';

type SessionStorage = {
	'ct/test-data': CtTestData;
};

function get(key: 'ct/test-data'): Maybe<SessionStorage['ct/test-data']>;
function get(key: keyof SessionStorage) {
	try {
		if (typeof window === 'undefined') return null;

		const item = window.sessionStorage.getItem(key);

		if (!item) return null;

		if (key === 'ct/test-data') {
			const value = ctTestDataSchema.parse(JSON.parse(item));
			return value;
		}

		const _exhaustiveCheck: never = key;

		return null;
	} catch (err) {
		console.error('[SessionStorage]: Failed to get ' + key, err);
		return null;
	}
}

function set<K extends keyof SessionStorage, V extends SessionStorage[K]>(
	key: K,
	val: V,
) {
	if (typeof window === 'undefined') return;
	window.sessionStorage.setItem(key, JSON.stringify(val));
}

function remove(key: keyof SessionStorage) {
	if (typeof window === 'undefined') return;
	window.sessionStorage.removeItem(key);
}

export const SessionStorage = { get, set, remove };
