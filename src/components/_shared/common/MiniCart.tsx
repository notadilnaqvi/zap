import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { LoadingSpinner } from '~/components/common';
import { XIcon } from '~/components/icons';
import { useUi } from '~/hooks/ui';

export function MiniCart() {
	const [loading, setLoading] = useState(true);
	const closeMiniCart = useUi(state => state.closeMiniCart);
	const isMiniCartOpen = useUi(state => state.isMiniCartOpen);

	useEffect(() => {
		if (!isMiniCartOpen) return;
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, [isMiniCartOpen]);

	return (
		<Transition
			appear
			show={isMiniCartOpen}
			as={React.Fragment}
		>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={closeMiniCart}
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
					<div
						className='fixed inset-0 bg-black bg-opacity-30'
						onClick={closeMiniCart}
					/>
				</Transition.Child>
				<Transition.Child
					as={React.Fragment}
					enter='ease duration-300'
					enterFrom='translate-x-[350px] sm:translate-x-[350px]'
					enterTo='translate-x-0'
					leave='ease duration-300'
					leaveFrom='translate-x-0'
					leaveTo='translate-x-[350px] sm:translate-x-[350px]'
				>
					<aside className='fixed bottom-0 top-0 right-0 bg-white w-[350px] sm:w-[300px] overflow-y-auto no-scrollbar flex flex-col min-h-full'>
						<div className='w-full h-full p-4 pb-32'>
							<div className='flex flex-row w-full h-min sm:flex-row-reverse'>
								<button
									aria-label='Close mini-cart'
									title='Close mini-cart'
									className='p-1 rounded-sm '
									onClick={closeMiniCart}
								>
									<XIcon />
								</button>
							</div>
							<div className='flex flex-col items-center justify-center h-full'>
								{loading ? (
									<LoadingSpinner />
								) : (
									<Transition
										enter='transition-opacity duration-300'
										enterFrom='opacity-0'
										enterTo='opacity-100'
										leave='transition-opacity duration-300'
										leaveFrom='opacity-100'
										leaveTo='opacity-0'
										appear
										as='div'
										className='flex flex-col items-center font-light space-y-4'
									>
										<p className='text-2xl font-semibold text-slate-900'>
											Your cart is empty
										</p>
										<p className='text-sm text-slate-700'>
											Add items to proceed to checkout
										</p>
										<Link
											href='/browse'
											className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-sm transition duration-100 hover:bg-blue-400'
										>
											Continue shopping
										</Link>
									</Transition>
								)}
							</div>
						</div>
						{/* {false && (
							<div className='flex w-full p-4 border-t bg-slate-50'>
								<Link href='/checkout'>
									<a className='w-full px-4 py-3 text-sm font-medium tracking-widest text-center text-white bg-blue-500 rounded-sm'>
										View cart and checkout
									</a>
								</Link>
							</div>
						)} */}
					</aside>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}
