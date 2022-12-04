import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { HeartIcon, PlusIcon } from '~/components/icons';
import { useUi } from '~/hooks/ui';
import { useToggle } from '~/hooks/util';
import { Utils } from '~/utils';

import type { Product } from '~/types/commercetools';
import { LoadingSpinner } from './LoadingSpinner';

interface Props {
	product: Product;
}

export function ProductCard(props: Props) {
	const { product } = props;

	const [loading, setLoading] = useState(false);
	const [isAddedToWishlist, toggleIsAddedToWishlist] = useToggle(false);
	const { showToast } = useUi();

	function handleToggleIsAddedToWishlist() {
		setLoading(true);
		toggleIsAddedToWishlist();
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}

	// const isOnSale = Number(product.masterData.current?.name?.length) < 16;

	return (
		<div
			className='flex flex-col w-full group focusable'
			tabIndex={0}
		>
			<div className='aspect-[4/5] w-full relative'>
				<Image
					className='rounded-sm invert-[0.05]'
					fill
					src={
						product?.masterData?.current?.masterVariant?.images?.[0]?.url ??
						'/placeholder.png'
					}
					alt={product?.masterData?.current?.name ?? ''}
				/>
				<div className='bottom-0 absolute w-full p-1.5 '>
					<button
						className='z-[1] mx-auto flex items-center justify-center space-x-1 bg-white shadow-sm w-full tracking-widest group-focus-visible:opacity-100 focus-visible:opacity-100 group-hover:opacity-100 hover:opacity-100 opacity-0 transition-opacity duration-100'
						onClick={() => {
							const isError = Math.random() > 0.5;
							showToast({
								message: isError
									? 'Failed to add product to cart'
									: 'Added product to cart',
								type: isError ? 'error' : 'success',
							});
						}}
					>
						<div>
							<PlusIcon size={10} />
						</div>
						<p className='py-2.5 uppercase text-[10px] font-medium'>
							Quick add
						</p>
					</button>
				</div>
			</div>
			<div className='flex flex-col py-1.5'>
				<div className='flex flex-row items-center'>
					<Link
						href={'/product/' + product?.masterData?.current?.slug}
						className='text-xs font-medium hover:underline leading-[18px] truncate mr-4'
					>
						{product?.masterData?.current?.name}
					</Link>
					<button
						aria-label={
							isAddedToWishlist ? 'Remove from wishlist' : 'Add to wishlist'
						}
						className={cn(
							'hover:text-red-500 pt-0.5 ml-auto',
							isAddedToWishlist ? 'text-red-500' : 'text-slate-700',
						)}
						onClick={handleToggleIsAddedToWishlist}
						disabled={loading}
					>
						{loading ? (
							<div>
								<LoadingSpinner size='small' />
							</div>
						) : (
							<div className='p-[1px]'>
								<HeartIcon
									size={14}
									filled={isAddedToWishlist}
								/>
							</div>
						)}
					</button>
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-[11px] font-light leading-5 text-slate-700'>
						{
							product.masterData.current?.masterVariant.attributesRaw.find(
								attr => attr.name === 'designer',
							)?.value?.label
						}
					</p>
					<div className='flex space-x-2'>
						{/* {isOnSale && (
							<p className='text-xs font-light line-through leading-5 text-slate-500'>
								{Utils.formatCurrency({
									locale: 'en',
									centAmount:
										product?.masterData?.current?.masterVariant?.prices?.[0]
											.value.centAmount,
								})}
							</p>
						)} */}
						<p className='text-xs font-light leading-5 text-slate-900'>
							{Utils.formatCurrency({
								locale: 'en',
								centAmount:
									product?.masterData?.current?.masterVariant?.prices?.[0].value
										.centAmount,
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
