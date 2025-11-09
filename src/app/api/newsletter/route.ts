import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.email) {
    return NextResponse.json({ success: false, message: '请提供有效邮箱地址' }, { status: 400 });
  }

  // 在此处接入第三方邮件服务
  console.log('New subscriber:', body.email);

  return NextResponse.json({ success: true });
}
