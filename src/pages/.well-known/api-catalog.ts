export const prerender = true;

const catalog = { linkset: [] };

export const GET = () =>
	new Response(JSON.stringify(catalog, null, 2), {
		headers: {
			'Content-Type': 'application/linkset+json; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
