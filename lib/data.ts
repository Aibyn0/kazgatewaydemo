import fs from "node:fs";
import path from "node:path";
import type { ServicesData, ServiceItem } from "@/types/services";

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


