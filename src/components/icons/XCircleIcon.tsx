import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
				x1='15'
				y1='9'
				x2='9'
				y2='15'
			></line>
			<line
				x1='9'
				y1='9'
				x2='15'
				y2='15'
			></line>
		</svg>
	);
}
