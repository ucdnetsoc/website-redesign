interface Media {
  data: {
    id: number;
    attributes: {
      url: string;
      height: number;
      width: number;
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
      formats: {
        thumbnail: {
          url: string;
          width: number;
          height: number;
        };
        small: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        large: {
          url: string;
          width: string;
          height: string;
        };
      };
    };
  }
}

export default interface Event {
  id: number;
  attributes: {
    createdAt: string;
    date: string;
    description: string;
    location: string;
    name: string;
    publishedAt: string;
    slug: string;
    thumbnail: Media;
    updatedAt: string;
  };
}
