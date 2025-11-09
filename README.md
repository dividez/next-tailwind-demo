# Next Tailwind Marketing Site

一个基于 Next.js 16 与 Tailwind CSS 4 打造的营销官网模板，专注于极致 SEO、性能表现与内容友好度。项目采用 App Router、MDX 内容层与模块化组件结构，支持静态导出，帮助团队快速上线高质量的品牌官网、博客与文档站点。

## ✨ 特性

- **SEO 优先**：静态化输出、结构化数据、内置 sitemap/robots。
- **性能卓越**：Tailwind 设计系统 + 可静态导出的 Next.js App Router。
- **内容友好**：MDX 驱动的 Blog 与 Docs，可扩展对接 Headless CMS。
- **解耦架构**：轻量 API（订阅、表单），与主应用彻底分离。
- **工程保障**：TypeScript、Vitest、GitHub Actions CI 全面护航。

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

3. 生产构建

   ```bash
   # 构建静态文件（生成到 out/ 目录）
   pnpm build
   # 或使用 export 命令（等同于 build）
   pnpm export
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

项目已配置为静态导出模式，构建后会生成纯静态 HTML 文件到 `out/` 目录，可直接部署到任何静态托管服务。

### 构建静态文件

```bash
pnpm build
# 或
pnpm export
```

构建完成后，静态文件将生成在 `out/` 目录中。

### 部署到静态托管平台

#### Vercel（推荐）

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Next.js 项目并配置部署
4. 项目已配置静态导出，Vercel 会自动识别并部署 `out/` 目录

#### Netlify

1. 将代码推送到 Git 仓库
2. 在 [Netlify](https://netlify.com) 创建新站点并连接仓库
3. 构建设置：
   - **Build command**: `pnpm build`
   - **Publish directory**: `out`

#### GitHub Pages

1. 在 `package.json` 中添加部署脚本（可选）：
   ```json
   "scripts": {
     "deploy": "pnpm build && gh-pages -d out"
   }
   ```
2. 安装 `gh-pages`：`pnpm add -D gh-pages`
3. 运行 `pnpm deploy`

#### 传统服务器（Nginx/Apache）

1. 运行 `pnpm build` 生成静态文件
2. 将 `out/` 目录的内容复制到服务器的 web 根目录
3. 配置服务器支持 SPA 路由（所有路由重定向到 `index.html`）

### 注意事项

- ✅ 所有页面都已静态化，包括动态路由（blog 和 docs 的 slug 页面）
- ✅ `robots.txt` 和 `sitemap.xml` 会自动生成
- ⚠️ API 路由（`/api/newsletter`）在静态导出时会被忽略，如需表单提交功能，请使用第三方服务（如 Formspree、Netlify Forms 等）
- ⚠️ 图片已设置为未优化模式，适合静态托管

## 📝 许可证

[MIT](./LICENSE)
