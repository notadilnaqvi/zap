import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import { useEffect } from 'react';

import { CustomToaster, Layout } from '~/components/common';
import { useSyncWithPersistedUiState } from '~/hooks/ui';
import { Apollo } from '~/lib/apollo';
import '~/styles/globals.css';

import type { AppProps } from 'next/app';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	const syncWithPersistedUiState = useSyncWithPersistedUiState();

	useEffect(() => {
		// Spread the love.
		console.log('Made with \u2764\ufe0f by @notadilnaqvi');
		console.log('Source code available at https://github.com/notadilnaqvi/zap');

		// Read persisted UI state from browser storage and update the current UI
		// state accordingly.
		syncWithPersistedUiState();
	}, []);

	return (
		<div className={cn(inter.variable, 'font-sans')}>
			<ApolloProvider client={Apollo.client}>
				<CustomToaster />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</div>
	);
}
