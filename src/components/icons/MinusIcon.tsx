import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function MinusIcon(props: React.SVGProps<SVGSVGElement>) {
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
		</svg>
	);
}
