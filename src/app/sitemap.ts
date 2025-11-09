import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/blog', '/docs', '/pricing', '/about', '/contact'];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString()
  }));
}
