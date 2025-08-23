import Link from "next/link";
import type { Route } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);
  return (
    <div className="container-responsive py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{t("您在哈萨克斯坦的中文本地化服务平台", "Your localized service gateway in Kazakhstan")}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t(
            "覆盖阿拉木图的中文翻译、司机接送、酒店住宿与商务咨询，专业可靠。",
            "Chinese translation, driver, lodging and business consulting in Almaty."
          )}
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href={`/${lang}/services/translators`}>{t("浏览服务", "Explore services")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${lang}/contact`}>{t("联系咨询", "Contact us")}</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            key: "translators",
            title: t("翻译服务", "Translators"),
            href: `/${lang}/services/translators`,
            desc: t("中-俄/中-哈口译，$100/天起", "Zh-Ru/Zh-Kk, from $100/day")
          },
          {
            key: "vehicles",
            title: t("车辆服务", "Vehicles"),
            href: `/${lang}/services/vehicles`,
            desc: t("可选车型目录，包车服务", "Vehicle catalog, charter service")
          },
          {
            key: "accommodations",
            title: t("住宿服务", "Accommodations"),
            href: `/${lang}/services/accommodations`,
            desc: t("精选酒店/民宿，位置优越", "Selected hotels/B&Bs, prime locations")
          },
          {
            key: "consulting",
            title: t("商务咨询", "Consulting"),
            href: `/${lang}/services/consulting`,
            desc: t("落地合规与市场进入支持", "Market entry & compliance support")
          }
        ].map((c) => (
          <Card key={c.key}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={c.href as Route}>{t("查看详情", "View details")}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


