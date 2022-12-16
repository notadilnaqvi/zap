import { PropsWithChildren } from 'react';

import {
	AnnouncementBanner,
	Footer,
	FullscreenLoadingOverlay,
	Header,
	MiniCart,
} from '~/components/common';

export function Layout({ children }: PropsWithChildren<{}>) {
	return (
		<>
			<FullscreenLoadingOverlay /> {/* Keep the overlay at the very top */}
			<MiniCart />
			<div className='flex flex-col items-center min-h-screen'>
				<AnnouncementBanner />
				<Header />
				<div className='flex flex-col items-center flex-1 w-full px-4'>
					<main
						className='flex-1 w-full max-w-[1200px] flex'
						id='content'
					>
						{children}
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
}
