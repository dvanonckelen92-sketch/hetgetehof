// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hetgetehof.be',
  trailingSlash: 'ignore',
  // /kamers.html in plaats van /kamers/index.html: de URL zonder slash is ook de canonical.
  build: { format: 'file' },
  integrations: [
    sitemap({
      // Het voorstel is een werkpagina voor Greet en Jo, geen deel van de site.
      filter: (page) => !/\/(voorstel|bedankt)/.test(page),
    }),
  ],
  image: { responsiveStyles: true, layout: 'constrained' },
  redirects: {
    // Oude WordPress-adressen, zodat bestaande links en Google-resultaten blijven werken.
    '/kamers-en-omgeving': '/kamers',
    '/kamers-en-omgeving/getehof-slaapkamer': '/kamers',
    '/kamers-en-omgeving/getehof-keuken': '/kamers',
    '/kamers-en-omgeving/getehof-tv': '/kamers',
    '/kamers-en-omgeving/getehof-voorkant': '/tuin-en-terras',
    '/kamers-en-omgeving/getehof-rust': '/tuin-en-terras',
    '/geteterras': '/tuin-en-terras',
    '/de-omgeving': '/omgeving',
    '/activiteiten': '/omgeving',
    '/prijs': '/boeken',
    '/contact': '/boeken',
  },
});
