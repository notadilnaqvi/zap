import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';
import { PPrice } from '~/lib/commercetools/types';

import { LOCALE } from '~/utils/constants';

export function formatPrice(price: PPrice) {
	const { centAmount, currencyCode, fractionDigits } = price;
	try {
		const formatter = new Intl.NumberFormat(LOCALE, {
			style: 'currency',
			currency: currencyCode,
		});
		return formatter.format(centAmount / 10 ** fractionDigits);
	} catch (err) {
		console.error('[Utils.formatPrice]', err);
		return 'NaN';
	}
}

export function cx(...inputs: ArgumentArray) {
	return twMerge(classNames(inputs));
}

export function extractCustomAttribute<T>({
	attributes,
	extract,
}: {
	attributes: { name: string; value: T }[];
	extract: string;
}) {
	return attributes?.find?.(attr => attr?.name === extract)?.value ?? null;
}
