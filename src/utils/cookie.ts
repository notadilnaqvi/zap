import Cookies from 'js-cookie';

type CookieKey = 'ct/token-info';

function get(key: CookieKey): any {
	if (typeof window === 'undefined') return;
	return Cookies.get(key);
}

function set(key: CookieKey, val: any): void {
	if (typeof window === 'undefined') return;
	Cookies.set(key, val);
}

function remove(key: CookieKey): void {
	if (typeof window === 'undefined') return;
	Cookies.remove(key);
}

export const Cookie = { get, set, remove };
