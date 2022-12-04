type LocalStorageKey =
	| 'ct/token-info'
	| 'ui/is-mini-cart-open'
	| 'ui/should-show-announcement-banner';

function get(key: LocalStorageKey): any {
	if (typeof window === 'undefined') return;
	const val = window.localStorage.getItem(key);
	if (!val) return null;
	try {
		return JSON.parse(val);
	} catch (_err) {
		return val;
	}
}

function set(key: LocalStorageKey, val: any): void {
	if (typeof window === 'undefined') return;
	window.localStorage.setItem(key, JSON.stringify(val));
}

function remove(key: LocalStorageKey): void {
	if (typeof window === 'undefined') return;
	window.localStorage.removeItem(key);
}

export const LocalStorage = { get, set, remove };
