import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

import { AuthToken, CustomerSignMeInDraft } from '~/lib/commercetools/types';

const sdkAuth = new SdkAuth({
	host: process.env.NEXT_PUBLIC_CTP_AUTH_URL,
	projectKey: process.env.NEXT_PUBLIC_CTP_PROJECT_KEY,
	credentials: {
		clientId: process.env.NEXT_PUBLIC_CTP_CLIENT_ID,
		clientSecret: process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET,
	},
	scopes: process.env.NEXT_PUBLIC_CTP_SCOPES.split(' '),
});

export async function generateAnonymousAuthToken(): Promise<AuthToken> {
	const tokenFlow = await sdkAuth.anonymousFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const authToken = await tokenProvider.getTokenInfo();
	return authToken;
}

export async function generateCustomerAuthToken(
	props: Pick<CustomerSignMeInDraft, 'email' | 'password'>,
): Promise<AuthToken> {
	const { email, password } = props;
	const tokenFlow = await sdkAuth.customerPasswordFlow({
		username: email,
		password,
	});
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const authToken = await tokenProvider.getTokenInfo();
	// `is_logged_in` is a custom field not returned by `getTokenInfo()`. We
	// add it manually to track the login status of the user
	authToken.is_logged_in = true;
	return authToken;
}

export async function refreshAuthToken(
	expiredAuthToken: AuthToken,
): Promise<AuthToken> {
	const tokenProvider = new TokenProvider({ sdkAuth }, expiredAuthToken);
	const authToken = await tokenProvider.getTokenInfo();
	// `is_logged_in` is a custom field not returned by `getTokenInfo()`. We
	// add it back manually and make sure that the login status of the user
	// is prevserved
	authToken.is_logged_in = expiredAuthToken.is_logged_in;
	return authToken;
}

export async function generateClientAuthToken(): Promise<AuthToken> {
	const tokenFlow = await sdkAuth.clientCredentialsFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const authToken = await tokenProvider.getTokenInfo();
	return authToken;
}
