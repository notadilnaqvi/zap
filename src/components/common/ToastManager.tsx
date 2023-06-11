'use client';

import { Transition } from '@headlessui/react';
import { resolveValue as resolveToastValue, Toaster } from 'react-hot-toast';

import { CheckCircleIcon, XCircleIcon } from '~/components/icons';
import { cx } from '~/utils';

export function ToastManager() {
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
					className={cx(
						{
							'bg-error': t.type === 'error',
							'bg-primary': t.type === 'success',
						},
						'flex w-fit transform items-center space-x-2 rounded py-3 pl-3 pr-4',
					)}
					enter='transition-all duration-300'
					enterFrom='motion-safe:translate-y-4 opacity-0'
					enterTo='motion-safe:translate-y-0 opacity-100'
					leave='transition-all duration-300'
					leaveFrom='opacity-100 motion-safe:translate-y-0'
					leaveTo='opacity-0 motion-safe:-translate-y-1'
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
