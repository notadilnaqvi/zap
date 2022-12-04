import {
	generateAnonymousTokenInfo,
	generateCustomerTokenInfo,
	refreshTokenInfo,
} from './auth';
import { getAllProductSlugs } from './get-all-product-slugs';
import { getAllProducts } from './get-all-products';
import { getProductBySlug } from './get-product-by-slug';

export const Commercetools = {
	generateAnonymousTokenInfo,
	generateCustomerTokenInfo,
	refreshTokenInfo,
	getAllProductSlugs,
	getAllProducts,
	getProductBySlug,
};
