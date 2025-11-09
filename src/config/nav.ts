export const navConfig = {
  tagline: '面向增长团队的高性能官网模板，帮助你快速上线、持续迭代并获得更多线索。',
  mainNav: [
    { title: '博客', href: '/blog' },
    { title: '文档', href: '/docs' },
    { title: '定价', href: '/pricing' },
    { title: '关于我们', href: '/about' }
  ],
  footerNav: [
    {
      title: '产品',
      links: [
        { title: '首页', href: '/' },
        { title: '定价', href: '/pricing' },
        { title: '关于', href: '/about' }
      ]
    },
    {
      title: '资源',
      links: [
        { title: '博客', href: '/blog' },
        { title: '文档', href: '/docs' },
        { title: 'RSS', href: '/rss.xml' }
      ]
    },
    {
      title: '公司',
      links: [
        { title: '联系我们', href: '/contact' },
        { title: '合作伙伴', href: '/about#partners' },
        { title: '隐私政策', href: '/docs/privacy' }
      ]
    }
  ]
};

export type NavConfig = typeof navConfig;
