import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types/content';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="space-y-3">
        <p className="text-sm font-medium text-blue-600">{formatDate(post.date)}</p>
        <h3 className="text-xl font-semibold text-gray-900">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-sm text-gray-600">{post.excerpt}</p>
      </div>
      <div className="mt-6">
        <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-blue-600 hover:text-blue-800">
          阅读更多 →
        </Link>
      </div>
    </article>
  );
}
