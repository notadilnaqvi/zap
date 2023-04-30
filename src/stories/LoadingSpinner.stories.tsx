import type { Meta, StoryFn } from '@storybook/react';

import { LoadingSpinner } from '~/components/common/LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
	title: 'UI/LoadingSpinner',
	argTypes: {},
	component: LoadingSpinner,
	tags: ['autodocs'],
};

export default meta;

export const DefaultCheckbox: StoryFn<typeof LoadingSpinner> = args => {
	return <LoadingSpinner {...args} />;
};

export const SmallLoadingSpinner: StoryFn<typeof LoadingSpinner> = args => {
	return (
		<LoadingSpinner
			size='small'
			{...args}
		/>
	);
};
