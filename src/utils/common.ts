import { CURRENCY_CODE, FRACTION_DIGITS, LOCALE } from '~/utils/constants';

interface FormatPriceProps {
	centAmount: number;
}

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
