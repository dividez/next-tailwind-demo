import { siteConfig } from '@/config/site';

type SocialLink = {
  name: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: siteConfig.links.github },
  { name: 'Twitter', href: siteConfig.links.twitter },
  { name: 'LinkedIn', href: siteConfig.links.linkedin }
];

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-4 text-sm text-gray-500">
      {socialLinks
        .filter((link) => Boolean(link.href))
        .map((link) => (
          <li key={link.name}>
            <a href={link.href} target="_blank" rel="noreferrer" className="hover:text-gray-900">
              {link.name}
            </a>
          </li>
        ))}
    </ul>
  );
}
