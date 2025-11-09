import fs from 'node:fs/promises';
import path from 'node:path';
import { getAllBlogPosts } from '../src/lib/mdx';
import { siteConfig } from '../src/config/site';

async function main() {
  const posts = await getAllBlogPosts();
  const items = posts
    .map((post) => `\n    <item>\n      <title><![CDATA[${post.title}]]></title>\n      <link>${siteConfig.url}/blog/${post.slug}</link>\n      <pubDate>${new Date(post.date).toUTCString()}</pubDate>\n      <description><![CDATA[${post.excerpt}]]></description>\n    </item>`)
    .join('');
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n  <channel>\n    <title><![CDATA[${siteConfig.name} Blog]]></title>\n    <link>${siteConfig.url}/blog</link>\n    <description><![CDATA[${siteConfig.description}]]></description>${items}\n  </channel>\n</rss>`;
  const outputDir = path.join(process.cwd(), 'public');
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(path.join(outputDir, 'rss.xml'), rss);
  console.log('Generated RSS feed at public/rss.xml');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
