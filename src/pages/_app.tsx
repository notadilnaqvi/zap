import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { CustomToaster, Layout } from '~/components/common';
import { useSyncWithPersistedUiState, useUi } from '~/hooks/ui';
import { Apollo } from '~/lib/apollo';
import '~/styles/globals.css';

import type { AppProps } from 'next/app';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const syncWithPersistedUiState = useSyncWithPersistedUiState();
	const closeAllModalsAndSidebars = useUi(
		state => state.closeAllModalsAndSidebars,
	);

	const handleRouteChangeStart = useCallback(() => {
		// Close all modals, sidebars, etc. when the route changes
		closeAllModalsAndSidebars();
	}, []);

	useEffect(() => {
		// Spread the love.
		console.log('Made with \u2764\ufe0f by @notadilnaqvi');
		console.log('Source code available at https://github.com/notadilnaqvi/zap');

		// Read persisted UI state from browser storage and update the current UI
		// state accordingly.
		syncWithPersistedUiState();

		router.events.on('routeChangeStart', handleRouteChangeStart);

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
		};
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
