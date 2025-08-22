import Link from "next/link";
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
            <Link href={`/${lang}/services`}>{t("浏览服务", "Explore services")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${lang}/contact`}>{t("联系咨询", "Contact us")}</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[{ title: t("中文翻译", "Translation"), href: "translation" }, { title: t("司机接送", "Driver"), href: "driver" }, { title: t("商务咨询", "Consulting"), href: "consulting" }].map((c) => (
          <Card key={c.href}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
              <CardDescription>{t("专业、可靠、透明定价", "Professional, reliable, transparent pricing")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/${lang}/services?category=${c.href}`}>{t("查看详情", "View details")}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}


