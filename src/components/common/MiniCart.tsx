'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { LineItem } from '~/components/common';
import { ShoppingBagIcon, XIcon } from '~/components/icons';
import { ButtonLink } from '~/components/ui';
import { useUi } from '~/hooks';
import { useCart } from '~/lib/commercetools/hooks';
import { formatPrice } from '~/utils';

export function MiniCart() {
	const { data: cart, loading: cartLoading } = useCart();
	const closeMiniCart = useUi(state => state.closeMiniCart);
	const isMiniCartOpen = useUi(state => state.isMiniCartOpen);

	const isCartEmpty = !cart?.totalLineItemQuantity;
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
					{/* Overlay */}
					<div
						className='fixed inset-0 bg-black/30 sm:bg-black/50'
						onClick={closeMiniCart}
						aria-hidden='true'
					/>
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter='ease duration-300'
					enterFrom='motion-safe:translate-x-[350px] motion-safe:sm:translate-x-[300px] motion-reduce:opacity-0'
					enterTo='motion-safe:translate-x-0 motion-reduce:opacity-1'
					leave='ease duration-300'
					leaveFrom='motion-safe:translate-x-0 motion-reduce:opacity-1'
					leaveTo='motion-safe:translate-x-[350px] motion-safe:sm:translate-x-[300px] motion-reduce:opacity-0'
				>
					<aside className='fixed inset-y-0 right-0 flex h-full w-[350px] flex-col bg-white sm:w-[300px]'>
						<div className='flex h-min w-full flex-row items-center justify-between border-b border-gray-200 p-4'>
							<div>
								<h4 className='text-lg font-medium text-gray-900'>
									Your bag{' '}
									{!isCartEmpty && '(' + cart?.totalLineItemQuantity + ')'}
								</h4>
							</div>
							<button
								title='Close bag'
								className='rounded p-1'
								onClick={closeMiniCart}
							>
								<XIcon />
							</button>
						</div>
						<div className='hide-scrollbar flex h-full flex-col overflow-y-auto py-2'>
							{cartLoading ? (
								<div className='w-full divide-y'>
									{Array(8)
										.fill(null)
										.map((_, i) => i)
										?.map(index => {
											return (
												<div
													className='relative flex flex-row overflow-hidden p-4 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/40  before:to-transparent'
													key={index}
												>
													<div className='aspect-[3/4] h-[120px] w-[90px] rounded bg-gray-200' />
													<div className='flex w-full flex-col items-start justify-between pl-4 sm:pl-2'>
														<div className='flex w-full flex-row items-start justify-between'>
															<div className='flex flex-col'>
																<div className='h-3 w-36 rounded-full bg-gray-200 sm:w-24'></div>
																<div className='mt-1.5 h-3 w-12 rounded-full bg-gray-200'></div>
															</div>
														</div>
														<div className='flex w-full flex-row items-center justify-between'>
															<div className='h-[34px] w-[114px] rounded bg-gray-200 sm:h-[30px] sm:w-[90px]'></div>
															<div className='h-3 w-14 rounded-full bg-gray-200'></div>
														</div>
													</div>
												</div>
											);
										})}
								</div>
							) : isCartEmpty ? (
								<div className='flex flex-col items-center space-y-8 pt-32'>
									<div className='rounded border border-dashed border-gray-900 p-8'>
										<ShoppingBagIcon className='h-6 w-6 stroke-1 text-gray-900' />
									</div>
									<p className='text-xl font-medium text-gray-900'>
										Your bag is empty
									</p>
									<ButtonLink href='/'>Browse products</ButtonLink>
								</div>
							) : (
								<ul className='w-full divide-y'>
									{cart?.lineItems.map(lineItem => {
										return (
											<li key={lineItem.id}>
												<LineItem lineItem={lineItem} />
											</li>
										);
									})}
								</ul>
							)}
						</div>
						{!isCartEmpty && (
							<div className='flex w-full flex-col space-y-4 border-t border-gray-200 bg-gray-50 p-4'>
								<div className='flex flex-row justify-between'>
									<p className='text-sm font-medium'>Subtotal</p>
									<p className='text-sm font-medium'>
										{formatPrice(cart?.totalPrice)}
									</p>
								</div>
								<ButtonLink
									href='/checkout'
									className='w-full'
								>
									Continue to checkout
								</ButtonLink>
							</div>
						)}
					</aside>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
}
