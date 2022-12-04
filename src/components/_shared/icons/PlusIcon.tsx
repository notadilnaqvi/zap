interface Props {
	size?: Scalars['Int'];
}

export function PlusIcon({ size = 20 }: Props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='3'
		>
			<line
				x1='12'
				y1='5'
				x2='12'
				y2='19'
			></line>
			<line
				x1='5'
				y1='12'
				x2='19'
				y2='12'
			></line>
		</svg>
	);
}
