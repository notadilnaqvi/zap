'use client';

import Balancer from 'react-wrap-balancer';

import { ZapIcon } from '~/components/icons';
import { Button, Input, Modal, ModalContent } from '~/components/ui';
import { useUi } from '~/hooks';

export function NewsLetterSignUpModal() {
	const showToast = useUi(state => state.showToast);
	const closeSignUpModal = useUi(state => state.closeSignUpModal);
	const isSignUpModalOpen = useUi(state => state.isSignUpModalOpen);

	function handleSignUpFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const firstName = (form.elements.namedItem('firstName') as HTMLInputElement)
			.value;
		const email = (form.elements.namedItem('email') as HTMLInputElement).value;

		console.log({ firstName, email }); // TODO: Send data to some service

		showToast({
			message: 'Successfully signed up for newsletter',
			type: 'success',
		});
		closeSignUpModal();
	}

	return (
		<Modal
			isOpen={isSignUpModalOpen}
			onClose={closeSignUpModal}
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
							<Balancer>
								Sign up for our newsletter to get the latest offers
							</Balancer>
						</h4>
						<form
							className='space-y-6 sm:space-y-4'
							onSubmit={handleSignUpFormSubmit}
						>
							<Input
								label='First name'
								name='firstName'
								required
							/>
							<Input
								label='Email'
								type='email'
								name='email'
								required
							/>
							<div className='flex flex-row space-x-3'>
								<Button
									onClick={closeSignUpModal}
									variant='outlined'
								>
									Not now
								</Button>
								<Button
									className='w-full'
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
