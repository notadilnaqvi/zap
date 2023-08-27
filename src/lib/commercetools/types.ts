import { z } from 'zod';

import { authTokenSchema, ctTestDataSchema } from '~/utils';

// Generated types

export * from '~/lib/commercetools/graphql/__generated__/graphql';

// Valitated data types

export type AuthToken = z.infer<typeof authTokenSchema>;

export type CtTestData = z.infer<typeof ctTestDataSchema>;

// Normalised product

export type PDesigner = { key: string; label: string };

export type PImage = {
	src: string;
	label: string;
	/**
	 * This is the `base64` encoded data URL of a very low resolution version of
	 * the image. It is used by `next/image` as a placeholder for the image while
	 * it is loading. This field is only available for products fetched on the
	 * server as the library used to generate the data URL (`plaiceholder`) is not
	 * available on the client.
	 */
	blurDataUrl?: string;
};

export type PPrice = {
	centAmount: number;
	currencyCode: string;
	fractionDigits: number;
};

export type NormalisedProduct = {
	id: string;
	sku: string;
	price: PPrice;
	mainImage: PImage;
	slug?: Maybe<string>;
	name?: Maybe<string>;
	description?: Maybe<string>;
	designer?: Maybe<PDesigner>;
	images: [PImage, ...PImage[]];
};

// Normalised cart

export type LineItem = {
	id: string;
	sku: string;
	name: string;
	image: PImage;
	quantity: number;
	productSlug: string;
	totalPrice: PPrice;
};

export type NormalisedCart = {
	id: string;
	version: number;
	currency: string;
	totalPrice: PPrice;
	lineItems: LineItem[];
	totalLineItemQuantity: number;
};

// Normalised customer

export type NewsletterSubscriptionStatus = 'subscribed' | 'unsubscribed';

export type NormalisedCustomer = {
	firstName: string;
	lastName: string;
	id: string;
	email: string;
	version: number;
	isSubscribedToNewsletter: boolean;
	isEmailVerified: boolean;
};
