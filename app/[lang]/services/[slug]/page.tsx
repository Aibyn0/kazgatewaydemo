import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findServiceBySlug, getServicesData } from "@/lib/data";

export async function generateStaticParams() {
  return ["zh", "en"].flatMap((lang) =>
    getServicesData(lang as "zh" | "en").categories.flatMap((c) => c.items.map((i) => ({ lang, slug: i.slug })))
  );
}

export async function generateMetadata({ params }: { params: { lang: "zh" | "en"; slug: string } }): Promise<Metadata> {
  const result = findServiceBySlug(params.lang, params.slug);
  if (!result) return {};
  const { item } = result;
  const title = params.lang === "zh" ? `${item.title} | KazGateway` : `${item.title} | KazGateway`;
  const description = item.description;
  const url = `https://kazgateway.example.com/${params.lang}/services/${item.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" }
  };
}

export default function ServiceDetail({ params }: { params: { lang: "zh" | "en"; slug: string } }) {
  const result = findServiceBySlug(params.lang, params.slug);
  if (!result) notFound();
  const { item, category } = result;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: item.title,
    description: item.description,
    areaServed: "Almaty, Kazakhstan",
    offers: { "@type": "Offer", price: item.price, priceCurrency: params.lang === "zh" ? "CNY" : "USD" },
    provider: { "@type": "Organization", name: "KazGateway" }
  };
  return (
    <div className="container-responsive py-10 space-y-6">
      <h1 className="text-2xl font-semibold">{item.title}</h1>
      <div className="text-muted-foreground">{category}</div>
      <div>{item.description}</div>
      <div className="text-primary font-medium">{item.price}</div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded border px-2 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-3">
        {item.faqs.map((f) => (
          <div key={f.q}>
            <div className="font-medium">Q: {f.q}</div>
            <div className="text-muted-foreground">A: {f.a}</div>
          </div>
        ))}
      </div>
      <a className="text-primary underline" href={`/${params.lang}/contact`}>{params.lang === "zh" ? "联系咨询" : "Contact us"}</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}


