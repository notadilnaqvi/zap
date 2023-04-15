import { z } from 'zod';

const wasNewsletterSignUpModalClosedSchema = z.boolean();

type WasNewsletterSignUpModalClosed = z.infer<
	typeof wasNewsletterSignUpModalClosedSchema
>;

type SessionStorage = {
	'ui/was-newsletter-sign-up-modal-closed': WasNewsletterSignUpModalClosed;
};

function get(
	key: 'ui/was-newsletter-sign-up-modal-closed',
): Maybe<SessionStorage['ui/was-newsletter-sign-up-modal-closed']>;
function get(key: keyof SessionStorage) {
	try {
		if (typeof window === 'undefined') return null;

		const item = window.sessionStorage.getItem(key);

		if (!item) return null;

		if (key === 'ui/was-newsletter-sign-up-modal-closed') {
			const value = wasNewsletterSignUpModalClosedSchema.parse(
				JSON.parse(item),
			);
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
