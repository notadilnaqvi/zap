// Hardcoding for now, but these will be dynamic based on user's location

export const LOCALE = 'en';

export const COUNTRY = 'US';

export const CURRENCY_CODE = 'USD';

// TODO: This should be dynamic based on the currency code
/** Reference: https://docs.commercetools.com/api/types#usage */
export const FRACTION_DIGITS = 2;

export const FALLBACK_IMAGE = '/fallback-image.png';

export const FALLBACK_IMAGE_BLUR_DATA_URL =
	'data:image/webp;base64,UklGRngBAABXRUJQVlA4IGwBAAAQFQCdASr6APoAPpFIoUylo6MiIJQIGLASCWlu4XaxG3+BcyHojfzfsABeGVXywD3U/0bUVXywD3U/0bUVXywD3U/0bUVXywD3U/0bUVXywD3U/0bUVXwkHAI/0bUVTuDnx7hFDkQoD1zUwkqvlgHuB5bQSbd8WuZhVjZ0gmUA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8sA91P9G1FV8owAA/v/AJAAAAguvn2hRth/5TGtpidX0O/5DoAf8ITP2tLddTiX/86+7F/2fW2dGmrZsXSH4jqHbzdROx84wPEHUMnlDogQSxds1uj9/M9ZqX0GkP27suhIB8zkPQkcdSTHrNxYZgDf/vVnXqq/cr4Mn/838uv699/LJNBRE1v1bSqKcP0xVmDxj5TEU77Va6378F7c7AlMKiOz6bc79/KHrQACKfyiUpZ0iyW1vzVy9x30fiKoAAAAAAAAA';

/** Reference: https://docs.commercetools.com/api/general-concepts#limit */
export const COMMERCETOOLS_MIN_LIMIT = 1;

/** Reference: https://docs.commercetools.com/api/general-concepts#limit */
export const COMMERCETOOLS_MAX_LIMIT = 500;

export const DEFAULT_ICON_PROPS: React.SVGProps<SVGSVGElement> = {
	width: '20',
	height: '20',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: '1.5',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
	xmlns: 'http://www.w3.org/2000/svg',
	'aria-hidden': true,
};

export const AUTH_TOKEN_EXPIRY_DAYS = 7;
