import { AnnouncementBannerDocumentData } from '.slicemachine/prismicio';
import { PropsWithChildren } from 'react';

import {
	AnnouncementBanner,
	Footer,
	FullscreenLoadingOverlay,
	Header,
	MiniCart,
} from '~/components/common';

type Props = PropsWithChildren<{
	prismicData: { [index: string]: any };
}>;

export function Layout(props: Props) {
	const { children, prismicData } = props;

	const announcementBannerDocumentData = prismicData.announcementBanner
		.data as AnnouncementBannerDocumentData;

	return (
		<>
			<FullscreenLoadingOverlay /> {/* Keep the overlay at the very top */}
			<MiniCart />
			<div className='flex flex-col items-center min-h-screen'>
				<AnnouncementBanner data={announcementBannerDocumentData} />
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
