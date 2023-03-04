import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<circle
				cx='9'
				cy='21'
				r='1'
			></circle>
			<circle
				cx='20'
				cy='21'
				r='1'
			></circle>
			<path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
		</svg>
	);
}
