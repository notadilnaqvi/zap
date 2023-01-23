interface Props {
	size?: number;
}

export function AwardIcon({ size = 20 }: Props) {
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
			<circle
				cx='12'
				cy='8'
				r='7'
			></circle>
			<polyline points='8.21 13.89 7 23 12 20 17 23 15.79 13.88'></polyline>
		</svg>
	);
}
