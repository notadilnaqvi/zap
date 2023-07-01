'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextBalancer from 'react-wrap-balancer';

import { z } from 'zod';
import { ZapIcon } from '~/components/icons';
import { Button, Input, Modal, ModalContent } from '~/components/ui';
import { ShowToastProps, useUi } from '~/hooks';
import { sleep } from '~/utils';

export const newsletterSignUpFormSchema = z.object({
	firstName: z.string().min(1, 'Please enter a valid first name'),
	email: z.string().email('Please enter a valid email'),
});

type NewsletterSignUpForm = z.infer<typeof newsletterSignUpFormSchema>;

export function NewsletterSignUpModal() {
	const showToast = useUi(state => state.showToast);
	const [isSignUpLoading, setIsSignUpLoading] = useState(false);
	const closeNewsletterSignUpModal = useUi(
		state => state.closeNewsletterSignUpModal,
	);
	const isNewsletterSignUpModalOpen = useUi(
		state => state.isNewsletterSignUpModalOpen,
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewsletterSignUpForm>({
		resolver: zodResolver(newsletterSignUpFormSchema),
	});

	const onSubmit: SubmitHandler<NewsletterSignUpForm> = async data => {
		const { email, firstName } = data;

		setIsSignUpLoading(true);

		let message = 'Successfully signed up for newsletter';
		let type: ShowToastProps['type'] = 'success';

		try {
			await sleep(2000); // Simulate API call
			console.log('Signed up to newsletter!', { email, firstName });
			closeNewsletterSignUpModal();
		} catch (error) {
			type = 'error';
			message = 'Failed to login. Please try again';
		} finally {
			showToast({ message, type });
			setIsSignUpLoading(false);
		}
	};

	return (
		<Modal
			isOpen={isNewsletterSignUpModalOpen}
			onClose={closeNewsletterSignUpModal}
			className='max-w-3xl md:max-w-md sm:max-w-full'
		>
			<ModalContent className='p-0'>
				<div className='grid grid-cols-2 md:grid-cols-1'>
					<div className='relative h-full overflow-hidden bg-gray-100 p-4 md:hidden'>
						<div className='absolute right-8 top-8'>
							<ZapIcon className='h-[514px] w-[514px] fill-current text-gray-200' />
						</div>
					</div>
					<div className='space-y-6 p-10 md:p-8 sm:p-5'>
						<h4 className='text-2xl font-semibold'>
							<TextBalancer>
								Sign up for our newsletter to get the latest offers
							</TextBalancer>
						</h4>
						<form
							className='space-y-6 sm:space-y-4'
							onSubmit={handleSubmit(onSubmit)}
						>
							<Input
								error={errors.firstName?.message}
								label='First name'
								{...register('firstName')}
							/>
							<Input
								error={errors.email?.message}
								label='Email'
								{...register('email')}
							/>
							<div className='flex flex-row space-x-3'>
								<Button
									onClick={closeNewsletterSignUpModal}
									variant='outlined'
								>
									Not now
								</Button>
								<Button
									className='w-full'
									loading={isSignUpLoading}
									disabled={isSignUpLoading}
									type='submit'
								>
									Sign up
								</Button>
							</div>
						</form>
					</div>
				</div>
			</ModalContent>
		</Modal>
	);
}
