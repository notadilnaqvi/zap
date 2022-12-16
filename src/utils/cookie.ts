import Cookies from 'js-cookie';
import { z } from 'zod';

const shouldHideAnnouncementBannerSchema = z.boolean();

type Cookie = {
	'ui/was-announcement-banner-closed': z.infer<
		typeof shouldHideAnnouncementBannerSchema
	>;
};

function get<K extends keyof Cookie>(key: K): Maybe<Cookie[K]> {
	try {
		if (typeof window === 'undefined') return null;

		const item = Cookies.get(key);

		if (!item) return null;

		if (key === 'ui/was-announcement-banner-closed') {
			const value = shouldHideAnnouncementBannerSchema.parse(JSON.parse(item));
			return value as Cookie[K];
		}

		return null;
	} catch (err) {
		console.error('[Cookie]: Failed to get ' + key, err);
		return null;
	}
}

function set<K extends keyof Cookie, V extends Cookie[K]>(key: K, val: V) {
	if (typeof window === 'undefined') return;
	Cookies.set(key, JSON.stringify(val));
}

function remove<K extends keyof Cookie>(key: K): void {
	if (typeof window === 'undefined') return;
	Cookies.remove(key);
}

export const Cookie = { get, set, remove };
