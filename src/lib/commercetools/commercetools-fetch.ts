import 'server-only';

import type { AuthToken } from '~/lib/commercetools/types';
import { toBase64 } from '~/utils';

/**
 * Like default `fetch` but adds authorization headers for Commercetools
 *
 * To be used on the server only (Node.js)
 *
 * Use Apollo client to fetch Commercetools data on the broswer
 */

export async function commercetoolsFetch<TData>(
	url: URL | RequestInfo,
	options?: RequestInit,
): Promise<TData> {
	const authToken = await generateServerSideClientAuthToken();

	const headers = new Headers(options?.headers);

	headers.set(
		'Authorization',
		authToken.token_type + ' ' + authToken.access_token,
	);

	const response = await fetch(url, {
		cache: 'force-cache', // Cache everything by default
		...options,
		headers,
	});

	if (!response.ok) {
		const error = await response.json();
		throw new Error(JSON.stringify(error));
	}

	const data = (await response.json()) as TData;

	return data;
}

// To be used on server-side only
// Use `generateClientAuthToken` to get the client token on the browser
async function generateServerSideClientAuthToken(): Promise<AuthToken> {
	const url = new URL('/oauth/token', process.env.CTP_AUTH_URL);

	url.searchParams.append('grant_type', 'client_credentials');
	url.searchParams.append('scope', process.env.CTP_SCOPES);

	const credentials = toBase64(
		process.env.CTP_CLIENT_ID + ':' + process.env.CTP_CLIENT_SECRET,
	);

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			Authorization: 'Basic ' + credentials,
		},
		next: {
			// The token is valid for 48 hours
			// We revalidate it every 24 hours just to be safe
			// Refer to https://docs.commercetools.com/api/authorization#client-credentials-flow
			revalidate: 60 * 60 * 24,
		},
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const authToken = (await response.json()) as AuthToken;

	return authToken;
}
