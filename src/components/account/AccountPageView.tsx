'use client';

import { useCustomer } from '~/lib/commercetools/hooks';

export function AccountPageView() {
	const {
		data: customer,
		loading: customerLoading,
		error: customerError,
	} = useCustomer();

	return (
		<div className='flex w-full justify-center px-4'>
			<div className='w-full max-w-page py-16'>
				<h1 className='text-lg font-medium'>Account</h1>
				<section className='mt-4'>
					{customerLoading || !customer ? (
						<p>Loading...</p>
					) : customerError ? (
						<p>Error getting account datails</p>
					) : (
						<div className='overflow-x-scroll rounded bg-gray-100 p-4 text-sm'>
							<pre>
								<code>{JSON.stringify(customer, null, 2)}</code>
							</pre>
						</div>
					)}
				</section>
			</div>
		</div>
	);
}
