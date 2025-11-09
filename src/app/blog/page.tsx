import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { BlogCard } from '@/components/blog/blog-card';
import { getAllBlogPosts } from '@/lib/mdx';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  ...seoConfig.defaultMetadata,
  ...seoConfig.pages.blog
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <Container className="py-16 sm:py-24">
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-4xl font-bold text-gray-900">官方博客</h1>
        <p className="text-lg text-gray-600">洞察官网建设、SEO 和内容运营的最新趋势。</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">
        <Link href="/rss.xml" className="font-semibold text-blue-600 hover:text-blue-800">
          订阅 RSS →
        </Link>
      </div>
    </Container>
  );
}
