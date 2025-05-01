export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type Route = {
  name: string;
  path: string;
};

export type CarouselImage = {
  id: number;
  imagePath: string;
};


export type Statistic = {
  id: number;
  value: string;
  label: string;
};

export type Benefit = {
  id: number;
  text: string;
};

export type Offering = {
  id: number;
  image: string;
  title: string;
  description: string;
};
export type Testimonial = {
  id: number;
  text: string;
  author: string;
};

export type Course = {
  id: number;
  title: string;
  price: number;
  priceNote: string;
  description: string;
  image:string
};

export type FooterLink = {
  id: number;
  label: string;
  href: string;
};
