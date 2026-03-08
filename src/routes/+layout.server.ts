import { detectOS } from '$lib/constants';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ request }) => {
	const userAgent = request.headers.get('user-agent') || '';
	const os = detectOS(userAgent);

	return {
		os
	};
};
