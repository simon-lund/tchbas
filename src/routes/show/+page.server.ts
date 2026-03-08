import { ROAST_MESSAGES } from '$lib/constants';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => {
	const m = url.searchParams.get('m');
	let messageIndex = Math.floor(Math.random() * ROAST_MESSAGES.length);
	
	if (m !== null) {
		const idx = parseInt(m, 10);
		if (!isNaN(idx) && idx >= 0 && idx < ROAST_MESSAGES.length) {
			messageIndex = idx;
		}
	}

	return {
		messageIndex,
		message: ROAST_MESSAGES[messageIndex],
	};
};
