'use client';

import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

type TimeAgoProps = {
	/**
	 * Page generation time in ISO format
	 */
	generatedAt: string;
};

export function PageGenerationTimeBanner(props: TimeAgoProps) {
	const { generatedAt } = props;

	const [timeAgo, setTimeAgo] = useState('');

	const pageGenerationDateTime = DateTime.fromISO(generatedAt);
	const formattedDateTime = pageGenerationDateTime.toFormat(
		'dd/LLL/yyyy hh:mm:ss a',
	);

	useEffect(() => {
		setTimeAgo('(' + pageGenerationDateTime.toRelative() + ')');
	}, []);

	return (
		<div className='w-full rounded-sm p-3 bg-gray-100 font-mono text-sm'>
			This page was generated at {formattedDateTime} {timeAgo}
		</div>
	);
}
