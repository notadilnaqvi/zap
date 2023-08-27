import Link from 'next/link';

import { type PropsWithChildren } from 'react';
import { ZapIcon } from '~/components/icons';

export const metadata = {
	title: 'Verify your email',
	description:
		'Verify your email address to complete your registration and start using your account',
	robots: {
		index: false,
		follow: false,
	},
};

export default function Layout(props: PropsWithChildren<{}>) {
	const { children } = props;

	return (
		<div>
			<header className='flex h-16 items-center justify-center border-b border-gray-200'>
				<div className='flex'>
					<Link
						href='/'
						className='rounded p-1'
						title='ZAP'
					>
						<ZapIcon
							fill='currentColor'
							className='text-gray-900'
						/>
					</Link>
				</div>
			</header>
			<main className='flex flex-col items-center px-4 py-16'>{children}</main>
		</div>
	);
}
