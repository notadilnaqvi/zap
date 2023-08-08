import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get('secret');
	const path = request.nextUrl.searchParams.get('path');

	if (secret !== process.env.REVALIDATE_SECRET) {
		return NextResponse.json(
			{ message: 'Invalid `secret` search param' },
			{ status: 401 },
		);
	}

	if (!path) {
		return NextResponse.json(
			{ message: 'Missing `path` search param' },
			{ status: 400 },
		);
	}

	revalidatePath(path);

	return NextResponse.json({
		revalidated: true,
		revalidatePath: path,
		revalidatedAt: Date.now(),
	});
}
