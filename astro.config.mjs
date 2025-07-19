import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'eu', 'fr', 'en', 'nl', 'de'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});

