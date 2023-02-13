'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { LoadingSpinner } from '~/components/common';
import { useUi } from '~/hooks/ui';

export function FullscreenLoadingOverlay() {
	const isFullscreenLoadingOverlayOpen = useUi(
		state => state.isFullscreenLoadingOverlayOpen,
	);

	const fullscreenLoadingOverlayText = useUi(
		state => state.fullscreenLoadingOverlayText,
	);

	return (
		<Transition
			appear
			show={isFullscreenLoadingOverlayOpen}
			as={Fragment}
		>
			<Dialog
				as='div'
				className='relative z-10'
				// By default, Dialog component will call `onClose` when escape is
				// pressed or on outside click. Since we don't want the user to be
				// able to close this overlay, we pass in an empty function.
				onClose={() => {}}
			>
				<Transition.Child
					as={Fragment}
					enter='ease duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 flex flex-col items-center justify-center space-y-3 bg-white/90'>
						<LoadingSpinner />
						<p className='pl-[2ch] font-medium text-slate-700'>
							{fullscreenLoadingOverlayText}
						</p>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}
