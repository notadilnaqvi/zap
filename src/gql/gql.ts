/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
	'\n\tquery product($key: String!) {\n\t\tproduct(key: $key) {\n\t\t\tkey\n\t\t\tmasterData {\n\t\t\t\tcurrent {\n\t\t\t\t\tmasterVariant {\n\t\t\t\t\t\timages {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t\tprice(currency: "EUR") {\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tname(locale: "en")\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.ProductDocument,
	'\n\tmutation createMyCart($draft: MyCartDraft!) {\n\t\tcreateMyCart(draft: $draft) {\n\t\t\tid\n\t\t\tversion\n\t\t}\n\t}\n':
		types.CreateMyCartDocument,
	'\n\tmutation updateMyCart(\n\t\t$actions: [MyCartUpdateAction!]!\n\t\t$version: Long!\n\t\t$id: String!\n\t) {\n\t\tupdateMyCart(actions: $actions, version: $version, id: $id) {\n\t\t\tid\n\t\t\tversion\n\t\t}\n\t}\n':
		types.UpdateMyCartDocument,
	'\n\tquery getMyCart {\n\t\tme {\n\t\t\tactiveCart {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\ttotalLineItemQuantity\n\t\t\t\tlineItems {\n\t\t\t\t\tproductId\n\t\t\t\t\tid\n\t\t\t\t\tname(locale: "en")\n\t\t\t\t\tquantity\n\t\t\t\t\ttotalPrice {\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalPrice {\n\t\t\t\t\tcentAmount\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetMyCartDocument,
	'\n\tquery getAllProductSlugs {\n\t\tproducts(limit: 50) {\n\t\t\tresults {\n\t\t\t\tmasterData {\n\t\t\t\t\tcurrent {\n\t\t\t\t\t\tslug(locale: "en")\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetAllProductSlugsDocument,
	'\n\tquery products($locale: Locale!, $limit: Int! = 20) {\n\t\tproducts(limit: $limit) {\n\t\t\t__typename\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\t__typename\n\t\t\t\tid\n\t\t\t\tmasterData {\n\t\t\t\t\t__typename\n\t\t\t\t\tcurrent {\n\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\tslug(locale: $locale)\n\t\t\t\t\t\tvariants {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tsku\n\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tmasterVariant {\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t\tprices {\n\t\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tsku\n\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.ProductsDocument,
	'\n\tquery getProductBySlug(\n\t\t$locale: Locale!\n\t\t$limit: Int! = 5\n\t\t$offset: Int! = 0\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = ""\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname(locale: $locale)\n\t\t\t\tslug(locale: $locale)\n\t\t\t\tvariants {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\timages {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tscopedPrice {\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscounted {\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcountry\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tmasterVariant {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\timages {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tscopedPrice {\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscounted {\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcountry\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetProductBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery product($key: String!) {\n\t\tproduct(key: $key) {\n\t\t\tkey\n\t\t\tmasterData {\n\t\t\t\tcurrent {\n\t\t\t\t\tmasterVariant {\n\t\t\t\t\t\timages {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t\tprice(currency: "EUR") {\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tname(locale: "en")\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): typeof documents['\n\tquery product($key: String!) {\n\t\tproduct(key: $key) {\n\t\t\tkey\n\t\t\tmasterData {\n\t\t\t\tcurrent {\n\t\t\t\t\tmasterVariant {\n\t\t\t\t\t\timages {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t}\n\t\t\t\t\t\tprice(currency: "EUR") {\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\ttype\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tname(locale: "en")\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation createMyCart($draft: MyCartDraft!) {\n\t\tcreateMyCart(draft: $draft) {\n\t\t\tid\n\t\t\tversion\n\t\t}\n\t}\n',
): typeof documents['\n\tmutation createMyCart($draft: MyCartDraft!) {\n\t\tcreateMyCart(draft: $draft) {\n\t\t\tid\n\t\t\tversion\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation updateMyCart(\n\t\t$actions: [MyCartUpdateAction!]!\n\t\t$version: Long!\n\t\t$id: String!\n\t) {\n\t\tupdateMyCart(actions: $actions, version: $version, id: $id) {\n\t\t\tid\n\t\t\tversion\n\t\t}\n\t}\n',
): typeof documents['\n\tmutation updateMyCart(\n\t\t$actions: [MyCartUpdateAction!]!\n\t\t$version: Long!\n\t\t$id: String!\n\t) {\n\t\tupdateMyCart(actions: $actions, version: $version, id: $id) {\n\t\t\tid\n\t\t\tversion\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery getMyCart {\n\t\tme {\n\t\t\tactiveCart {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\ttotalLineItemQuantity\n\t\t\t\tlineItems {\n\t\t\t\t\tproductId\n\t\t\t\t\tid\n\t\t\t\t\tname(locale: "en")\n\t\t\t\t\tquantity\n\t\t\t\t\ttotalPrice {\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalPrice {\n\t\t\t\t\tcentAmount\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): typeof documents['\n\tquery getMyCart {\n\t\tme {\n\t\t\tactiveCart {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\ttotalLineItemQuantity\n\t\t\t\tlineItems {\n\t\t\t\t\tproductId\n\t\t\t\t\tid\n\t\t\t\t\tname(locale: "en")\n\t\t\t\t\tquantity\n\t\t\t\t\ttotalPrice {\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalPrice {\n\t\t\t\t\tcentAmount\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery getAllProductSlugs {\n\t\tproducts(limit: 50) {\n\t\t\tresults {\n\t\t\t\tmasterData {\n\t\t\t\t\tcurrent {\n\t\t\t\t\t\tslug(locale: "en")\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): typeof documents['\n\tquery getAllProductSlugs {\n\t\tproducts(limit: 50) {\n\t\t\tresults {\n\t\t\t\tmasterData {\n\t\t\t\t\tcurrent {\n\t\t\t\t\t\tslug(locale: "en")\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery products($locale: Locale!, $limit: Int! = 20) {\n\t\tproducts(limit: $limit) {\n\t\t\t__typename\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\t__typename\n\t\t\t\tid\n\t\t\t\tmasterData {\n\t\t\t\t\t__typename\n\t\t\t\t\tcurrent {\n\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\tslug(locale: $locale)\n\t\t\t\t\t\tvariants {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tsku\n\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tmasterVariant {\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t\tprices {\n\t\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tsku\n\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): typeof documents['\n\tquery products($locale: Locale!, $limit: Int! = 20) {\n\t\tproducts(limit: $limit) {\n\t\t\t__typename\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\t__typename\n\t\t\t\tid\n\t\t\t\tmasterData {\n\t\t\t\t\t__typename\n\t\t\t\t\tcurrent {\n\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\tslug(locale: $locale)\n\t\t\t\t\t\tvariants {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tsku\n\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tmasterVariant {\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t\tprices {\n\t\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tsku\n\t\t\t\t\t\t\timages {\n\t\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tvalue\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery getProductBySlug(\n\t\t$locale: Locale!\n\t\t$limit: Int! = 5\n\t\t$offset: Int! = 0\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = ""\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname(locale: $locale)\n\t\t\t\tslug(locale: $locale)\n\t\t\t\tvariants {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\timages {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tscopedPrice {\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscounted {\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcountry\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tmasterVariant {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\timages {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tscopedPrice {\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscounted {\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcountry\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n',
): typeof documents['\n\tquery getProductBySlug(\n\t\t$locale: Locale!\n\t\t$limit: Int! = 5\n\t\t$offset: Int! = 0\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = ""\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname(locale: $locale)\n\t\t\t\tslug(locale: $locale)\n\t\t\t\tvariants {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\timages {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tscopedPrice {\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscounted {\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcountry\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tmasterVariant {\n\t\t\t\t\tid\n\t\t\t\t\tsku\n\t\t\t\t\timages {\n\t\t\t\t\t\turl\n\t\t\t\t\t}\n\t\t\t\t\tattributesRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t\tscopedPrice {\n\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscounted {\n\t\t\t\t\t\t\tdiscount {\n\t\t\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvalue {\n\t\t\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcountry\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n'];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
