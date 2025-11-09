import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  output: 'export',
  experimental: {
    mdxRs: true
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    unoptimized: true
  }
};

export default withMDX(nextConfig);
