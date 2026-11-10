export const prerender = true;

const markdown = `# MateLogic

> Desarrollo de software con toque humano, desde Chivilcoy al mundo.

MateLogic es un estudio de desarrollo de software basado en Chivilcoy, Buenos Aires, Argentina.

## Servicios

- Aplicaciones web: sistemas en la nube, portales empresariales, tiendas online y sitios institucionales.
- Aplicaciones móviles para Android e iOS: apps nativas o híbridas, herramientas de campo, reservas y turnos.
- Aplicaciones de escritorio para Windows, macOS y Linux: facturación, stock y administración interna.

## Tecnologías

C#, .NET, Blazor, PHP, Java, React, Astro, TypeScript, Python, SQL Server, MySQL, Azure y Linux.

## Más información

- Sitio web: https://mate-logic.tech/
- Resumen para agentes: https://mate-logic.tech/llms.txt
- Catálogo ARD: https://mate-logic.tech/.well-known/ai-catalog.json
- Contacto: contacto@mate-logic.tech
`;

export const GET = () =>
	new Response(markdown, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
