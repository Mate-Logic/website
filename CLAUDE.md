## Reglas del proyecto

Estas reglas son obligatorias para cualquier agente que trabaje en este repositorio.

### Gestor de paquetes: siempre `pnpm`

- Usar siempre `pnpm`. Nunca `npm` (ni `npx`, ni `yarn`).
- Instalar dependencias: `pnpm add <paquete>` / `pnpm add -D <paquete>`.
- Ejecutar binarios: `pnpm astro ...` o `pnpm exec ...` (en lugar de `npx`).
- No crear ni commitear `package-lock.json` ni `yarn.lock`: el único lockfile es `pnpm-lock.yaml`.

### Commits: Conventional Commits en español

- Usar obligatoriamente el formato **Conventional Commits** (`<tipo>(<alcance opcional>): <descripción>`).
- La descripción y el cuerpo del commit deben estar siempre en **español** (el tipo se mantiene en el estándar: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`).
- Ejemplos: `feat(hero): añadir botón de contacto`, `fix(header): corregir alineación en móvil`, `docs: actualizar reglas agénticas`.

### Documentación de librerías: uso obligatorio de Context7

- Usar siempre **Context7** (https://context7.com/ / MCP `context7`) para consultar documentación actualizada antes de trabajar con cualquier librería, framework, SDK, API o herramienta CLI (como Astro, Tailwind CSS, etc.), incluso si se cree conocer la respuesta.
- Resolver primero el identificador con `resolve-library-id` y luego consultar la documentación específica con `query-docs` antes de implementar o modificar código dependiente de librerías.
- Preferir siempre Context7 frente a búsquedas web genéricas o conocimiento previo del modelo.

## Development

When starting the dev server, use background mode:

```
pnpm astro dev --background
```

Manage the background server with `pnpm astro dev stop`, `pnpm astro dev status`, and `pnpm astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
