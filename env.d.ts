declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_CTP_PROJECT_KEY: string;
			NEXT_PUBLIC_CTP_CLIENT_SECRET: string;
			NEXT_PUBLIC_CTP_CLIENT_ID: string;
			NEXT_PUBLIC_CTP_AUTH_URL: string;
			NEXT_PUBLIC_CTP_API_URL: string;
			NEXT_PUBLIC_CTP_SCOPES: string;
			NEXT_PUBLIC_VERCEL_URL?: string;
		}
	}
}

export {};
