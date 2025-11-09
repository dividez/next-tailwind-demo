import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <Container className="relative z-10 flex flex-col items-center gap-10 py-16 text-center sm:py-24">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">极速上线 · SEO 优先</span>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          为产品打造一站式高性能官网
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">
          基于 Next.js 与 Tailwind CSS 的现代营销站点模板，内置内容层、MDX、SEO 工具，帮助团队快速发布高质量的产品官网。
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="px-6 py-3 text-base">
            <Link href="/docs/getting-started">立即开始</Link>
          </Button>
          <Button variant="secondary" asChild className="px-6 py-3 text-base">
            <Link href="/contact">预约演示</Link>
          </Button>
        </div>
        <div className="flex w-full max-w-3xl flex-col items-center justify-center rounded-3xl border border-blue-100 bg-white/80 p-10 shadow-lg shadow-blue-100/50">
          <div className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            产品演示占位图
          </div>
          <div className="h-48 w-full rounded-2xl bg-gradient-to-br from-blue-200 via-blue-100 to-white" />
        </div>
      </Container>
      <div className="absolute inset-x-0 top-1/2 h-96 -translate-y-1/2 bg-gradient-to-b from-transparent via-blue-100/40 to-transparent" />
    </section>
  );
}
