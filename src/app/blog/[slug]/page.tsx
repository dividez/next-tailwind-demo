import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/container';
import { PostHeader } from '@/components/blog/post-header';
import { getAllBlogPosts, getBlogPost, buildPageMetadata } from '@/lib/mdx';
import { siteConfig } from '@/config/site';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug).catch(() => null);
  if (!post) {
    return {};
  }

  const metadata = buildPageMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    date: post.frontmatter.date,
    slug: `blog/${params.slug}`
  });

  return {
    ...metadata,
    alternates: {
      canonical: `${siteConfig.url}/blog/${params.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const result = await getBlogPost(params.slug).catch(() => null);

  if (!result) {
    notFound();
  }

  return (
    <Container className="prose prose-lg py-16 sm:py-24">
      <PostHeader
        post={{
          slug: params.slug,
          title: result.frontmatter.title,
          excerpt: result.frontmatter.excerpt,
          date: result.frontmatter.date,
          author: result.frontmatter.author
        }}
      />
      <result.Component />
    </Container>
  );
}
