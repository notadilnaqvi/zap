'use client';

import { Transition } from '@headlessui/react';
import cn from 'classnames';
import { resolveValue as resolveToastValue, Toaster } from 'react-hot-toast';

import { CheckCircleIcon, XCircleIcon } from '~/components/icons';

export function CustomToaster() {
	return (
		<Toaster
			position='bottom-center'
			toastOptions={{ duration: 5 * 1000 }}
		>
			{t => (
				<Transition
					appear
					show={t.visible}
					as='div'
					className={cn(
						{
							'bg-red-500': t.type === 'error',
							'bg-blue-500': t.type === 'success',
						},
						'transform rounded-sm py-3 pr-4 pl-3 max-w-[256px] flex items-center space-x-2',
					)}
					enter='transition-all duration-300'
					enterFrom='translate-y-4 opacity-0'
					enterTo='translate-y-0 opacity-100'
					leave='transition-all duration-300'
					leaveFrom='opacity-100 translate-y-0'
					leaveTo='opacity-0 -translate-y-1'
					{...t.ariaProps}
				>
					<div className='text-white'>
						{t.type === 'error' ? <XCircleIcon /> : <CheckCircleIcon />}
					</div>
					<p className='text-sm text-white'>
						{resolveToastValue(t.message, t)}
					</p>
				</Transition>
			)}
		</Toaster>
	);
}
