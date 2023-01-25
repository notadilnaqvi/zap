import { z } from 'zod';

import { ctTokenInfoSchema } from '~/lib/commercetools/validators';

export * from '~/lib/commercetools/graphql/__generated__/graphql';

export type CtTokenInfo = z.infer<typeof ctTokenInfoSchema>;

// Normalised product

type PId = string;

type PSku = string;

type PSlug = string;

type PName = string;

type PDesigner = { key: string; label: string };

type PImage = {
	src: string;
	label: string;
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
