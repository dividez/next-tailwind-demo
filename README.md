# Next Tailwind Marketing Site

一个基于 Next.js 14 与 Tailwind CSS 打造的营销官网模板，专注于极致 SEO、性能表现与内容友好度。项目采用 App Router、MDX 内容层与模块化组件结构，帮助团队快速上线高质量的品牌官网、博客与文档站点。

## ✨ 特性

- **SEO 优先**：静态化输出、结构化数据、内置 sitemap/robots。
- **性能卓越**：Tailwind 设计系统 + 可静态导出的 Next.js App Router。
- **内容友好**：MDX 驱动的 Blog 与 Docs，可扩展对接 Headless CMS。
- **解耦架构**：轻量 API（订阅、表单），与主应用彻底分离。
- **工程保障**：ESLint、Prettier、Vitest、GitHub Actions CI 全面护航。

## 📁 目录结构

```
your-org-web/
├── .github/workflows/ci.yml      # Lint + Test + Build CI
├── public/                       # 静态资源与 SEO 相关文件
├── scripts/                      # Sitemap、RSS、ENV 校验脚本
├── src/
│   ├── app/                      # App Router 页面、API、错误处理
│   ├── components/               # UI、布局、营销、博客组件
│   ├── config/                   # 站点信息、导航、SEO 配置
│   ├── content/                  # MDX 内容层（Blog / Docs / Pages）
│   ├── hooks/                    # 前端交互 Hook（滚动、主题等）
│   ├── lib/                      # MDX 解析、SEO、工具函数
│   ├── styles/                   # 全局与排版样式
│   ├── tests/                    # Vitest + RTL 单元测试
│   └── types/                    # 类型定义
└── ...                           # 配置文件（Tailwind、Next、TS 等）
```

## 🚀 快速开始

> 💡 首次使用前可以通过 `corepack enable` 启用 pnpm。 

1. 安装依赖

   ```bash
   pnpm install
   ```

2. 运行开发环境

   ```bash
   pnpm dev
   ```

3. 代码质量检查

   ```bash
   pnpm lint
   pnpm test
   ```

4. 生产构建

   ```bash
   pnpm build
   pnpm start
   ```

## 🧩 内容工作流

- 在 `src/content/blog` 与 `src/content/docs` 编写 MDX 文件即可自动生成对应页面。
- 可在 `scripts/generate-rss.mts` / `scripts/generate-sitemap.mts` 中扩展自动化产物。
- 如果需要接入 CMS，可在 `src/lib/cms.ts`（待扩展）统一封装。

## 🔧 环境变量

复制 `.env.example` 创建 `.env` 文件，并按需配置：

```
NEXT_PUBLIC_ANALYTICS_ID=your-domain.com
```

## 📦 部署建议

- 使用 `pnpm build`（如需静态导出可追加 `next export`）生成产物，托管到任意支持 CDN 的平台。
- 保持 `public/robots.txt`、`public/sitemap.xml` 可用，确保 SEO 质量。
- 推荐使用 GitHub Actions CI 作为合并前质量门槛。

## 📝 许可证

[MIT](./LICENSE)
