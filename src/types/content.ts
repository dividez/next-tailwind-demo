export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags?: string[];
};

export type DocFrontmatter = {
  title: string;
  description: string;
  order?: number;
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  order?: number;
};
