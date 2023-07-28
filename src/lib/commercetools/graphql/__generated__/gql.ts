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
    "\n\tfragment CartFragment on Cart {\n\t\tid\n\t\tversion\n\t\ttotalLineItemQuantity\n\t\tshippingAddress {\n\t\t\tcountry\n\t\t}\n\t\tlineItems {\n\t\t\tproductId\n\t\t\tid\n\t\t\tname(locale: $locale)\n\t\t\tquantity\n\t\t\ttotalPrice {\n\t\t\t\tcentAmount\n\t\t\t\tcurrencyCode\n\t\t\t\tfractionDigits\n\t\t\t}\n\t\t\tproductSlug(locale: $locale)\n\t\t\tvariant {\n\t\t\t\tsku\n\t\t\t\timages {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\ttotalPrice {\n\t\t\tcentAmount\n\t\t\tcurrencyCode\n\t\t\tfractionDigits\n\t\t}\n\t}\n": types.CartFragmentFragmentDoc,
    "\n\tfragment CustomerFragment on Customer {\n\t\tid\n\t\tversion\n\t\tfirstName\n\t\tlastName\n\t\temail\n\t\tcreatedAt\n\t\tcustom {\n\t\t\tcustomFieldsRaw {\n\t\t\t\tname\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n": types.CustomerFragmentFragmentDoc,
    "\n\tfragment ProductProjectionFragment on ProductProjection {\n\t\tid\n\t\tname(locale: $locale)\n\t\tslug(locale: $locale)\n\t\tdescription(locale: $locale)\n\t\tmasterVariant {\n\t\t\tvariantId: id\n\t\t\tsku\n\t\t\timages {\n\t\t\t\turl\n\t\t\t\tlabel\n\t\t\t}\n\t\t\tattributesRaw {\n\t\t\t\tname\n\t\t\t\tvalue\n\t\t\t}\n\t\t\tscopedPrice {\n\t\t\t\tvalue {\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tcentAmount\n\t\t\t\t\tfractionDigits\n\t\t\t\t}\n\t\t\t\tdiscounted {\n\t\t\t\t\tdiscount {\n\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t}\n\t\t\t\t\tvalue {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcountry\n\t\t\t}\n\t\t}\n\t}\n": types.ProductProjectionFragmentFragmentDoc,
    "\n\tmutation createCart($draft: MyCartDraft!, $locale: Locale!) {\n\t\tcart: createMyCart(draft: $draft) {\n\t\t\t...CartFragment\n\t\t}\n\t}\n": types.CreateCartDocument,
    "\n\tmutation updateCart(\n\t\t$actions: [MyCartUpdateAction!]!\n\t\t$version: Long!\n\t\t$id: String!\n\t\t$locale: Locale!\n\t) {\n\t\tcart: updateMyCart(actions: $actions, version: $version, id: $id) {\n\t\t\t...CartFragment\n\t\t}\n\t}\n": types.UpdateCartDocument,
    "\n\tmutation customerSignUp($draft: CustomerSignMeUpDraft!) {\n\t\tcustomerSignMeUp(draft: $draft) {\n\t\t\tcustomer {\n\t\t\t\t...CustomerFragment\n\t\t\t}\n\t\t}\n\t}\n": types.CustomerSignUpDocument,
    "\n\tmutation customerLogin($draft: CustomerSignMeInDraft!) {\n\t\tcustomerSignMeIn(draft: $draft) {\n\t\t\tcustomer {\n\t\t\t\t...CustomerFragment\n\t\t\t}\n\t\t}\n\t}\n": types.CustomerLoginDocument,
    "\n\tquery getProductSlugs(\n\t\t$locale: Locale!\n\t\t$limit: Int! = 5\n\t\t$offset: Int! = 0\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = \"\"\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\tresults {\n\t\t\t\tslug(locale: $locale)\n\t\t\t}\n\t\t}\n\t}\n": types.GetProductSlugsDocument,
    "\n\tquery getProducts(\n\t\t$locale: Locale!\n\t\t$limit: Int!\n\t\t$offset: Int!\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = \"\"\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\t...ProductProjectionFragment\n\t\t\t}\n\t\t}\n\t}\n": types.GetProductsDocument,
    "\n\tquery getCart($locale: Locale!) {\n\t\tme {\n\t\t\tcart: activeCart {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\ttotalLineItemQuantity\n\t\t\t\tlineItems {\n\t\t\t\t\tproductId\n\t\t\t\t\tid\n\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\tquantity\n\t\t\t\t\ttotalPrice {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t}\n\t\t\t\t\tproductSlug(locale: $locale)\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tsku\n\t\t\t\t\t\timages {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalPrice {\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tcentAmount\n\t\t\t\t\tfractionDigits\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetCartDocument,
    "\n\tquery getCustomer {\n\t\tme {\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tcustom {\n\t\t\t\t\tcustomFieldsRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetCustomerDocument,
};

/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function getTypedDocumentNode(source: string): unknown;

/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tfragment CartFragment on Cart {\n\t\tid\n\t\tversion\n\t\ttotalLineItemQuantity\n\t\tshippingAddress {\n\t\t\tcountry\n\t\t}\n\t\tlineItems {\n\t\t\tproductId\n\t\t\tid\n\t\t\tname(locale: $locale)\n\t\t\tquantity\n\t\t\ttotalPrice {\n\t\t\t\tcentAmount\n\t\t\t\tcurrencyCode\n\t\t\t\tfractionDigits\n\t\t\t}\n\t\t\tproductSlug(locale: $locale)\n\t\t\tvariant {\n\t\t\t\tsku\n\t\t\t\timages {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\ttotalPrice {\n\t\t\tcentAmount\n\t\t\tcurrencyCode\n\t\t\tfractionDigits\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment CartFragment on Cart {\n\t\tid\n\t\tversion\n\t\ttotalLineItemQuantity\n\t\tshippingAddress {\n\t\t\tcountry\n\t\t}\n\t\tlineItems {\n\t\t\tproductId\n\t\t\tid\n\t\t\tname(locale: $locale)\n\t\t\tquantity\n\t\t\ttotalPrice {\n\t\t\t\tcentAmount\n\t\t\t\tcurrencyCode\n\t\t\t\tfractionDigits\n\t\t\t}\n\t\t\tproductSlug(locale: $locale)\n\t\t\tvariant {\n\t\t\t\tsku\n\t\t\t\timages {\n\t\t\t\t\turl\n\t\t\t\t\tlabel\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\ttotalPrice {\n\t\t\tcentAmount\n\t\t\tcurrencyCode\n\t\t\tfractionDigits\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tfragment CustomerFragment on Customer {\n\t\tid\n\t\tversion\n\t\tfirstName\n\t\tlastName\n\t\temail\n\t\tcreatedAt\n\t\tcustom {\n\t\t\tcustomFieldsRaw {\n\t\t\t\tname\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment CustomerFragment on Customer {\n\t\tid\n\t\tversion\n\t\tfirstName\n\t\tlastName\n\t\temail\n\t\tcreatedAt\n\t\tcustom {\n\t\t\tcustomFieldsRaw {\n\t\t\t\tname\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tfragment ProductProjectionFragment on ProductProjection {\n\t\tid\n\t\tname(locale: $locale)\n\t\tslug(locale: $locale)\n\t\tdescription(locale: $locale)\n\t\tmasterVariant {\n\t\t\tvariantId: id\n\t\t\tsku\n\t\t\timages {\n\t\t\t\turl\n\t\t\t\tlabel\n\t\t\t}\n\t\t\tattributesRaw {\n\t\t\t\tname\n\t\t\t\tvalue\n\t\t\t}\n\t\t\tscopedPrice {\n\t\t\t\tvalue {\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tcentAmount\n\t\t\t\t\tfractionDigits\n\t\t\t\t}\n\t\t\t\tdiscounted {\n\t\t\t\t\tdiscount {\n\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t}\n\t\t\t\t\tvalue {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcountry\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tfragment ProductProjectionFragment on ProductProjection {\n\t\tid\n\t\tname(locale: $locale)\n\t\tslug(locale: $locale)\n\t\tdescription(locale: $locale)\n\t\tmasterVariant {\n\t\t\tvariantId: id\n\t\t\tsku\n\t\t\timages {\n\t\t\t\turl\n\t\t\t\tlabel\n\t\t\t}\n\t\t\tattributesRaw {\n\t\t\t\tname\n\t\t\t\tvalue\n\t\t\t}\n\t\t\tscopedPrice {\n\t\t\t\tvalue {\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tcentAmount\n\t\t\t\t\tfractionDigits\n\t\t\t\t}\n\t\t\t\tdiscounted {\n\t\t\t\t\tdiscount {\n\t\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\t}\n\t\t\t\t\tvalue {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcountry\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tmutation createCart($draft: MyCartDraft!, $locale: Locale!) {\n\t\tcart: createMyCart(draft: $draft) {\n\t\t\t...CartFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation createCart($draft: MyCartDraft!, $locale: Locale!) {\n\t\tcart: createMyCart(draft: $draft) {\n\t\t\t...CartFragment\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tmutation updateCart(\n\t\t$actions: [MyCartUpdateAction!]!\n\t\t$version: Long!\n\t\t$id: String!\n\t\t$locale: Locale!\n\t) {\n\t\tcart: updateMyCart(actions: $actions, version: $version, id: $id) {\n\t\t\t...CartFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation updateCart(\n\t\t$actions: [MyCartUpdateAction!]!\n\t\t$version: Long!\n\t\t$id: String!\n\t\t$locale: Locale!\n\t) {\n\t\tcart: updateMyCart(actions: $actions, version: $version, id: $id) {\n\t\t\t...CartFragment\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tmutation customerSignUp($draft: CustomerSignMeUpDraft!) {\n\t\tcustomerSignMeUp(draft: $draft) {\n\t\t\tcustomer {\n\t\t\t\t...CustomerFragment\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation customerSignUp($draft: CustomerSignMeUpDraft!) {\n\t\tcustomerSignMeUp(draft: $draft) {\n\t\t\tcustomer {\n\t\t\t\t...CustomerFragment\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tmutation customerLogin($draft: CustomerSignMeInDraft!) {\n\t\tcustomerSignMeIn(draft: $draft) {\n\t\t\tcustomer {\n\t\t\t\t...CustomerFragment\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation customerLogin($draft: CustomerSignMeInDraft!) {\n\t\tcustomerSignMeIn(draft: $draft) {\n\t\t\tcustomer {\n\t\t\t\t...CustomerFragment\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tquery getProductSlugs(\n\t\t$locale: Locale!\n\t\t$limit: Int! = 5\n\t\t$offset: Int! = 0\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = \"\"\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\tresults {\n\t\t\t\tslug(locale: $locale)\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getProductSlugs(\n\t\t$locale: Locale!\n\t\t$limit: Int! = 5\n\t\t$offset: Int! = 0\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = \"\"\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\tresults {\n\t\t\t\tslug(locale: $locale)\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tquery getProducts(\n\t\t$locale: Locale!\n\t\t$limit: Int!\n\t\t$offset: Int!\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = \"\"\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\t...ProductProjectionFragment\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getProducts(\n\t\t$locale: Locale!\n\t\t$limit: Int!\n\t\t$offset: Int!\n\t\t$priceSelector: PriceSelectorInput!\n\t\t$sorts: [String!] = []\n\t\t$filters: [SearchFilterInput!] = []\n\t\t$text: String = \"\"\n\t) {\n\t\tproductProjectionSearch(\n\t\t\tlocale: $locale\n\t\t\ttext: $text\n\t\t\tlimit: $limit\n\t\t\toffset: $offset\n\t\t\tsorts: $sorts\n\t\t\tpriceSelector: $priceSelector\n\t\t\tfilters: $filters\n\t\t) {\n\t\t\ttotal\n\t\t\tresults {\n\t\t\t\t...ProductProjectionFragment\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tquery getCart($locale: Locale!) {\n\t\tme {\n\t\t\tcart: activeCart {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\ttotalLineItemQuantity\n\t\t\t\tlineItems {\n\t\t\t\t\tproductId\n\t\t\t\t\tid\n\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\tquantity\n\t\t\t\t\ttotalPrice {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t}\n\t\t\t\t\tproductSlug(locale: $locale)\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tsku\n\t\t\t\t\t\timages {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalPrice {\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tcentAmount\n\t\t\t\t\tfractionDigits\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getCart($locale: Locale!) {\n\t\tme {\n\t\t\tcart: activeCart {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\ttotalLineItemQuantity\n\t\t\t\tlineItems {\n\t\t\t\t\tproductId\n\t\t\t\t\tid\n\t\t\t\t\tname(locale: $locale)\n\t\t\t\t\tquantity\n\t\t\t\t\ttotalPrice {\n\t\t\t\t\t\tcurrencyCode\n\t\t\t\t\t\tcentAmount\n\t\t\t\t\t\tfractionDigits\n\t\t\t\t\t}\n\t\t\t\t\tproductSlug(locale: $locale)\n\t\t\t\t\tvariant {\n\t\t\t\t\t\tsku\n\t\t\t\t\t\timages {\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\tlabel\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ttotalPrice {\n\t\t\t\t\tcurrencyCode\n\t\t\t\t\tcentAmount\n\t\t\t\t\tfractionDigits\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The getTypedDocumentNode function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function getTypedDocumentNode(source: "\n\tquery getCustomer {\n\t\tme {\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tcustom {\n\t\t\t\t\tcustomFieldsRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery getCustomer {\n\t\tme {\n\t\t\tcustomer {\n\t\t\t\tid\n\t\t\t\tversion\n\t\t\t\tfirstName\n\t\t\t\tlastName\n\t\t\t\temail\n\t\t\t\tcreatedAt\n\t\t\t\tcustom {\n\t\t\t\t\tcustomFieldsRaw {\n\t\t\t\t\t\tname\n\t\t\t\t\t\tvalue\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function getTypedDocumentNode(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;