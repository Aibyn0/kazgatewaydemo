// 翻译师类型定义
export interface Translator {
  id: string;
  name: string;
  photo: string;
  gender: string;
  age: number;
  languages: string[];
  proficiency: {
    russian?: string;
    kazakh?: string;
    english?: string;
    chinese?: string;
  };
  specialties: string[];
  city: string;
  experience: string;
  education: string;
  dailyRate: number;
  withCarRate: number;
  currency: string;
  availability: string;
  description: string;
  contact: {
    whatsapp: string;
    wechat: string;
  };
  rating: number;
  completedJobs: number;
}

export interface TranslatorsData {
  translators: Translator[];
}

// 司机类型定义
export interface Vehicle {
  type: string;
  model: string;
  year: number;
  seats: number;
  photo: string;
  features: string[];
}

export interface DriverPricing {
  airportTransfer?: number;
  cityTour?: number;
  businessAccompany?: number;
  dailyRental?: number;
  vipTransfer?: number;
  businessMeeting?: number;
  intercityTransfer?: number;
  currency: string;
}

export interface Driver {
  id: string;
  name: string;
  photo: string;
  age: number;
  languages: string[];
  city: string;
  experience: string;
  vehicles: Vehicle[];
  services: string[];
  pricing: DriverPricing;
  coverage: string[];
  availability: string;
  description: string;
  contact: {
    whatsapp: string;
    wechat: string;
  };
  rating: number;
  completedTrips: number;
  specialties: string[];
}

export interface DriversData {
  drivers: Driver[];
}

// 住宿类型定义
export interface RoomType {
  type: string;
  price: number;
  features: string[];
}

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
  unit: string;
}

export interface Location {
  landmark: string;
  nearby: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  type: string;
  photo: string;
  gallery: string[];
  city: string;
  address: string;
  rating: number;
  priceRange: PriceRange;
  roomTypes: RoomType[];
  amenities: string[];
  languages: string[];
  description: string;
  contact: {
    phone: string;
    whatsapp: string;
    wechat: string;
  };
  location: Location;
  specialOffers: string;
}

export interface AccommodationsData {
  accommodations: Accommodation[];
}

// 原有的服务类型保留
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
  slug: "translation" | "driver" | "consulting" | "accommodation" | string;
  name: string;
  items: ServiceItem[];
}

export interface ServicesData {
  categories: ServiceCategory[];
}

// 博客文章类型
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featured: boolean;
  image?: string;
}

export interface BlogData {
  posts: BlogPost[];
}