import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { seoConfig } from '@/config/seo';

export function buildMetadata(overrides?: Metadata): Metadata {
  return {
    ...seoConfig.defaultMetadata,
    ...overrides,
    openGraph: {
      ...seoConfig.defaultMetadata.openGraph,
      ...overrides?.openGraph
    },
    twitter: {
      ...seoConfig.defaultMetadata.twitter,
      ...overrides?.twitter
    }
  } satisfies Metadata;
}

export function getCanonical(pathname: string) {
  const url = new URL(pathname, siteConfig.url);
  return url.toString();
}
