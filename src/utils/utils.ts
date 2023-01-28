import { Constants } from '~/utils';

interface FormatPriceProps {
	centAmount: number;
}

function formatPrice({ centAmount }: FormatPriceProps) {
	try {
		const formatter = new Intl.NumberFormat(Constants.LOCALE, {
			style: 'currency',
			currency: Constants.CURRENCY,
		});
		return formatter.format(centAmount / 100);
	} catch (err) {
		console.error('[Utils.formatPrice]', err);
		return 'NaN';
	}
}

export const Utils = {
	formatPrice,
};
