export type Course = {
  id: number;
  name: string;
  duration: string;
  coverImage: string;
};

export interface CourseDetails {
  id: string;
  name: string;
  previewImage: {
    url: string;
  };
  description: string;
  price: number;
  requirements: string[];
  format: string;
  author: string[];
  CourseImages: string[];
}

export interface course {
  id: number;
  name: string;
  previewImage: {
    url: string;
  };
  description: string;
  price: number;
}

export interface series {
  id: number;
  name: string;
  description: string;
  image: {
    url: string;
  };
  category: {
    id: string;
    name: string;
  };
  _count: {
    courses: number;
  };
}

export type ProviderSeries = {
  id: number;
  name: string;
  category: {
    name: string;
  };
  description: string;
  image: {
    url: string;
  };
  _count: {
    courses: number;
  };
};

export type Series = {
  id: number;
  name: string;
  category: string;
  coverImage: string;
  courses: Course[];
};

export type Provider2 = {
  id: number;
  name: string;
  logo: { src: string; alt: string };
  series: Series[];
};

export interface Provider {
  id: number;
  name: string;
  description: string;
  image: {
    url: string;
  };
  _count: {
    series: number;
  };
}
export interface ProviderWithSeries extends Provider {
  countSeries: number;
  series: Series[];
}
