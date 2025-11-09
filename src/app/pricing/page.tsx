import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { seoConfig } from '@/config/seo';

const plans = [
  {
    name: 'Starter',
    price: '￥2,999',
    description: '适合快速验证的初创团队，包含基础营销站点模块。',
    features: ['首页 + 博客 + 文档', 'MDX 内容工作流', '基础 SEO 配置']
  },
  {
    name: 'Growth',
    price: '￥6,999',
    description: '适合成长型公司，提供完整的营销页面与自动化部署流程。',
    features: ['所有 Starter 功能', '定制化组件库', 'CI/CD 自动化', '分析与监测集成']
  },
  {
    name: 'Enterprise',
    price: '联系我们',
    description: '适合大型企业与跨国团队，提供专属解决方案与 SLA。',
    features: ['多语言站点支持', 'Headless CMS 集成', '性能优化咨询', '专属成功经理']
  }
];

export const metadata: Metadata = {
  ...seoConfig.defaultMetadata,
  ...seoConfig.pages.pricing
};

export default function PricingPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">灵活定价，匹配你的增长阶段</h1>
        <p className="mt-4 text-lg text-gray-600">
          所有套餐均包含源代码、文档、部署指南与持续升级支持。
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">{plan.price}</p>
            <p className="mt-4 text-sm text-gray-600">{plan.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <a href="/contact" className="inline-flex w-full justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                开始合作
              </a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
