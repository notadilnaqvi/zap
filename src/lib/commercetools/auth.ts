import SdkAuth, { TokenProvider } from '@commercetools/sdk-auth';

interface CustomerCredentials {
	username: Maybe<Scalars['String']>;
	password: Scalars['String'];
}

export interface CtTokenInfo {
	access_token: Scalars['String'];
	expires_in: Scalars['Int'];
	expires_at: Scalars['Int'];
	scope: Scalars['String'];
	refresh_token?: Scalars['String'];
	token_type: 'Bearer';
}

const sdkAuth = new SdkAuth({
	host: process.env.NEXT_PUBLIC_CTP_AUTH_URL,
	projectKey: process.env.NEXT_PUBLIC_CTP_PROJECT_KEY,
	credentials: {
		clientId: process.env.NEXT_PUBLIC_CTP_CLIENT_ID,
		clientSecret: process.env.NEXT_PUBLIC_CTP_CLIENT_SECRET,
	},
	scopes: process.env.NEXT_PUBLIC_CTP_SCOPES?.split(' '),
});

export async function generateAnonymousTokenInfo(): Promise<CtTokenInfo> {
	const tokenFlow = await sdkAuth.anonymousFlow();
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}

export async function generateCustomerTokenInfo({
	username,
	password,
}: CustomerCredentials): Promise<CtTokenInfo> {
	const tokenFlow = await sdkAuth.customerPasswordFlow({ username, password });
	const tokenProvider = new TokenProvider({ sdkAuth }, tokenFlow);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}

export async function refreshTokenInfo(
	expiredTokenInfo: CtTokenInfo,
): Promise<CtTokenInfo> {
	const tokenProvider = new TokenProvider({ sdkAuth }, expiredTokenInfo);
	const tokenInfo = await tokenProvider.getTokenInfo();
	return tokenInfo;
}
