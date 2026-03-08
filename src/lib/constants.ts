/**
 * Witty ironic messages - optimistic but clearly sarcastic about screen photos
 */
export const ROAST_MESSAGES: string[] = [
	'Your ancestors took cave paintings too.',
	"This is giving 'printed an email to read it.'",
	'Your phone judged you. So did we.',
	'Somewhere a UX designer is crying.',
	'Absolute pioneer of doing things the wrong way.',
	'The screenshot button has feelings too.',
	'You and your ancestors share a workflow.',
	'A screenshot takes 0.3 seconds. This took courage.',
	'You held up a device to photograph a device. Reflect.',
	'This is what happens when you skip the tutorial.',
	'Breaking: local person defeats purpose of smartphone.',
	'Did the screenshot button ghost you? Talk about it.',
	'Some people invent fire. You photographed your monitor.',
	'Screenshot button unemployed.',
	'Your keyboard is judging you.',
	'You ignored the correct solution confidently.',
	'A masterclass in unnecessary effort.',
	'A crime against usability.',
	'The artisanal screenshot.',
	'Breaking news: screenshot button unused again.',
	'You climbed a ladder to step over a chair.',
	'An unnecessary amount of steps achieved.',
	'The screenshot button is filing HR paperwork.',
	'You fought convenience and won.',
	'Your workflow frightens engineers.',
	'You took the scenic route to a bad photo.',
	'Your monitor feels exposed.',
	'You made the obvious impossible.'
];

/**
 * OS-specific screenshot instructions
 */
export interface OSInstruction {
	id: string;
	name: string;
	steps: { keys: string[]; description: string }[];
}

export const OS_INSTRUCTIONS: OSInstruction[] = [
	{
		id: 'windows',
		name: 'Windows',
		steps: [
			{ keys: ['Win', 'Shift', 'S'], description: 'Open selector to edit, save or copy' },
			{ keys: ['PrtScn'], description: 'Capture entire screen to clipboard' },
			{ keys: ['Win', 'PrtScn'], description: 'Capture and save to Pictures > Screenshots' },
			{ keys: ['Alt', 'PrtScn'], description: 'Copy active window to clipboard' }
		]
	},
	{
		id: 'macos',
		name: 'macOS',
		steps: [
			{ keys: ['⌘', 'Shift', '4'], description: 'Select an area to screenshot' },
			{ keys: ['⌘', 'Shift', '3'], description: 'Capture the entire screen' },
			{ keys: ['⌘', 'Shift', '5'], description: 'Open advanced screenshot menu' }
		]
	},
	{
		id: 'linux',
		name: 'Linux',
		steps: [
			{ keys: ['PrtScn'], description: 'Open the interactive screenshot tool (GNOME/Ubuntu)' },
			{ keys: ['Alt', 'PrtScn'], description: 'Capture active window' },
			{ keys: ['Shift', 'PrtScn'], description: 'Select an area (Older distros)' }
		]
	},
	{
		id: 'browser',
		name: 'Browser',
		steps: [
			{ keys: ['Right-click'], description: "Firefox / Edge: 'Take Screenshot' in context menu" },
			{ keys: ['Ctrl', 'Shift', 'S'], description: 'Firefox screenshot shortcut (Web only)' },
			{
				keys: ['F12', 'Ctrl', 'Shift', 'P'],
				description: "Chrome / Arc: Type 'Screenshot' in Command Menu"
			}
		]
	}
];

/**
 * Detect user's OS from user agent
 */
export function detectOS(): string {
	if (typeof window === 'undefined') return 'windows';
	const ua = window.navigator.userAgent.toLowerCase();
	if (ua.includes('win')) return 'windows';
	if (ua.includes('mac')) return 'macos';
	if (ua.includes('linux')) return 'linux';
	return 'browser';
}
