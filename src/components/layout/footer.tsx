import Link from 'next/link';
import { navConfig } from '@/config/nav';
import { Logo } from '@/components/common/logo';
import { SocialLinks } from '@/components/common/social-links';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-gray-500">
            {navConfig.tagline}
          </p>
          <SocialLinks />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          {navConfig.footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-900">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 py-6">
        <p className="text-center text-xs text-gray-400">© {new Date().getFullYear()} Next Tailwind Demo. All rights reserved.</p>
      </div>
    </footer>
  );
}
