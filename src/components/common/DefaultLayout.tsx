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
	ToastManager,
} from '~/components/common';
import { TailwindIndicator } from '~/components/common/TailwindIndicator';
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
			<TailwindIndicator />
			<ApolloProvider client={apolloClient}>
				{/* Skip-to-content link */}
				<div className='flex w-full justify-center px-4'>
					<div className='relative w-full max-w-[1200px]'>
						<a
							href='#content'
							className='absolute z-50 mt-4 -translate-y-16 bg-white px-2.5 py-1.5 text-sm text-primary underline ring-2 ring-white focus:translate-y-0'
						>
							Skip to content
						</a>
					</div>
				</div>
				<ToastManager />
				<FullscreenLoadingOverlay />
				<MiniCart />
				<NewsLetterSignUpModal />
				<div className='flex min-h-screen flex-col items-center'>
					<AnnouncementBanner />
					<Header />
					<div className='flex w-full flex-1 flex-col items-center px-4'>
						<main
							className='w-full max-w-[1200px]'
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
