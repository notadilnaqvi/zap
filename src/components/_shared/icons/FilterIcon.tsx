interface Props {
	size?: Scalars['Int'];
}

export function FilterIcon({ size = 20 }: Props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'></polygon>
		</svg>
	);
}
