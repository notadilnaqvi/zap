import 'server-only';

import type { AuthToken } from '~/lib/commercetools/types';
import { toBase64 } from '~/utils';

let authToken: Maybe<AuthToken> = null;

// To be used on server-side only
// Use the Apollo client for fetching data on the browser
export async function commercetoolsFetch<TData>(
	url: URL | RequestInfo,
	options?: RequestInit,
): Promise<TData> {
	const now = new Date();
	const isExpired = authToken && authToken.expires_at < now.getTime();

	if (!authToken || isExpired) {
		authToken = await generateServerSideClientAuthToken();
	}

	const headers = new Headers(options?.headers);

	headers.set(
		'Authorization',
		authToken.token_type + ' ' + authToken.access_token,
	);

	const response = await fetch(url, { ...options, headers });

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
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const data = (await response.json()) as Omit<AuthToken, 'expires_at'>;

	const now = new Date();
	// What ever the expires_in is, we want to refresh the token 1 hour (3600s)
	// before it expires because we're paranoid
	const expiresAt = now.getTime() + (data.expires_in - 3600) * 1000;

	const authToken: AuthToken = {
		...data,
		expires_at: expiresAt,
	};

	return authToken;
}
