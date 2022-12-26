import type { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import React from 'react';

export type ImageBannerProps = SliceComponentProps<Content.ImageBannerSlice>;

function ImageBanner({ slice }: ImageBannerProps) {
	return <div>{slice.primary.alt_text}</div>;
}

export default ImageBanner;
