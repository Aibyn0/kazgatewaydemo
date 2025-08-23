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

// 司机相关类型已移除，改为车辆资源目录模型

// 车辆资源目录（用于公开展示可选车辆）
export interface VehicleResourcePricing {
  airportTransfer?: number;
  intercity?: number;
  dailyRental?: number;
  currency: string;
}

export interface VehicleResource {
  id: string;
  type: string; // 经济型轿车 / 商务车 / SUV / 豪华轿车
  model: string; // Toyota Camry / Mercedes V-Class
  year: number;
  seats: number;
  photo: string;
  gallery?: string[];
  features: string[];
  city: string; // 阿拉木图 / 阿斯塔纳
  pricing: VehicleResourcePricing;
  description: string;
  contact: {
    whatsapp: string;
    wechat: string;
  };
  available: string; // 24小时 / 预约制 等
}

export interface VehiclesData {
  vehicles: VehicleResource[];
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

// 已移除服务目录的类型定义

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