import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

import { CURRENCY_CODE, FRACTION_DIGITS, LOCALE } from '~/utils/constants';

type FormatPriceProps = {
	centAmount: number;
};

export function formatPrice({ centAmount }: FormatPriceProps) {
	try {
		const formatter = new Intl.NumberFormat(LOCALE, {
			style: 'currency',
			currency: CURRENCY_CODE,
		});
		return formatter.format(centAmount / 10 ** FRACTION_DIGITS);
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
