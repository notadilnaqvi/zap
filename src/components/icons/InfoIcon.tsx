import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<circle
				cx='12'
				cy='12'
				r='10'
			></circle>
			<line
				x1='12'
				y1='16'
				x2='12'
				y2='12'
			></line>
			<line
				x1='12'
				y1='8'
				x2='12.01'
				y2='8'
			></line>
		</svg>
	);
}
