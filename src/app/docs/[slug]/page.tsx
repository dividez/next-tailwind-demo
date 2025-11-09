import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/container';
import { getDoc, getAllDocs, buildPageMetadata } from '@/lib/mdx';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doc = await getDoc(params.slug).catch(() => null);
  if (!doc) {
    return {};
  }
  const metadata = buildPageMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
    slug: `docs/${params.slug}`
  });
  return {
    ...metadata,
    alternates: {
      canonical: `${siteConfig.url}/docs/${params.slug}`
    }
  } satisfies Metadata;
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const result = await getDoc(params.slug).catch(() => null);

  if (!result) {
    notFound();
  }

  return (
    <Container className="prose prose-lg py-16 sm:py-24">
      <h1>{result.frontmatter.title}</h1>
      <p className="text-lg text-gray-600">{result.frontmatter.description}</p>
      <result.Component />
    </Container>
  );
}
