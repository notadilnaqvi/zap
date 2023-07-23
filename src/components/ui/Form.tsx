'use client';

import { Slot } from '@radix-ui/react-slot';
import type { PropsWithChildren } from 'react';
import {
	Controller,
	FormProvider,
	useFormContext,
	type FieldPath,
	type FieldValues,
	type SubmitHandler,
	type UseFormReturn,
} from 'react-hook-form';

export const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
	props: PropsWithChildren<{ name: TName }>,
) => {
	const { name, children } = props;
	const { control } = useFormContext<TFieldValues>();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => {
				return (
					<Slot
						// FIX: `Slot` doesn't accept `error` prop and I can't figure out
						// how to get around it ¯\_(ツ)_/¯
						// @ts-expect-error
						error={fieldState.error?.message}
						{...field}
					>
						{children}
					</Slot>
				);
			}}
		/>
	);
};

export const Form = <TFieldValues extends FieldValues = FieldValues>(
	props: PropsWithChildren<{
		form: UseFormReturn<TFieldValues>;
		onSubmit: SubmitHandler<TFieldValues>;
		className?: string;
	}>,
) => {
	const { onSubmit, form, className, children } = props;
	return (
		<FormProvider {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={className}
			>
				{children}
			</form>
		</FormProvider>
	);
};
