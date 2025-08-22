import type { MetadataRoute } from "next";
import { getServicesData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kazgateway.example.com";
  const langs: Array<"zh" | "en"> = ["zh", "en"];
  const pages = ["", "/about", "/services", "/contact"];
  const staticUrls = langs.flatMap((l) => pages.map((p) => ({ url: `${base}/${l}${p}`, lastModified: new Date() })));
  const services = langs.flatMap((l) =>
    getServicesData(l).categories.flatMap((c) => c.items.map((s) => ({ url: `${base}/${l}/services/${s.slug}`, lastModified: new Date() })))
  );
  return [...staticUrls, ...services];
}


