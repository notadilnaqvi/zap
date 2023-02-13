interface Props {
	size?: number;
	strokeWidth?: number;
}

export function ArrowRightIcon({ size = 20, strokeWidth = 1.5 }: Props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth={strokeWidth}
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line
				x1='5'
				y1='12'
				x2='19'
				y2='12'
			></line>
			<polyline points='12 5 19 12 12 19'></polyline>
		</svg>
	);
}
