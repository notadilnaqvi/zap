'use client';

import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import { PropsWithChildren, useEffect } from 'react';

import {
	AnnouncementBanner,
	CustomToaster,
	Footer,
	FullscreenLoadingOverlay,
	Header,
	MiniCart,
} from '~/components/common';
import { useSyncWithPersistedUiState } from '~/hooks/ui';
import { apolloClient } from '~/lib/commercetools/graphql/client';
import '~/styles/globals.css';
import { LOCALE } from '~/utils/constants';

const interFont = Inter({
	subsets: ['latin'],
	variable: '--inter-font',
});

export default function RootLayout(props: PropsWithChildren<{}>) {
	const { children } = props;

	const _syncWithPersistedUiState = useSyncWithPersistedUiState();

	useEffect(() => {
		// Spread the love
		console.log('Made with 💖 by @notadilnaqvi');
		console.log('Source code available at https://github.com/notadilnaqvi');

		// NOTE: Disabling temporarily
		// syncWithPersistedUiState();
	}, []);
	return (
		<html
			lang={LOCALE}
			className={cn(
				'bg-white font-sans text-slate-900 antialiased no-scrollbar',
			)}
		>
			<head />
			<body className={cn('min-h-screen', interFont.className)}>
				<ApolloProvider client={apolloClient}>
					{/* Skip-to-content link */}
					<div className='flex w-full justify-center px-4'>
						<div className='relative w-full max-w-[1200px]'>
							<a
								href='#content'
								className='absolute z-50 mt-4 -translate-y-16 bg-white px-2.5 py-1.5 text-sm text-blue-500 underline ring-2 ring-white focus:translate-y-0'
							>
								Skip to content
							</a>
						</div>
					</div>
					<CustomToaster />
					<FullscreenLoadingOverlay />
					<MiniCart />
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
			</body>
		</html>
	);
}
