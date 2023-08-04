import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AlreadyHaveAnAccount, SignUpForm } from '~/components/sign-up/';
import type { AuthToken } from '~/lib/commercetools/types';
import { parseJson } from '~/utils';

export const metadata = {
	title: 'Sign up',
	description:
		'Create an account to speed up your checkout, create wishlists, and save your addresses',
};

export default function SignUpPage() {
	const cookieStore = cookies();
	const authTokenCookie = cookieStore.get('zap_auth_token');
	const authToken = parseJson<AuthToken>(authTokenCookie?.value);

	const isLoggedIn = authToken?.is_logged_in;

	if (isLoggedIn) {
		redirect('/account');
	}

	return (
		<div className='w-full px-4 py-16'>
			<section className='mx-auto flex w-full max-w-md flex-col space-y-8 sm:max-w-none'>
				<SignUpForm />
				<AlreadyHaveAnAccount />
			</section>
		</div>
	);
}
