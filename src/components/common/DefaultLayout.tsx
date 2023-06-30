'use client';

import { ApolloProvider } from '@apollo/client';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

import {
	AnnouncementBanner,
	Footer,
	FullscreenLoadingOverlay,
	Header,
	MiniCart,
	NewsLetterSignUpModal,
	SkipToContentLink,
	TailwindBreakpointIndicator,
	ToastManager,
} from '~/components/common';
import { useSyncWithPersistedUiState, useUi } from '~/hooks';
import { apolloClient } from '~/lib/commercetools/graphql/client';

export function DefaultLayout(props: PropsWithChildren<{}>) {
	const { children } = props;

	const pathname = usePathname();
	const closeAllModalsAndSidebars = useUi(
		state => state.closeAllModalsAndSidebars,
	);
	const syncWithPersistedUiState = useSyncWithPersistedUiState();

	useEffect(() => {
		// Spread the love
		console.log('Made with 💖 by @notadilnaqvi');
		console.log('Source code available at https://github.com/notadilnaqvi/zap');

		syncWithPersistedUiState();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Close all modals and sidebars whenever the route changes
	useEffect(() => {
		closeAllModalsAndSidebars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<>
			<TailwindBreakpointIndicator />
			<SkipToContentLink />
			<ToastManager />
			<FullscreenLoadingOverlay />
			<ApolloProvider client={apolloClient}>
				<MiniCart />
				<NewsLetterSignUpModal />
				<div className='flex min-h-screen flex-col items-center'>
					<AnnouncementBanner />
					<Header />
					<div className='flex w-full flex-1 flex-col items-center'>
						<main
							className='w-full'
							id='content'
						>
							{children}
						</main>
					</div>
					<Footer />
				</div>
			</ApolloProvider>
		</>
	);
}
