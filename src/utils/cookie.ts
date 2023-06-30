import type { CookieAttributes } from 'js-cookie';
import Cookies from 'js-cookie';

import type { AuthToken } from '~/lib/commercetools/types';
import { authTokenSchema } from '~/lib/commercetools/validators';

type Cookie = {
	zap_auth_token: AuthToken;
};

function get(key: 'zap_auth_token'): Maybe<Cookie['zap_auth_token']>;
function get(key: keyof Cookie) {
	try {
		if (typeof window === 'undefined') return null;

		const item = Cookies.get(key);

		if (!item) return null;

		if (key === 'zap_auth_token') {
			const value = authTokenSchema.parse(JSON.parse(item));
			return value;
		}

		const _exhaustiveCheck: never = key;

		return null;
	} catch (err) {
		console.error('[Cookie]: Failed to get ' + key, err);
		return null;
	}
}

function set<K extends keyof Cookie, V extends Cookie[K]>(
	key: K,
	val: V,
	options?: CookieAttributes,
) {
	if (typeof window === 'undefined') return;
	Cookies.set(key, JSON.stringify(val), options);
}

function remove(key: keyof Cookie, options?: CookieAttributes): void {
	if (typeof window === 'undefined') return;
	Cookies.remove(key, options);
}

export const Cookie = { get, set, remove };
