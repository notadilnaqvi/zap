import { SliceZone } from '@prismicio/react';
import { SliceSimulator } from '@prismicio/slice-simulator-react';

import { components } from '~/components/slices';

const SliceSimulatorPage = () => {
	return (
		<SliceSimulator
			sliceZone={({ slices }) => (
				<SliceZone
					slices={slices}
					components={components}
				/>
			)}
		/>
	);
};

export default SliceSimulatorPage;
