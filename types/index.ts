export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
  tags: string[];
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  discount: string;
  originalPrice?: string;
  promoPrice?: string;
  category: string;
  affiliateUrl: string;
  imageUrl: string;
  badge?: string;
  expiresAt?: string;
}
