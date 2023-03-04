import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
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
