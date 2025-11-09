import type { Metadata } from 'next';
import { siteConfig } from './site';

const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vercel',
    site: '@vercel'
  }
};

export const seoConfig = {
  defaultMetadata,
  pages: {
    home: {
      title: '高性能营销官网模板',
      description: '使用 Next.js + Tailwind 打造极速官网，专为 SEO 与内容团队打造。'
    },
    blog: {
      title: '官方博客',
      description: '分享网站优化、增长营销、内容运营的实战经验。'
    },
    docs: {
      title: '产品文档',
      description: '从部署、内容管理到 SEO 配置的全流程指南。'
    },
    pricing: {
      title: '定价与套餐',
      description: '根据团队规模与需求灵活选择套餐。'
    },
    about: {
      title: '关于我们',
      description: '了解背后的团队、价值观和成功案例。'
    },
    contact: {
      title: '联系我们',
      description: '提交需求、预约演示，或加入合作计划。'
    }
  }
};

export type SeoConfig = typeof seoConfig;
