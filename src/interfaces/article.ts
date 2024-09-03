export default interface Article {
  id: number;
  attributes: {
    author: string;
    canonicalUrl?: string;
    content: string;
    createdAt: string;
    description: string;
    publishedAt: string;
    slug: string;
    tags: string;
    title: string;
    updatedAt: string;
  };
}
