import { DEFAULT_ICON_PROPS } from '~/utils/constants';

export function Trash2Icon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...DEFAULT_ICON_PROPS}
			{...props}
		>
			<polyline points='3 6 5 6 21 6'></polyline>
			<path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
			<line
				x1='10'
				y1='11'
				x2='10'
				y2='17'
			></line>
			<line
				x1='14'
				y1='11'
				x2='14'
				y2='17'
			></line>
		</svg>
	);
}
