'use client';

import Link from 'next/link';

import { ArrowRightIcon, XIcon } from '~/components/icons';
import { useUi } from '~/hooks';

export function AnnouncementBanner() {
	const isAnnouncementBannerOpen = useUi(
		state => state.isAnnouncementBannerOpen,
	);
	const closeAnnouncementBanner = useUi(state => state.closeAnnouncementBanner);

	if (!isAnnouncementBannerOpen) return null;

	return (
		<div className='flex w-full items-center justify-center border-b border-gray-200 bg-gray-100 px-4 py-2'>
			<div className='relative flex w-full max-w-[1200px] items-center justify-center'>
				<div className='flex flex-row items-end space-x-2'>
					<Link
						href='#'
						className='flex items-center space-x-1 px-2'
					>
						<p className='text-center text-sm font-semibold leading-7 text-gray-700'>
							Same-day delivery now available
						</p>
						<div>
							<ArrowRightIcon
								height={16}
								width={16}
								strokeWidth={2}
							/>
						</div>
					</Link>
				</div>
				<div className='absolute right-0 flex items-center'>
					<button
						className='rounded p-1'
						aria-label='Close announcement banner'
						title='Close announcement banner'
						onClick={closeAnnouncementBanner}
					>
						<XIcon />
					</button>
				</div>
			</div>
		</div>
	);
}
