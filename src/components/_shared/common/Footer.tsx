import Link from 'next/link';

import { ZapIcon } from '~/components/icons';

export function Footer() {
	return (
		<div className='flex w-full flex-col items-center border-t bg-gray-50 px-4'>
			<footer className='flex w-full max-w-[1200px] flex-row items-center justify-between py-8'>
				<Link
					href='/'
					className='rounded-sm p-1'
					title='ZAP homepage'
				>
					<ZapIcon />
				</Link>
			</footer>
		</div>
	);
}
