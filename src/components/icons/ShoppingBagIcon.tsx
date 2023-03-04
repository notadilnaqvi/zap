import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z'></path>
			<line
				x1='3'
				y1='6'
				x2='21'
				y2='6'
			></line>
			<path d='M16 10a4 4 0 0 1-8 0'></path>
		</svg>
	);
}
