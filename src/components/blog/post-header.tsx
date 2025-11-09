import type { BlogPost } from '@/types/content';
import { formatDate } from '@/lib/utils';

export function PostHeader({ post }: { post: BlogPost }) {
  return (
    <header className="mb-10 space-y-4">
      <p className="text-sm font-semibold text-blue-600">{formatDate(post.date)}</p>
      <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
      <p className="text-lg text-gray-600">{post.excerpt}</p>
    </header>
  );
}
