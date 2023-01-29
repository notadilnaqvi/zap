'use client';

import { XIcon } from '~/components/icons';
import { useUi } from '~/hooks/ui';

export function AnnouncementBanner() {
	const isAnnouncementBannerOpen = useUi(
		state => state.isAnnouncementBannerOpen,
	);
	const closeAnnouncementBanner = useUi(state => state.closeAnnouncementBanner);

	if (!isAnnouncementBannerOpen) return null;

	return (
		<div className='flex items-center justify-center w-full px-4 py-2 bg-blue-100 min-h-8'>
			<div className='relative flex items-center justify-center w-full max-w-[1200px]'>
				<div className='flex flex-row items-end space-x-2'>
					<p className='font-mono text-xs sm:text-[10px] font-bold leading-4 text-center text-blue-500 uppercase'>
						Use code <span className='underline'>#LAUNCH20</span> to get 20% off
						your first order
					</p>
				</div>
				<div className='absolute right-0 flex items-center'>
					<button
						className='rounded-sm'
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
