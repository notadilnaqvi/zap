import cn from 'classnames';

interface Props {
	size?: 'large' | 'small';
}

// TODO: This component worked fine for next@13.0.3 but starting failing the build
// in next@13.1.6. The error was:

// Error: This module cannot be imported from a Server Component module. It should only be used from a Client Component.
//     at Object.81916 (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/chunks/506.js:65:7)
//     at __webpack_require__ (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/webpack-runtime.js:25:43)
//     at Object.64915 (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/chunks/506.js:85809:1)
//     at __webpack_require__ (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/webpack-runtime.js:25:43)
//     at Object.66837 (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/chunks/506.js:86287:23)
//     at __webpack_require__ (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/webpack-runtime.js:25:43)
//     at Module.28791 (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/app/(home)/page.js:1202:13)
//     at Function.__webpack_require__ (/Users/adil.naqvi/code/temp/zap-frontend/.next/server/webpack-runtime.js:25:43)
//     at processTicksAndRejections (node:internal/process/task_queues:96:5)
//     at async collectGenerateParams (/Users/adil.naqvi/code/temp/zap-frontend/node_modules/next/dist/build/utils.js:714:17)

// > Build error occurred
// Error: Failed to collect page data for /
//     at /Users/adil.naqvi/code/temp/zap-frontend/node_modules/next/dist/build/utils.js:963:15
//     at processTicksAndRejections (node:internal/process/task_queues:96:5) {
//   type: 'Error'
// }
// error Command failed with exit code 1.

// After an hour of debugging, I found that the problem was with this component. Specifically, the `jsx`
// prop on the `style` tag. I removed it and the build worked fine but the UI for this component broke.
// Have to revisit this later.

// The following might help
// 	- https://stackoverflow.com/questions/74680263/styled-jsx-rendering-with-next-13
// 	- https://github.com/vercel/next.js/pull/43386

export function LoadingSpinner({ size = 'large' }: Props) {
	return (
		<div
			className={cn(
				'block rounded-full bg-gray-200',
				size === 'large' ? 'h-6 w-6' : 'h-4 w-4',
			)}
		></div>
	);
}
