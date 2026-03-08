import { ImageResponse } from '@vercel/og';
import { ROAST_MESSAGES } from '$lib/constants';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const m = url.searchParams.get('m');
	let message = ROAST_MESSAGES[Math.floor(Math.random() * ROAST_MESSAGES.length)];

	if (m !== null) {
		const idx = parseInt(m, 10);
		if (!isNaN(idx) && idx >= 0 && idx < ROAST_MESSAGES.length) {
			message = ROAST_MESSAGES[idx];
		}
	} else if (url.searchParams.has('message')) {
		message = url.searchParams.get('message')!;
	}

	const html = {
		type: 'div',
		props: {
			style: {
				height: '100%',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#0a0a0a', // Dark aesthetic matching site
				color: '#fafafa',
				padding: '40px 80px',
				fontFamily: 'Inter, sans-serif'
			},
			children: [
				{
					type: 'div',
					props: {
						style: {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							background: '#121212',
							border: '1px solid #333',
							borderRadius: '24px',
							padding: '60px 80px',
							width: '100%',
							height: '100%',
							boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
						},
						children: [
							{
								type: 'p',
								props: {
									style: {
										fontSize: '32px',
										fontWeight: 500,
										letterSpacing: '-0.02em',
										color: '#a1a1aa',
										marginBottom: '40px'
									},
									children: "This Could've Been a Screenshot"
								}
							},
							{
								type: 'h1',
								props: {
									style: {
										fontSize: '64px',
										fontWeight: 800,
										letterSpacing: '-0.02em',
										textAlign: 'center',
										fontStyle: 'italic',
										maxWidth: '900px',
										lineHeight: 1.1
									},
									children: `"${message}"`
								}
							}
						]
					}
				}
			]
		}
	};

	return new ImageResponse(html, {
		width: 1200,
		height: 630,
		headers: {
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
};
