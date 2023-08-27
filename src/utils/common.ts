import classNames, { ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

import { LOCALE } from '~/utils/constants';

import { type ApolloError } from '@apollo/client';
import type { PPrice, RawProductAttribute } from '~/lib/commercetools/types';

type ExtractCustomAttributeProps = {
	attributes?: Maybe<Pick<RawProductAttribute, 'name' | 'value'>[]>;
	extract: string;
};

export function formatPrice(price: PPrice) {
	const { centAmount, currencyCode, fractionDigits } = price;
	try {
		const formatter = new Intl.NumberFormat(LOCALE, {
			style: 'currency',
			currency: currencyCode,
		});
		return formatter.format(centAmount / 10 ** fractionDigits);
	} catch (err) {
		console.error('[formatPrice]:', err);
		return 'NaN';
	}
}

export function cx(...inputs: ArgumentArray) {
	return twMerge(classNames(inputs));
}

export function extractCustomAttribute<T>(
	props: ExtractCustomAttributeProps,
): Maybe<T> {
	const { extract, attributes } = props;
	return attributes?.find?.(attr => attr?.name === extract)?.value ?? null;
}

export async function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export function parseJson<T>(str: string | null | undefined) {
	if (!str) return null;
	try {
		return JSON.parse(str) as T;
	} catch (err) {
		console.warn('[parseJson]:', err);
		return null;
	}
}

export function extractApolloErrorCode(error?: Maybe<ApolloError>) {
	const errorCode = error?.graphQLErrors?.[0]?.extensions?.['code'];
	if (typeof errorCode === 'string') return errorCode;
}

export function extractSearchParam(
	searchParams: { [key: string]: string | string[] | undefined },
	key: string,
) {
	const param = searchParams[key];
	if (!param) return;
	return Array.isArray(param) ? param[0] : param;
}

/** Equivalent to `btoa` but works on the server */
export function toBase64(str: string) {
	return Buffer.from(str).toString('base64');
}

/** `/some/path` ➡️ `https://domain.com/some/path` */
export function getAbsoluteUrl(path: string) {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
		? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
		: 'http://localhost:3000';

	return new URL(path, baseUrl).href;
}
