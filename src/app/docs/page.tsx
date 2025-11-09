import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { seoConfig } from '@/config/seo';
import { getAllDocs } from '@/lib/mdx';

export const metadata: Metadata = {
  ...seoConfig.defaultMetadata,
  ...seoConfig.pages.docs
};

export default async function DocsIndexPage() {
  const docs = await getAllDocs();
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900">产品文档</h1>
        <p className="mt-4 text-lg text-gray-600">快速掌握项目结构、内容工作流与部署方式。</p>
      </div>
      <ul className="mt-10 space-y-4">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link href={`/docs/${doc.slug}`} className="text-lg font-semibold text-blue-600 hover:text-blue-800">
              {doc.title} →
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
