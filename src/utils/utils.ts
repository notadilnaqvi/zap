import { Constants } from '~/utils';

interface FormatPriceProps {
	centAmount: number;
}

function formatPrice({ centAmount }: FormatPriceProps) {
	try {
		const formatter = new Intl.NumberFormat(Constants.LOCALE, {
			style: 'currency',
			currency: Constants.CURRENCY_CODE,
		});
		return formatter.format(centAmount / 10 ** Constants.FRACTION_DIGITS);
	} catch (err) {
		console.error('[Utils.formatPrice]', err);
		return 'NaN';
	}
}

export const Utils = {
	formatPrice,
};
