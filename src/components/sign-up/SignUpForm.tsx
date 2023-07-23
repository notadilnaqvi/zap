'use client';

import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Checkbox, Form, FormField, Input } from '~/components/ui';
import { useUi } from '~/hooks';
import { useSignUp } from '~/lib/commercetools/hooks';
import { extractApolloErrorCode } from '~/utils';

const signUpFormSchema = z
	.object({
		firstName: z
			.string({
				required_error: 'Please enter your first name',
			})
			.min(2, 'Please enter at least 2 characters'),
		lastName: z
			.string({
				required_error: 'Please enter your last name',
			})
			.min(2, 'Please enter at least 2 characters'),
		email: z
			.string({
				required_error: 'Please enter your email',
			})
			.email('Please enter a valid email'),
		password: z
			.string({
				required_error: 'Please enter your password',
			})
			.min(8, 'Your password must have at least 8 characters'),
		confirmPassword: z.string({
			required_error: 'Please confirm your password',
		}),
		signUpToNewsletter: z.boolean().optional(),
	})
	.refine(form => form.password === form.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

type SignUpForm = z.infer<typeof signUpFormSchema>;

export function SignUpForm() {
	const router = useRouter();
	const [signup] = useSignUp();
	const showToast = useUi(state => state.showToast);
	const [isSignUpLoading, setIsSignUpLoading] = useState(false);
	const signUpForm = useForm<SignUpForm>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			signUpToNewsletter: true,
		},
	});

	async function onSubmit(data: SignUpForm) {
		const { email, password, firstName, lastName } = data;
		setIsSignUpLoading(true);
		try {
			await signup({
				firstName,
				lastName,
				email,
				password,
			});
			showToast({ message: 'Account created successfully', type: 'success' });
			signUpForm.reset();
			router.push('/');
		} catch (error) {
			let message = 'Account creation failed. Please try again';
			if (error instanceof ApolloError) {
				if (extractApolloErrorCode(error) === 'DuplicateField') {
					message = 'Account already exists. Try logging in';
				}
			}
			showToast({
				message,
				type: 'error',
			});
			setIsSignUpLoading(false);
		}
	}

	return (
		<Form
			className='flex flex-col space-y-4 rounded border p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]'
			onSubmit={onSubmit}
			form={signUpForm}
		>
			<h1 className='text-2xl font-semibold'>Create an account</h1>
			<div className='grid grid-cols-2 gap-x-4 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-4'>
				<FormField name='firstName'>
					<Input label='First name' />
				</FormField>
				<FormField name='lastName'>
					<Input label='Last name' />
				</FormField>
			</div>
			<FormField name='email'>
				<Input label='Email' />
			</FormField>
			<FormField name='password'>
				<Input
					label='Password'
					type='password'
				/>
			</FormField>
			<FormField name='confirmPassword'>
				<Input
					label='Confirm password'
					type='password'
				/>
			</FormField>
			<FormField name='signUpToNewsletter'>
				<Checkbox label='Sign up to our newsletter' />
			</FormField>
			<Button
				type='submit'
				className='w-full'
				loading={isSignUpLoading}
				disabled={isSignUpLoading}
			>
				Create account
			</Button>
		</Form>
	);
}
