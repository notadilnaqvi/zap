'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LoadingSpinner } from '~/components/common/LoadingSpinner';
import { MinusIcon, PlusIcon, Trash2Icon } from '~/components/icons';
import { useUi } from '~/hooks';
import { useUpdateLineItemQuantity } from '~/lib/commercetools/hooks';
import { NormalisedCart } from '~/lib/commercetools/types';

import { cx, formatPrice } from '~/utils';

type LineItemProps = {
	lineItem: NormalisedCart['lineItems'][number];
};

type HandleQuantityProps = {
	lineItemId: string;
	currentQuantity: number;
};

export function LineItem(props: LineItemProps) {
	const { lineItem } = props;

	const showToast = useUi(state => state.showToast);
	const [updateLineItemQuantity, { loading: updateLineItemQuantityLoading }] =
		useUpdateLineItemQuantity();

	const src = lineItem.image.src;
	const alt = lineItem.image.label;
	const productPath = '/product/' + lineItem?.productSlug || '';

	async function handleDecreaseQuantity(props: HandleQuantityProps) {
		if (updateLineItemQuantityLoading) return;
		const { lineItemId, currentQuantity } = props;
		// Prevent quantity from going below 0
		const quantity = Math.max(currentQuantity - 1, 0);
		try {
			await updateLineItemQuantity({
				lineItemId,
				quantity,
			});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.warn('[handleDecreaseQuantity]:', err?.message);
			showToast({ message: 'Quantity not updated', type: 'error' });
		}
	}

	async function handleIncreaseQuantity(props: HandleQuantityProps) {
		if (updateLineItemQuantityLoading) return;
		const { lineItemId, currentQuantity } = props;
		const quantity = currentQuantity + 1;

		try {
			await updateLineItemQuantity({
				lineItemId,
				quantity,
			});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.warn('[handleIncreaseQuantity]:', err?.message);
			showToast({ message: 'Quantity not updated', type: 'error' });
		}
	}

	async function handleRemoveLineItem(
		props: Omit<HandleQuantityProps, 'currentQuantity'>,
	) {
		if (updateLineItemQuantityLoading) return;
		const { lineItemId } = props;

		// Setting quantity to 0 removes the line-item
		const quantity = 0;

		try {
			await updateLineItemQuantity({
				lineItemId,
				quantity,
			});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			console.warn('[handleIncreaseQuantity]:', err?.message);
			showToast({ message: 'Quantity not updated', type: 'error' });
		}
	}

	return (
		<li className='group flex flex-row overflow-hidden p-4'>
			<div className='relative h-[120px] w-[90px] shrink-0'>
				<Image
					src={src}
					alt={alt}
					fill
					className='rounded object-cover invert-[0.05]'
				/>
			</div>
			<div className='flex w-full flex-col items-start justify-between pl-4 sm:pl-2'>
				<div className='flex w-full flex-row items-start justify-between'>
					<div className='flex flex-col'>
						<Link
							href={productPath}
							className='text-xs font-medium hover:underline focus-visible:underline'
						>
							{lineItem?.name}
						</Link>
						<p className='text-[11px] font-light leading-5 text-gray-700'>
							DKNY
						</p>
					</div>
					<button
						className='ml-2 transition-opacity aria-disabled:cursor-wait sm:opacity-100'
						title='Remove item'
						onClick={() => handleRemoveLineItem({ lineItemId: lineItem.id })}
						aria-disabled={updateLineItemQuantityLoading}
					>
						<Trash2Icon className='h-4 w-4 text-error' />
					</button>
				</div>
				<div className='flex w-full flex-row items-center justify-between sm:flex-col-reverse sm:items-end'>
					<div
						className={cx(
							'flex flex-row rounded border  border-gray-200 sm:mt-1 sm:w-full',
							{
								'bg-gray-50 text-gray-300': updateLineItemQuantityLoading,
							},
						)}
					>
						<button
							className='peer rounded-l-sm rounded-r-none p-2 aria-disabled:cursor-wait sm:p-3'
							title='Decrease quantity'
							onClick={() =>
								handleDecreaseQuantity({
									lineItemId: lineItem.id,
									currentQuantity: lineItem.quantity,
								})
							}
							aria-disabled={updateLineItemQuantityLoading}
						>
							<div>
								<MinusIcon className='h-4 w-4' />
							</div>
						</button>
						<div className='flex w-12 items-center justify-center border-x border-gray-200 sm:w-full'>
							{updateLineItemQuantityLoading ? (
								<LoadingSpinner size='small' />
							) : (
								<p className='text-sm'>{lineItem.quantity}</p>
							)}
						</div>
						<button
							className='rounded-l-none rounded-r-sm p-2 aria-disabled:cursor-wait sm:p-3'
							title='Increase quantity'
							onClick={() =>
								handleIncreaseQuantity({
									lineItemId: lineItem.id,
									currentQuantity: lineItem.quantity,
								})
							}
							aria-disabled={updateLineItemQuantityLoading}
						>
							<div>
								<PlusIcon className='h-4 w-4' />
							</div>
						</button>
					</div>
					<p className='text-sm'>{formatPrice(lineItem.totalPrice)}</p>
				</div>
			</div>
		</li>
	);
}
