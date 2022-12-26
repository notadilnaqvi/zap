import Link from 'next/link';

import { ZapIcon } from '~/components/icons';

export function Footer() {
	return (
		<div className='flex flex-col items-center w-full px-4 bg-slate-50 border-t'>
			<footer className='flex flex-row items-center justify-between w-full max-w-[1200px] py-8'>
				<Link
					href='/'
					className='p-1 rounded-sm'
					title='ZAP homepage'
				>
					<ZapIcon />
				</Link>
			</footer>
		</div>
	);
}
