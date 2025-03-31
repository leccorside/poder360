export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  content: string;
  author: {
    node: {
      name: string;
    };
  };
  categories: {
    nodes: {
      length: number;
      name: Array<string>;
    };
  };
  tags: {
    nodes: {
      name: string;
    };
  };
  featuredImage: {
    node: {
      sourceUrl: string;  // URL da imagem
      altText: string;    // Texto alternativo da imagem
      mediaDetails: {
        height: number;
        width: number;
      };
    };
  };
};
