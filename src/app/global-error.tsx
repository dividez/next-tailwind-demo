'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-900">发生错误</h1>
        <p className="mt-4 max-w-md text-gray-600">我们已经记录了错误，请刷新页面或返回首页。</p>
        <div className="mt-6 flex gap-4">
          <button onClick={() => reset()} className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white">
            刷新页面
          </button>
          <Link href="/" className="rounded-full bg-gray-200 px-6 py-2 text-sm font-semibold text-gray-700">
            返回首页
          </Link>
        </div>
      </body>
    </html>
  );
}
