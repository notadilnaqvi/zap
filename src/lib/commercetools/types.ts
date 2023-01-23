import { z } from 'zod';

import { ctTokenInfoSchema } from '~/lib/commercetools/validators';

export * from '~/lib/commercetools/graphql/__generated__/graphql';

export type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;

// Normalised product

type PId = string;

type PVariantId = number;

type PSku = string;

type PSlug = string;

type PName = string;

type PImage = {
	src: string;
	label: string;
};

type PDescription = string;

type PPrice = number;

type PVariant = {
	id: PVariantId;
	sku?: Maybe<PSku>;
	price: PPrice;
};

export type NormalisedProduct = {
	id: PId;
	mainImage: PImage;
	slug?: Maybe<PSlug>;
	name?: Maybe<PName>;
	images: PImage[];
	description?: Maybe<PDescription>;
	variants: Maybe<PVariant[]>;
	price: PPrice;
};
