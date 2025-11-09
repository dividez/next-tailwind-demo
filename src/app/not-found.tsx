import Link from 'next/link';
import { Container } from '@/components/layout/container';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold text-blue-600">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">页面不存在</h1>
      <p className="mt-6 text-base text-gray-600">该页面可能已经被移动或删除。请返回首页继续浏览。</p>
      <div className="mt-10">
        <Link href="/" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
          返回首页
        </Link>
      </div>
    </Container>
  );
}
