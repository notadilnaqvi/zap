'use client';

import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import {
	MinusIcon,
	PlusIcon,
	ShoppingBagIcon,
	Trash2Icon,
	XIcon,
} from '~/components/icons';
import { ButtonLink } from '~/components/ui';
import { useUi } from '~/hooks';
import { useCart } from '~/lib/commercetools/hooks';
import { formatPrice } from '~/utils';

export function MiniCart() {
	const closeMiniCart = useUi(state => state.closeMiniCart);
	const isMiniCartOpen = useUi(state => state.isMiniCartOpen);
	const { data: cart, loading: cartLoading } = useCart();

	const isCartEmpty = !cart?.me?.cart?.totalLineItemQuantity;

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
					enterFrom='translate-x-[350px] sm:translate-x-[350px]'
					enterTo='translate-x-0'
					leave='ease duration-300'
					leaveFrom='translate-x-0'
					leaveTo='translate-x-[350px] sm:translate-x-[350px]'
				>
					<aside className='fixed inset-y-0 right-0 flex h-full w-[350px] flex-col bg-white sm:w-[300px]'>
						<div className='flex h-min w-full flex-row items-center justify-between border-b p-4'>
							<div>
								<h4 className='text-lg font-medium text-gray-900'>
									Your bag{' '}
									{!isCartEmpty &&
										'(' + cart?.me?.cart?.totalLineItemQuantity + ')'}
								</h4>
							</div>
							<button
								title='Close bag'
								className='rounded p-1 '
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
									{cart.me.cart?.lineItems.map(lineItem => {
										return (
											<li
												key={lineItem.id}
												className='group flex flex-row overflow-hidden p-4'
											>
												<Image
													src={lineItem.variant?.images[0]?.url || ''}
													alt={lineItem.variant?.images[0]?.label || ''}
													width={90}
													height={120}
													className='rounded object-cover invert-[0.05]'
												/>
												<div className='flex w-full flex-col items-start justify-between pl-4 sm:pl-2'>
													<div className='flex w-full flex-row items-start justify-between'>
														<div className='flex flex-col'>
															<Link
																href={'/product/' + lineItem?.productSlug}
																className='text-xs font-medium hover:underline focus-visible:underline'
															>
																{lineItem?.name}
															</Link>
															<p className='text-[11px] font-light leading-5 text-gray-700'>
																DKNY
															</p>
														</div>
														<button
															className='ml-2 opacity-0 transition-opacity focus-visible:opacity-100 group-hover:opacity-100 sm:opacity-100'
															title='Remove item'
														>
															<Trash2Icon className='h-4 w-4 text-error' />
														</button>
													</div>
													<div className='flex w-full flex-row items-center justify-between'>
														<div className='flex flex-row rounded border'>
															<button
																className='rounded-l-sm rounded-r-none p-2 sm:p-1.5'
																title='Decrease quantity'
															>
																<div>
																	<MinusIcon className='h-4 w-4' />
																</div>
															</button>
															<p className='flex w-12 items-center justify-center border-x align-middle text-sm sm:w-8'>
																{lineItem.quantity}
															</p>
															<button
																className='rounded-l-none rounded-r-sm p-2 sm:p-1.5'
																title='Increase quantity'
															>
																<div>
																	<PlusIcon className='h-4 w-4' />
																</div>
															</button>
														</div>
														<p className='text-sm'>
															{formatPrice({
																centAmount: lineItem.totalPrice?.centAmount,
															})}
														</p>
													</div>
												</div>
											</li>
										);
									})}
								</ul>
							)}
						</div>
						{!isCartEmpty && (
							<div className='flex w-full flex-col space-y-4 border-t bg-gray-50 p-4'>
								<div className='flex flex-row justify-between'>
									<p className='text-sm font-medium'>Subtotal</p>
									<p className='text-sm font-medium'>
										{formatPrice({
											centAmount: cart.me.cart?.totalPrice.centAmount,
										})}
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
