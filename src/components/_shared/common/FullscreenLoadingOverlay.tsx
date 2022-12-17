import { Dialog, Transition } from '@headlessui/react';
import React from 'react';

import { LoadingSpinner } from '~/components/common';
import { useUi } from '~/hooks/ui';

export function FullscreenLoadingOverlay() {
	const isFullscreenLoadingOverlayOpen = useUi(
		state => state.isFullscreenLoadingOverlayOpen,
	);

	return (
		<Transition
			appear
			show={isFullscreenLoadingOverlayOpen}
			as={React.Fragment}
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
					as={React.Fragment}
					enter='ease duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-md'>
						<LoadingSpinner />
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}
