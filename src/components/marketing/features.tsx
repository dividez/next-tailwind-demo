import { Container } from '@/components/layout/container';

const features = [
  {
    title: '极致 SEO',
    description: '使用 Next.js App Router + 静态导出，配合结构化数据，确保搜索引擎友好。'
  },
  {
    title: '内容友好',
    description: 'MDX 驱动的内容层，可接入 Headless CMS，帮助市场团队自主发布。'
  },
  {
    title: '性能至上',
    description: 'Tailwind CSS + 组件化设计，配合 CDN 分发，实现毫秒级的交互体验。'
  },
  {
    title: '轻量 API',
    description: '仅保留必要的 API（如订阅、表单），与主产品应用完全解耦。'
  }
];

export function Features() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">核心特性</h2>
          <p className="mt-4 text-lg text-gray-600">
            现代化的营销站点技术栈，确保团队在品牌曝光、内容生产和性能体验上全面领先。
          </p>
        </div>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <dt className="text-xl font-semibold text-gray-900">{feature.title}</dt>
              <dd className="mt-3 text-base text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
