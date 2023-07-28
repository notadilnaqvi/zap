'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextBalancer from 'react-wrap-balancer';

import { z } from 'zod';
import { ZapIcon } from '~/components/icons';
import {
	Button,
	Form,
	FormField,
	Input,
	Modal,
	ModalContent,
} from '~/components/ui';
import { ShowToastProps, useUi } from '~/hooks';
import { sleep } from '~/utils';

export const newsletterSignUpFormSchema = z.object({
	firstName: z
		.string({
			required_error: 'Please enter your first name',
		})
		.min(2, 'Please enter at least 2 characters'),
	email: z
		.string({
			required_error: 'Please enter your email',
		})
		.email('Please enter a valid email'),
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
	const newsletterSignUpForm = useForm<NewsletterSignUpForm>({
		resolver: zodResolver(newsletterSignUpFormSchema),
	});

	async function onSubmit(data: NewsletterSignUpForm) {
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
	}

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
								Sign up for our newsletter to get the latest updates
							</TextBalancer>
						</h4>
						<Form
							className='space-y-6 sm:space-y-4'
							onSubmit={onSubmit}
							form={newsletterSignUpForm}
						>
							<FormField name='firstName'>
								<Input label='First name' />
							</FormField>
							<FormField name='email'>
								<Input label='Email' />
							</FormField>
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
						</Form>
					</div>
				</div>
			</ModalContent>
		</Modal>
	);
}
