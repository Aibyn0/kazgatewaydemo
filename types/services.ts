export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  price: string;
  tags: string[];
  description: string;
  faqs: FaqItem[];
}

export interface ServiceCategory {
  slug: "translation" | "driver" | "consulting" | string;
  name: string;
  items: ServiceItem[];
}

export interface ServicesData {
  categories: ServiceCategory[];
}


