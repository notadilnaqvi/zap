// Hardcoding for now, but these will be dynamic based on user's location

const LOCALE = 'en';

const COUNTRY = 'US';

const CURRENCY_CODE = 'USD';

// TODO: This should be dynamic based on the currency code
/** Reference: https://docs.commercetools.com/api/types#usage */
const FRACTION_DIGITS = 2;

const FALLBACK_IMAGE = '/fallback-image.png';

/** Reference: https://docs.commercetools.com/api/general-concepts#limit */
const COMMERCETOOLS_MIN_LIMIT = 1;

/** Reference: https://docs.commercetools.com/api/general-concepts#limit */
const COMMERCETOOLS_MAX_LIMIT = 500;

export {
	LOCALE,
	COUNTRY,
	CURRENCY_CODE,
	FRACTION_DIGITS,
	FALLBACK_IMAGE,
	COMMERCETOOLS_MIN_LIMIT,
	COMMERCETOOLS_MAX_LIMIT,
};
