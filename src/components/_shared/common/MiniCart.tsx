'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

import { LoadingSpinner } from '~/components/common';
import { XIcon } from '~/components/icons';
import { useUi } from '~/hooks/ui';
import { useGetMyCart } from '~/lib/commercetools/hooks';
import { Utils } from '~/utils';

export function MiniCart() {
	const closeMiniCart = useUi(state => state.closeMiniCart);
	const isMiniCartOpen = useUi(state => state.isMiniCartOpen);
	const { data: myCart, loading: myCartLoading } = useGetMyCart();

	const isMyCartEmpty = !myCart?.me?.activeCart?.totalLineItemQuantity;

	return (
		<Transition
			appear
			show={isMiniCartOpen}
			as={Fragment}
		>
			<Dialog
				as='div'
				className='relative z-10'
				onClose={closeMiniCart}
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
					<div
						className='fixed inset-0 bg-black/30'
						onClick={closeMiniCart}
					/>
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter='ease duration-300'
					enterFrom='translate-x-[350px] sm:translate-x-[350px]'
					enterTo='translate-x-0'
					leave='ease duration-300'
					leaveFrom='translate-x-0'
					leaveTo='translate-x-[350px] sm:translate-x-[350px]'
				>
					<aside className='fixed inset-y-0 right-0 flex h-full w-[350px] flex-col bg-white sm:w-[300px]'>
						<div className='flex h-min w-full flex-row items-center justify-between p-4'>
							<div>
								{!isMyCartEmpty && (
									<p className='text-lg font-medium text-slate-900'>
										Your cart: ({myCart?.me.activeCart?.totalLineItemQuantity})
									</p>
								)}
							</div>
							<button
								aria-label='Close mini-cart'
								title='Close mini-cart'
								className='rounded-sm p-1 '
								onClick={closeMiniCart}
							>
								<XIcon />
							</button>
						</div>
						<div className='no-scrollbar flex h-full flex-col overflow-y-auto px-4 pb-4'>
							{myCartLoading ? (
								<Transition
									enter='transition-opacity duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='transition-opacity duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
									appear
									as='div'
									className='flex flex-col items-center space-y-4 pt-64 font-light'
								>
									<LoadingSpinner />
								</Transition>
							) : isMyCartEmpty ? (
								<Transition
									enter='transition-opacity duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='transition-opacity duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
									appear
									as='div'
									className='flex flex-col items-center space-y-4 pt-64 font-light'
								>
									<p className='text-2xl font-semibold text-slate-900'>
										Your cart is empty
									</p>
									<p className='text-sm text-slate-700'>
										Add items to proceed to checkout
									</p>
									<Link
										href='/browse'
										className='rounded-sm bg-blue-500 px-4 py-2 text-sm font-medium tracking-widest text-white transition duration-100 hover:bg-blue-400'
									>
										Continue shopping
									</Link>
								</Transition>
							) : (
								<Transition
									as='div'
									enter='transition-opacity duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='transition-opacity duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
									className='flex flex-col items-center font-light'
									appear
								>
									<ul className='w-full space-y-3'>
										{myCart.me.activeCart?.lineItems.map(lineItem => {
											return (
												<li
													className='flex flex-row justify-between rounded-sm border p-2'
													key={lineItem.id}
												>
													<p className='text-sm font-medium'>{lineItem.name}</p>
													<p className='text-sm tabular-nums text-slate-500'>
														x {lineItem.quantity}
													</p>
												</li>
											);
										})}
									</ul>
								</Transition>
							)}
						</div>
						{!isMyCartEmpty && (
							<div className='flex w-full flex-col space-y-4 border-t bg-gray-50 p-4'>
								<div className='flex flex-row justify-between'>
									<p className='text-sm font-medium'>Your total</p>
									<p className='text-sm font-medium'>
										{Utils.formatPrice({
											centAmount: myCart.me.activeCart?.totalPrice.centAmount,
										})}
									</p>
								</div>
								<Link
									href='/checkout'
									className='w-full rounded-sm bg-blue-500 px-4 py-3 text-center text-sm font-medium tracking-widest text-white'
								>
									Proceed to checkout
								</Link>
							</div>
						)}
					</aside>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}
