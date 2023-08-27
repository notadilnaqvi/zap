'use client';

import { MailIcon, XCircleIcon } from '~/components/icons';
import { ButtonLink } from '~/components/ui';

export default function Error() {
	return (
		<section className='flex flex-col items-center space-y-8'>
			<div className='relative'>
				<div>
					<MailIcon className='h-24 w-24 stroke-[0.5px]' />
				</div>
				<div className='absolute bottom-2 right-0 rounded-full bg-white p-px'>
					<XCircleIcon className='h-6 w-6 stroke-[1.75px] text-error' />
				</div>
			</div>
			<h1 className='text-xl font-semibold'>Email verification failed</h1>
			<p className='text-gray-600'>We could not verify your email</p>
			<ButtonLink href='/contact'>Contact support</ButtonLink>
		</section>
	);
}
