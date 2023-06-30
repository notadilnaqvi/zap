import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AccountPageView } from '~/components/account';
import { AuthToken } from '~/lib/commercetools/types';
import { parseJson } from '~/utils';

export const metadata = {
	title: 'Account',
	description: 'Your personal account preferences and settings',
};

export default function AccountPage() {
	const cookieStore = cookies();
	const authTokenCookie = cookieStore.get('zap_auth_token');
	const authToken = parseJson<AuthToken>(authTokenCookie?.value);

	const isLoggedIn = authToken?.is_logged_in;

	if (!isLoggedIn) {
		redirect('/login');
	}

	return (
		<div className='flex flex-row'>
			<AccountPageView />
		</div>
	);
}
