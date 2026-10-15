// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mate-logic.tech/',
  integrations: [sitemap({
    lastmod: new Date(),
  })],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-bricolage',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
      options: {
        experimental: {
          variableAxis: {
            opsz: [['12', '96']],
            wdth: [['75', '100']],
          },
        },
      },
    },
    {
      provider: fontProviders.google(),
      name: 'Atkinson Hyperlegible Next',
      cssVariable: '--font-atkinson',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
