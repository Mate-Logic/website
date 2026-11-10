export const prerender = true;

const catalog = {
	specVersion: '1.0',
	host: { displayName: 'MateLogic', identifier: 'did:web:mate-logic.tech' },
	entries: [
		{
			identifier: 'urn:air:mate-logic.tech:website:homepage',
			displayName: 'MateLogic website',
			type: 'text/html',
			url: 'https://mate-logic.tech/',
			representativeQueries: [
				'What software development services does MateLogic offer?',
				'Where is MateLogic based?',
				'What web, mobile, and desktop applications does MateLogic build?',
			],
		},
		{
			identifier: 'urn:air:mate-logic.tech:documentation:llms',
			displayName: 'MateLogic agent-readable site summary',
			type: 'text/plain',
			url: 'https://mate-logic.tech/llms.txt',
			representativeQueries: [
				'Give me an agent-readable summary of MateLogic.',
				'Find the key facts about MateLogic and its services.',
			],
		},
	],
};

export const GET = () =>
	new Response(JSON.stringify(catalog, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600',
		},
	});
