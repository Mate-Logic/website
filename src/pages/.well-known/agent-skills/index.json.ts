export const prerender = true;

const index = {
	$schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json',
	skills: [],
};

export const GET = () =>
	new Response(JSON.stringify(index, null, 2), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
