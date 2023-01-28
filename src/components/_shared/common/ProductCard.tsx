'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { LoadingSpinner } from '~/components/common';
import { HeartIcon, PlusIcon } from '~/components/icons';
import { useUi } from '~/hooks/ui';
import { useToggle } from '~/hooks/util';
import { useAddToCart } from '~/lib/commercetools/hooks';
import { NormalisedProduct } from '~/lib/commercetools/types';
import { Utils } from '~/utils';

type Props = {
	product: NormalisedProduct;
};

type HandleAddToCartProps = {
	sku: string;
};

export function ProductCard(props: Props) {
	const { product } = props;

	const [addToCart] = useAddToCart();
	const [loading, setLoading] = useState(false);
	const showToast = useUi(state => state.showToast);
	const openMiniCart = useUi(state => state.openMiniCart);
	const [addToCartLoading, setAddToCartLoading] = useState(false);
	const [isAddedToWishlist, toggleIsAddedToWishlist] = useToggle(false);

	function handleToggleIsAddedToWishlist() {
		setLoading(true);
		toggleIsAddedToWishlist();
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}

	async function handleAddToCart(props: HandleAddToCartProps) {
		if (addToCartLoading) return;
		setAddToCartLoading(true);
		const { sku } = props;
		try {
			await addToCart({ sku });
			openMiniCart();
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			if (error?.graphQLErrors?.at(0)?.code === 'ConcurrentModification') {
				showToast({ message: 'Whoa! Slow down my man', type: 'error' });
			} else {
				showToast({ message: 'Product not added to cart', type: 'error' });
			}
		}
		setAddToCartLoading(false);
	}

	const isOnSale = Number(product.name?.length) < 16;

	return (
		<div
			className='flex flex-col w-full group focusable'
			tabIndex={0}
		>
			<div className='aspect-[4/5] w-full relative'>
				<Image
					className='rounded-sm invert-[0.05] object-cover'
					fill
					placeholder='blur'
					blurDataURL={product.mainImage.blurDataUrl}
					src={product.mainImage.src}
					alt={product.mainImage.label}
				/>
				<div className='bottom-0 absolute w-full p-1.5'>
					<button
						className={cn(
							{ 'opacity-0': !addToCartLoading }, // Only hide the button if it's not loading
							'z-[1] mx-auto flex items-center justify-center space-x-1 bg-white shadow-sm w-full tracking-widest group-focus-visible:opacity-100 focus-visible:opacity-100 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-100',
						)}
						onClick={() => handleAddToCart({ sku: product.sku })}
						aria-disabled={addToCartLoading}
					>
						{addToCartLoading ? (
							<div className='flex flex-row items-center space-x-2.5'>
								<div>
									<LoadingSpinner size='small' />
								</div>
								<p className='py-2.5 uppercase text-[10px] font-medium'>
									Adding...
								</p>
							</div>
						) : (
							<>
								<div>
									<PlusIcon size={10} />
								</div>
								<p className='py-2.5 uppercase text-[10px] font-medium'>
									Quick add
								</p>
							</>
						)}
					</button>
				</div>
			</div>
			<div className='flex flex-col py-1.5'>
				<div className='flex flex-row items-center'>
					<Link
						href={'/product/' + product?.slug}
						className='text-xs font-medium hover:underline leading-[18px] truncate mr-4 '
					>
						{product?.name}
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
						{product.designer?.label}
					</p>
					<div className='flex space-x-2'>
						{isOnSale && (
							<p className='text-xs font-light leading-5 line-through text-slate-500'>
								{Utils.formatPrice({
									centAmount: product?.price,
								})}
							</p>
						)}
						<p className='text-xs font-light leading-5 text-slate-900'>
							{Utils.formatPrice({
								centAmount: product?.price,
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
