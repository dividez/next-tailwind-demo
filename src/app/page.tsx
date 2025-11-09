import type { Metadata } from 'next';
import Link from 'next/link';
import { Hero } from '@/components/marketing/hero';
import { Features } from '@/components/marketing/features';
import { Testimonials } from '@/components/marketing/testimonials';
import { CallToAction } from '@/components/marketing/cta';
import { Container } from '@/components/layout/container';
import { seoConfig } from '@/config/seo';
import { getAllBlogPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/blog/blog-card';

export const metadata: Metadata = {
  ...seoConfig.defaultMetadata,
  ...seoConfig.pages.home
};

export default async function HomePage() {
  const posts = await getAllBlogPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="space-y-24">
      <Hero />
      <Features />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">最新洞察</h2>
              <p className="mt-2 text-lg text-gray-600">掌握官网构建、内容营销与增长的最佳实践。</p>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-blue-600 hover:text-blue-800 md:inline-flex">
              查看全部 →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <Link href="/blog" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              查看全部文章 →
            </Link>
          </div>
        </Container>
      </section>
      <Testimonials />
      <CallToAction />
    </div>
  );
}
