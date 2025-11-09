import type { Metadata } from 'next';
import { Container } from '@/components/layout/container';
import { seoConfig } from '@/config/seo';

export const metadata: Metadata = {
  ...seoConfig.defaultMetadata,
  ...seoConfig.pages.contact
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">联系我们</h1>
        <p className="text-lg text-gray-600">
          填写以下表单，我们将在 2 个工作日内回复。或发送邮件至
          <a href="mailto:hello@example.com" className="font-semibold text-blue-600 hover:text-blue-800">
            hello@example.com
          </a>
          。
        </p>
        <form className="grid gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            姓名
            <input type="text" name="name" required className="rounded-xl border border-gray-200 px-4 py-3" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            邮箱
            <input type="email" name="email" required className="rounded-xl border border-gray-200 px-4 py-3" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            公司与职位
            <input type="text" name="company" className="rounded-xl border border-gray-200 px-4 py-3" />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            需求描述
            <textarea name="message" rows={4} className="rounded-xl border border-gray-200 px-4 py-3" />
          </label>
          <button type="submit" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            提交需求
          </button>
        </form>
      </div>
    </Container>
  );
}
