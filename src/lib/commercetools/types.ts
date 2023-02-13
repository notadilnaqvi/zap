import { z } from 'zod';

import {
	ctTestDataSchema,
	ctTokenInfoSchema,
} from '~/lib/commercetools/validators';

// Generated types

export * from '~/lib/commercetools/graphql/__generated__/graphql';

// Valitated data types

export type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;

export type CtTestData = z.infer<typeof ctTestDataSchema>;

// Normalised product

type PId = string;

type PSku = string;

type PSlug = string;

type PName = string;

type PDesigner = { key: string; label: string };

type PImage = {
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

type PDescription = string;

type PPrice = number;

export type NormalisedProduct = {
	id: PId;
	sku: PSku;
	mainImage: PImage;
	slug?: Maybe<PSlug>;
	name?: Maybe<PName>;
	images: [PImage, ...PImage[]];
	description?: Maybe<PDescription>;
	designer?: Maybe<PDesigner>;
	price: PPrice;
};
