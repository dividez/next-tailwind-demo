import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';
import type { BlogFrontmatter, BlogPost, DocFrontmatter, DocPage } from '@/types/content';
import { siteConfig } from '@/config/site';

const rootDir = path.join(process.cwd(), 'src', 'content');

async function readMDX(dir: string) {
  const directory = path.join(rootDir, dir);
  const files = await fs.readdir(directory);
  return Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, '');
        const filePath = path.join(directory, filename);
        const source = await fs.readFile(filePath, 'utf-8');
        const { content, data } = matter(source);
        return { slug, content, frontMatter: data, filePath };
      })
  );
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const entries = await readMDX('blog');
  return entries
    .map((entry) => ({
      slug: entry.slug,
      title: entry.frontMatter.title as string,
      excerpt: entry.frontMatter.excerpt as string,
      date: entry.frontMatter.date as string,
      author: entry.frontMatter.author as string,
      tags: (entry.frontMatter.tags as string[]) ?? []
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getAllDocs(): Promise<DocPage[]> {
  const entries = await readMDX('docs');
  return entries
    .map((entry) => ({
      slug: entry.slug,
      title: entry.frontMatter.title as string,
      description: entry.frontMatter.description as string,
      order: entry.frontMatter.order as number | undefined
    }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getBlogPost(slug: string) {
  const file = path.join(rootDir, 'blog', `${slug}.mdx`);
  const source = await fs.readFile(file, 'utf-8');
  return compileMDX<BlogFrontmatter>({
    source,
    options: {
      parseFrontmatter: true
    }
  });
}

export async function getDoc(slug: string) {
  const file = path.join(rootDir, 'docs', `${slug}.mdx`);
  const source = await fs.readFile(file, 'utf-8');
  return compileMDX<DocFrontmatter>({
    source,
    options: {
      parseFrontmatter: true
    }
  });
}

export function buildPageMetadata(data: { title: string; description: string; date?: string; slug: string }): Metadata {
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      publishedTime: data.date,
      url: `${siteConfig.url}/${data.slug}`
    }
  } satisfies Metadata;
}
