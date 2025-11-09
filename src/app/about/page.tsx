import type { Metadata } from 'next';

import { Container } from '@/components/layout/container';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解团队使命、价值观与产品愿景。',
};

const partners = [
  {
    name: 'Alpha Ventures',
    description: '产品加速器',
  },
  {
    name: 'Beta Studio',
    description: '品牌设计合作伙伴',
  },
  {
    name: 'Gamma Cloud',
    description: '云基础设施供应商',
  },
  {
    name: 'Delta Analytics',
    description: '数据洞察伙伴',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Container className="space-y-16 py-24">
        <div className="space-y-6 text-slate-700">
          <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">{siteConfig.name}</div>
          <h1 className="text-4xl font-bold text-slate-900">以内容驱动增长</h1>
          <p className="max-w-3xl text-lg leading-relaxed">
            我们相信优秀的内容体验是连接产品与用户的关键。团队成员来自知名 SaaS 公司，覆盖前端工程、品牌设计、内容营销等领域，
            致力于帮助成长型团队快速搭建可靠的官网与内容系统。
          </p>
        </div>

        <div className="grid gap-10 rounded-3xl bg-slate-50 p-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">我们的使命</h2>
            <p className="text-slate-600">
              通过高度可扩展的 Next.js 官网模板，降低技术门槛，让市场与增长团队能够自主掌控官网体验，并在多渠道推广中保持一致的品牌呈现。
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-48 w-full max-w-md items-center justify-center rounded-3xl border border-dashed border-blue-200 bg-white text-blue-500">
              品牌故事视觉占位
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">合作伙伴</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-base font-semibold text-blue-700">
                  {partner.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <div className="text-lg font-semibold text-slate-900">{partner.name}</div>
                <div className="text-sm text-slate-500">{partner.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
