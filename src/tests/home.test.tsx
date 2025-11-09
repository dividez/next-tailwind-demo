import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/marketing/hero';
import type { ReactNode } from 'react';

vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />
}));

describe('Hero section', () => {
  it('renders call to action text', () => {
    render(<Hero />);
    expect(screen.getByText('为产品打造一站式高性能官网')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '立即开始' })).toBeInTheDocument();
  });
});
