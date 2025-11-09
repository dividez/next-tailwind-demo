import fs from 'node:fs/promises';
import path from 'node:path';

const domain = process.env.SITE_URL ?? 'https://example.com';
const staticRoutes = ['/', '/blog', '/docs', '/pricing', '/about', '/contact'];

async function main() {
  const entries = staticRoutes
    .map((route) => `<url><loc>${domain}${route}</loc></url>`)
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
  const outDir = path.join(process.cwd(), 'public');
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'sitemap.xml'), xml);
  console.log('Generated sitemap at public/sitemap.xml');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
