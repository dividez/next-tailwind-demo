import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-slate-900">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">NW</span>
      <span className="tracking-tight">Next Web</span>
    </Link>
  );
}
