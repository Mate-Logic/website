# 🧉 MateLogic Interactive

> **Desarrollo de Software con toque humano, desde Chivilcoy al mundo.**

[![Astro](https://img.shields.io/badge/Astro-v7.1.0-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PNPM](https://img.shields.io/badge/pnpm-9.0+-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D22.12.0-68A063?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

Sitio web oficial de **MateLogic Interactive** ([mate-logic.tech](https://mate-logic.tech/)), empresa de desarrollo de software integral basada en Chivilcoy, Buenos Aires, Argentina. Especialistas en aplicaciones web, móviles (iOS/Android) y de escritorio.

---

## 📌 Tabla de Contenidos

- [🚀 Características](#-características)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [💻 Requisitos Previos](#-requisitos-previos)
- [⚙️ Instalación y Uso](#️-instalación-y-uso)
- [🎨 Sistema de Diseño y Estilos](#-sistema-de-diseño-y-estilos)
- [🌐 Sitio Web Oficial](#-sitio-web-oficial)
- [📄 Licencia](#-licencia)

---

## 🚀 Características

- **Diseño Moderno & Responsivo**: Interfaz cuidada con estética premium, tipografía Montserrat y paleta de colores nativa de la marca.
- **Rendimiento Extremo**: Construido con **Astro 7**, logrando tiempos de carga ultrarrápidos y optimización SEO integral.
- **Sitemap & SEO**: Generación automática de mapa del sitio (`@astrojs/sitemap`) y metadatos Open Graph/Twitter Cards preconfigurados.
- **Arquitectura de Componentes**: Separación limpia en componentes interactivos y modulares (`Hero`, `ServicesGrid`, `Philosophy`, `LocalIdentity`, `Software`, `Team`, `Solutions`).

---

## 🛠️ Stack Tecnológico

- **Framework principal**: [Astro 7.1](https://astro.build) (SSR/SSG rápido y eficiente).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com) integrado mediante `@tailwindcss/vite`.
- **Tipografía**: Google Font [Montserrat](https://fonts.google.com/specimen/Montserrat).
- **Herramientas de construcción**: Vite + PNPM.
- **Procesamiento de imágenes**: `sharp`.

---

## 📂 Estructura del Proyecto

```text
mate-logic/
├── public/                 # Archivos estáticos (favicons, imágenes OG, sitemap)
├── src/
│   ├── components/        # Componentes Astro reutilizables
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── LocalIdentity.astro
│   │   ├── Philosophy.astro
│   │   ├── ServicesGrid.astro
│   │   ├── Software.astro
│   │   ├── Solutions.astro
│   │   └── Team.astro
│   ├── layouts/           # Plantillas base (Layout.astro)
│   ├── pages/             # Rutas y páginas del sitio (index.astro)
│   └── styles/            # Estilos globales y tokens Tailwind v4 (@theme)
├── astro.config.mjs       # Configuración de Astro, Vite y Plugins
├── package.json           # Dependencias y scripts
└── tsconfig.json          # Configuración de TypeScript
```

---

## 💻 Requisitos Previos

- **Node.js**: `>= 22.12.0`
- **Gestor de paquetes**: `pnpm` (recomendado)

---

## ⚙️ Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Bernard2806/mate-logic.git
   cd mate-logic
   ```

2. **Instalar dependencias**:
   ```bash
   pnpm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   pnpm dev
   ```
   > El sitio estará disponible en `http://localhost:4321`.

   *Nota de desarrollo*: Para ejecutar el servidor en segundo plano:
   ```bash
   astro dev --background
   ```

4. **Compilar para producción**:
   ```bash
   pnpm build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `./dist/`.

5. **Previsualizar la build de producción**:
   ```bash
   pnpm preview
   ```

---

## 🎨 Sistema de Diseño y Estilos

El proyecto utiliza **Tailwind CSS v4** con un sistema de temas personalizado definido en `src/styles/global.css`:

| Token | Color | Hexadecimal | Usos |
| :--- | :--- | :--- | :--- |
| `--color-brand-blue` | Azul Marca | `#033748` | Textos primarios, encabezados, fondos oscuros |
| `--color-brand-teal` | Verde Azulado | `#2f93a5` | Acentos, efectos hover, gradientes |
| `--color-brand-green` | Verde Mate | `#859f51` | Detalles activos, indicadores, badges |
| `--color-brand-brown` | Marrón Cálido | `#825d40` | Contrastes secundarios |
| `--color-brand-cream` | Crema | `#f6efe4` | Fondo general de la aplicación |

---

## 🌐 Sitio Web Oficial

Visita el sitio publicado en: **[mate-logic.tech](https://mate-logic.tech/)**

---

## 📄 Licencia

Desarrollado con ❤️ por **MateLogic Interactive**. Todos los derechos reservados.
