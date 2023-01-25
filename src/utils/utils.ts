interface FormatCurrency {
	locale: 'en' | 'de';
	centAmount: number;
}

const LOCALE_TO_CURRENCY_MAPPING = {
	en: 'USD',
	de: 'EUR',
};

function formatCurrency({ locale, centAmount }: FormatCurrency) {
	try {
		const formatter = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency: LOCALE_TO_CURRENCY_MAPPING[locale],
		});
		return formatter.format(centAmount / 100);
	} catch (err) {
		console.error('[Utils.formatCurrency]', err);
		return 'NaN';
	}
}

export const Utils = {
	formatCurrency,
};
