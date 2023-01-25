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
						className='fixed inset-0 bg-black bg-opacity-30'
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
					<aside className='fixed bottom-0 top-0 right-0 bg-white w-[350px] sm:w-[300px] h-screen flex flex-col'>
						<div className='flex flex-row w-full h-min justify-between items-center p-4'>
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
								className='p-1 rounded-sm '
								onClick={closeMiniCart}
							>
								<XIcon />
							</button>
						</div>
						<div className='flex flex-col overflow-y-auto no-scrollbar px-4 pb-4 h-full'>
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
									className='flex flex-col items-center font-light space-y-4 pt-64'
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
									className='flex flex-col items-center font-light space-y-4 pt-64'
								>
									<p className='text-2xl font-semibold text-slate-900'>
										Your cart is empty
									</p>
									<p className='text-sm text-slate-700'>
										Add items to proceed to checkout
									</p>
									<Link
										href='/browse'
										className='px-4 py-2 text-sm tracking-widest font-medium text-white bg-blue-500 rounded-sm transition duration-100 hover:bg-blue-400'
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
													className='border rounded-sm p-2 flex flex-row justify-between'
													key={lineItem.id}
												>
													<p className='font-medium text-sm'>{lineItem.name}</p>
													<p className='text-sm text-slate-500 tabular-nums'>
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
							<div className='flex w-full p-4 border-t bg-slate-50 flex-col space-y-4'>
								<div className='flex flex-row justify-between'>
									<p className='text-sm font-medium'>Your total</p>
									<p className='text-sm font-medium'>
										{Utils.formatCurrency({
											centAmount: myCart.me.activeCart?.totalPrice.centAmount,
											locale: 'en',
										})}
									</p>
								</div>
								<Link
									href='/checkout'
									className='w-full px-4 py-3 text-sm tracking-widest text-center font-medium text-white bg-blue-500 rounded-sm'
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
