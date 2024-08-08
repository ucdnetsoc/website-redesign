export default interface Article {
  id: number;
  attributes: {
    author: string;
    canonicalUrl?: string;
    content: string;
    createdAt: string;
    publishedAt: string;
    title: string;
    updatedAt: string;
  };
}
