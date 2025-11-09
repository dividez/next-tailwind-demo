import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';

export function CallToAction() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-8 py-12 sm:px-12 sm:py-16">
          <div className="relative z-10 max-w-2xl space-y-4 text-white">
            <h2 className="text-3xl font-semibold sm:text-4xl">准备好发布下一代官网了吗？</h2>
            <p className="text-lg text-gray-300">
              我们已经为你准备好了完整的内容体系、SEO 策略和性能优化方案。开启免费模板，立刻交付第一版官网。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/pricing">查看方案</Link>
              </Button>
              <Button variant="ghost" asChild className="text-white hover:text-blue-100">
                <Link href="/about">了解团队</Link>
              </Button>
            </div>
          </div>
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-600/40 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}
