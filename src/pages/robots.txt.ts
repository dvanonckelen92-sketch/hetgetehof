import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * Wie niet gecrawld wordt, kan niet geciteerd worden. De AI-crawlers staan
 * hier bewust expliciet toegelaten.
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'DuckDuckBot',
];

export const GET: APIRoute = () => {
  const regels = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /voorstel',
    '',
    ...aiCrawlers.map((bot) => `User-agent: ${bot}`),
    'Allow: /',
    'Disallow: /voorstel',
    '',
    `Sitemap: ${site.url}/sitemap-index.xml`,
    `# Samenvatting voor taalmodellen: ${site.url}/llms.txt`,
    '',
  ].join('\n');
  return new Response(regels, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
