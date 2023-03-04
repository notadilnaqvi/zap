import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function HelpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
			<path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'></path>
			<line
				x1='12'
				y1='17'
				x2='12.01'
				y2='17'
			></line>
		</svg>
	);
}
