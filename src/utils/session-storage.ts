import { z } from 'zod';

const wasAnnouncementBannerClosedSchema = z.boolean();

type SessionStorage = {
	'ui/was-announcement-banner-closed': z.infer<
		typeof wasAnnouncementBannerClosedSchema
	>;
};

function get<K extends keyof SessionStorage>(key: K): Maybe<SessionStorage[K]> {
	try {
		if (typeof window === 'undefined') return null;

		const item = window.sessionStorage.getItem(key);

		if (!item) return null;

		if (key === 'ui/was-announcement-banner-closed') {
			const value = wasAnnouncementBannerClosedSchema.parse(JSON.parse(item));
			return value as SessionStorage[K];
		}

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

function remove<K extends keyof SessionStorage>(key: K) {
	if (typeof window === 'undefined') return;
	window.sessionStorage.removeItem(key);
}

export const SessionStorage = { get, set, remove };
