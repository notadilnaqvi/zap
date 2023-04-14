import Link from 'next/link';

import { ZapIcon } from '~/components/icons';

export function Footer() {
	return (
		<div className='flex w-full flex-col items-center border-t border-gray-200 bg-gray-50 px-4'>
			<footer className='flex w-full max-w-[1200px] flex-row items-center justify-between py-8'>
				<Link
					href='/'
					className='rounded p-1'
					title='ZAP homepage'
				>
					<ZapIcon
						fill='currentColor'
						className='text-gray-900'
					/>
				</Link>
			</footer>
		</div>
	);
}
