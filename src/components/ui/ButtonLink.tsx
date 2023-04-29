'use client';

import Link from 'next/link';
import React from 'react';

import {
	baseClassNames,
	ButtonColor,
	ButtonSize,
	ButtonVariant,
	sizeClassNames,
	variantAndColorClassNames,
} from '~/components/ui/Button';
import { cx } from '~/utils';

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
	size?: ButtonSize;
	color?: ButtonColor;
	variant?: ButtonVariant;
}

export const ButtonLink = (props: ButtonLinkProps) => {
	const {
		size = 'medium',
		color = 'primary',
		variant = 'filled',
		children,
		className,
		...rest
	} = props;

	const isExternal = props.href.toString().startsWith('http');

	return (
		<Link
			className={cx(
				baseClassNames,
				sizeClassNames[size],
				variantAndColorClassNames[variant][color],
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
