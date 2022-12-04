import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import { useEffect } from 'react';

import { CustomToaster, Layout } from '~/components/common';
import { Apollo } from '~/lib/apollo';
import { UiContextProvider } from '~/stores/ui-store';
import '~/styles/globals.css';

import type { AppProps } from 'next/app';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		console.log('Made with \u2764\ufe0f by @notadilnaqvi');
		console.log('Source code available at https://github.com/notadilnaqvi/zap');
	}, []);

	return (
		<div className={cn(inter.variable, 'font-sans')}>
			<ApolloProvider client={Apollo.client}>
				<UiContextProvider>
					<CustomToaster />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</UiContextProvider>
			</ApolloProvider>
		</div>
	);
}
