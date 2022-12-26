import { AnnouncementBannerDocumentData } from '.slicemachine/prismicio';
import { PrismicRichText } from '@prismicio/react';

import { XIcon } from '~/components/icons';
import { useUi } from '~/hooks/ui';

type Props = {
	data: AnnouncementBannerDocumentData;
};

export function AnnouncementBanner(props: Props) {
	const { data } = props;
	console.log('data', data);
	const isAnnouncementBannerOpen = useUi(
		state => state.isAnnouncementBannerOpen,
	);
	const closeAnnouncementBanner = useUi(state => state.closeAnnouncementBanner);

	if (!isAnnouncementBannerOpen) return null;

	return (
		<div className='flex items-center justify-center w-full px-4 py-3 bg-slate-100 border-b border-slate-200 min-h-8'>
			<div className='relative flex items-center justify-center w-full max-w-[1200px]'>
				<div className='flex flex-row items-end space-x-2'>
					<PrismicRichText field={data.announcement} />
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
