import { type ImageLoaderProps } from 'next/image';

export function commercetoolsImageLoader({ src, width }: ImageLoaderProps) {
	// https://docs.commercetools.com/api/projects/products#images
	if (width <= 90) return src.replace('_zoom', '_thumbnail');
	if (width <= 165) return src.replace('_zoom', '_small');
	if (width <= 270) return src.replace('_zoom', '_medium');
	if (width <= 560) return src.replace('_zoom', '_large');
	return src;
}
