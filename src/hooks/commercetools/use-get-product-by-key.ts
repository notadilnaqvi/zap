import { gql, useQuery } from '@apollo/client';

interface Props {
	key: Scalars['String'];
}

const GET_PRODUCT_BY_KEY = gql`
	query product($key: String!) {
		product(key: $key) {
			key
			masterData {
				current {
					masterVariant {
						images {
							url
						}
						price(currency: "EUR") {
							value {
								centAmount
								currencyCode
								type
							}
						}
					}
					name(locale: "en")
				}
			}
		}
	}
`;

export async function useGetProductByKey({ key }: Props) {
	const result = useQuery(GET_PRODUCT_BY_KEY, {
		variables: { key },
		onCompleted: data => {
			console.log('data', data);
			return data;
		},
		fetchPolicy: 'cache-first',
	});

	return result;
}
