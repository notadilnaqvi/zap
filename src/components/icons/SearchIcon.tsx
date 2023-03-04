import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<circle
				cx='11'
				cy='11'
				r='8'
			></circle>
			<line
				x1='21'
				y1='21'
				x2='16.65'
				y2='16.65'
			></line>
		</svg>
	);
}
