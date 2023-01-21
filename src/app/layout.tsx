'use client';

import { ApolloProvider } from '@apollo/client';
import { Inter } from '@next/font/google';
import cn from 'classnames';
import { PropsWithChildren } from 'react';

import {
	AnnouncementBanner,
	CustomToaster,
	Footer,
	FullscreenLoadingOverlay,
	Header,
	MiniCart,
} from '~/components/common';
import { apolloClient } from '~/lib/commercetools/graphql/client';
import '~/styles/globals.css';

const interFont = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export default function RootLayout(props: PropsWithChildren<{}>) {
	const { children } = props;
	return (
		<html
			lang='en'
			className={cn(
				'bg-white font-sans text-slate-900 antialiased no-scrollbar',
			)}
		>
			<head />
			<body className={cn('min-h-screen', interFont.variable)}>
				<ApolloProvider client={apolloClient}>
					{/* Skip-to-content link */}
					<div className=''>
						<div className='max-w-[1200px] relative mx-auto'>
							<a
								href='#content'
								className='absolute px-2 py-1 z-50 mt-4 text-sm text-blue-500 underline bg-white rounded-sm opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto'
							>
								Skip to content
							</a>
						</div>
					</div>
					<CustomToaster />
					<FullscreenLoadingOverlay />
					<MiniCart />
					<div className='flex flex-col items-center min-h-screen'>
						<AnnouncementBanner />
						<Header />
						<div className='flex flex-col items-center flex-1 w-full px-4'>
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
