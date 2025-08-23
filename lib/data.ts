import fs from "node:fs";
import path from "node:path";
import type { 
  ServicesData, 
  ServiceItem, 
  TranslatorsData, 
  AccommodationsData,
  VehiclesData,
  VehicleResource,
  Translator,
  Accommodation 
} from "@/types/services";

// 原有服务数据读取函数
export function getServicesData(lang: "zh" | "en"): ServicesData {
  const file = path.join(process.cwd(), "data", lang === "zh" ? "services.zh.json" : "services.en.json");
  const json = fs.readFileSync(file, "utf-8");
  return JSON.parse(json) as ServicesData;
}

export function findServiceBySlug(lang: "zh" | "en", slug: string): { category: string; item: ServiceItem } | null {
  const data = getServicesData(lang);
  for (const category of data.categories) {
    const item = category.items.find((s) => s.slug === slug);
    if (item) return { category: category.name, item };
  }
  return null;
}

// 翻译师数据读取
export function getTranslatorsData(): TranslatorsData {
  const file = path.join(process.cwd(), "data", "translators.json");
  const json = fs.readFileSync(file, "utf-8");
  return JSON.parse(json) as TranslatorsData;
}

export function getTranslatorById(id: string): Translator | null {
  const data = getTranslatorsData();
  return data.translators.find(t => t.id === id) || null;
}

export function getTranslatorsByCity(city: string): Translator[] {
  const data = getTranslatorsData();
  return data.translators.filter(t => t.city === city);
}

// 已移除司机数据读取（改为基于车辆目录）

// 住宿数据读取
export function getAccommodationsData(): AccommodationsData {
  const file = path.join(process.cwd(), "data", "accommodations.json");
  const json = fs.readFileSync(file, "utf-8");
  return JSON.parse(json) as AccommodationsData;
}

export function getAccommodationById(id: string): Accommodation | null {
  const data = getAccommodationsData();
  return data.accommodations.find(a => a.id === id) || null;
}

export function getAccommodationsByCity(city: string): Accommodation[] {
  const data = getAccommodationsData();
  return data.accommodations.filter(a => a.city === city);
}

export function getAccommodationsByType(type: string): Accommodation[] {
  const data = getAccommodationsData();
  return data.accommodations.filter(a => a.type === type);
}

// 车辆目录数据读取
export function getVehiclesData(): VehiclesData {
  const file = path.join(process.cwd(), "data", "vehicles.json");
  const json = fs.readFileSync(file, "utf-8");
  return JSON.parse(json) as VehiclesData;
}

export function getVehicleById(id: string): VehicleResource | null {
  const data = getVehiclesData();
  return data.vehicles.find(v => v.id === id) || null;
}

export function searchVehicles(query: {
  city?: string;
  type?: string;
  seatsMin?: number;
  seatsMax?: number;
}): VehicleResource[] {
  const data = getVehiclesData();
  return data.vehicles.filter(v => {
    if (query.city && v.city !== query.city) return false;
    if (query.type && v.type !== query.type) return false;
    if (query.seatsMin && v.seats < query.seatsMin) return false;
    if (query.seatsMax && v.seats > query.seatsMax) return false;
    return true;
  });
}

// 通用搜索函数
export function searchTranslators(query: {
  city?: string;
  languages?: string[];
  specialties?: string[];
  maxRate?: number;
}): Translator[] {
  const data = getTranslatorsData();
  return data.translators.filter(translator => {
    if (query.city && translator.city !== query.city) return false;
    if (query.languages && !query.languages.some(lang => translator.languages.includes(lang))) return false;
    if (query.specialties && !query.specialties.some(spec => translator.specialties.includes(spec))) return false;
    if (query.maxRate && translator.dailyRate > query.maxRate) return false;
    return true;
  });
}

// 已移除司机搜索方法

export function searchAccommodations(query: {
  city?: string;
  type?: string;
  maxPrice?: number;
  amenities?: string[];
}): Accommodation[] {
  const data = getAccommodationsData();
  return data.accommodations.filter(accommodation => {
    if (query.city && accommodation.city !== query.city) return false;
    if (query.type && accommodation.type !== query.type) return false;
    if (query.maxPrice && accommodation.priceRange.max > query.maxPrice) return false;
    if (query.amenities && !query.amenities.some(amenity => accommodation.amenities.includes(amenity))) return false;
    return true;
  });
}