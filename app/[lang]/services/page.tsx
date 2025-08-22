import Link from "next/link";
import { getServicesData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-static";

export default function ServicesList({ searchParams, params }: { searchParams: { category?: string }; params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const data = getServicesData(lang);
  const filtered = searchParams.category ? data.categories.filter((c) => c.slug === searchParams.category) : data.categories;
  return (
    <div className="container-responsive py-10 space-y-8">
      <h1 className="text-2xl font-semibold">{lang === "zh" ? "服务列表" : "Services"}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((cat) => (
          <Card key={cat.slug}>
            <CardHeader>
              <CardTitle>{cat.name}</CardTitle>
              <CardDescription>{lang === "zh" ? "精选本地资源，透明报价" : "Curated local resources, transparent pricing"}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.slug} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.price}</div>
                    </div>
                    <Link className="text-primary" href={`/${lang}/services/${item.slug}`}>
                      {lang === "zh" ? "查看" : "View"}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


