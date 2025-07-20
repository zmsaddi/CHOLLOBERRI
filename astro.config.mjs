import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cholloberri.eus',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'eu', 'fr', 'en', 'nl', 'de'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});

