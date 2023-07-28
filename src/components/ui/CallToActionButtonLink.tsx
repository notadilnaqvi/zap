'use client';

import Link from 'next/link';
import React from 'react';

import { cx } from '~/utils';

export const CallToActionButtonLink = (
	props: React.ComponentProps<typeof Link>,
) => {
	const { children, className, ...rest } = props;

	const isExternal = props.href.toString().startsWith('http');

	return (
		<Link
			className={cx(
				'rounded bg-gradient-to-bl from-primary-light via-primary to-primary-dark px-6 py-3 text-base font-medium tracking-wide text-white',
				className,
			)}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noopener noreferrer' : undefined}
			{...rest}
		>
			{children}
		</Link>
	);
};
