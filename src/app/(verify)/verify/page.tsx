import { CheckCircleIcon, MailIcon, XCircleIcon } from '~/components/icons';
import { ButtonLink } from '~/components/ui';
import { commercetoolsFetch } from '~/lib/commercetools/commercetools-fetch';
import { extractSearchParam, sleep } from '~/utils';

export const metadata = {
	title: 'Verify your email',
	description:
		'Verify your email address to complete your registration and start using your account',
	robots: {
		index: false,
		follow: false,
	},
};

type VerifyPageProps = {
	searchParams: { [key: string]: string | string[] | undefined };
};

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function VerifyPage(props: VerifyPageProps) {
	const { searchParams } = props;

	const tokenValue = extractSearchParam(searchParams, 'tokenValue');

	let wasEmailVerficationSuccessful = false;

	try {
		await sleep(3000); // Fake delay to showcase loading state

		const verificationResult = await commercetoolsFetch(
			'https://api.australia-southeast1.gcp.commercetools.com/zap-5/customers/email/confirm',
			{
				method: 'POST',
				cache: 'no-cache',
				body: JSON.stringify({ tokenValue }),
			},
		);

		if (
			verificationResult &&
			typeof verificationResult === 'object' &&
			'isEmailVerified' in verificationResult &&
			verificationResult.isEmailVerified
		) {
			wasEmailVerficationSuccessful = true;
		}
	} catch (error) {
		console.error('[VerifyPage]', error);
	}

	return (
		<section className='flex flex-col items-center space-y-8'>
			<div className='relative'>
				<div>
					<MailIcon className='h-24 w-24 stroke-[0.5px]' />
				</div>
				<div className='absolute bottom-2 right-0 rounded-full bg-white p-px'>
					{wasEmailVerficationSuccessful ? (
						<CheckCircleIcon className='h-6 w-6 stroke-[1.75px] text-green-500' />
					) : (
						<XCircleIcon className='h-6 w-6 stroke-[1.75px] text-error' />
					)}
				</div>
			</div>
			<h1 className='text-xl font-semibold'>
				{wasEmailVerficationSuccessful
					? 'Your email was verified'
					: 'Email verification failed'}
			</h1>
			<p className='text-gray-600'>
				{wasEmailVerficationSuccessful
					? 'Thank you for verifying your email'
					: 'We could not verify your email'}
			</p>
			<ButtonLink href={wasEmailVerficationSuccessful ? '/' : '/contact'}>
				{wasEmailVerficationSuccessful ? 'Start shopping' : 'Contact support'}
			</ButtonLink>
		</section>
	);
}
