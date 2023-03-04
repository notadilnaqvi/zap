import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function XIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<line
				x1='18'
				y1='6'
				x2='6'
				y2='18'
			></line>
			<line
				x1='6'
				y1='6'
				x2='18'
				y2='18'
			></line>
		</svg>
	);
}
