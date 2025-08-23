import Link from "next/link";
import type { Route } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export default function ServicesHubPage({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const services = [
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
  ];

  return (
    <div className="container-responsive py-12 space-y-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {t("一站式本地服务", "One-stop Localized Services")}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t(
            "覆盖翻译、车辆、住宿与商务咨询四大模块，按需组合，快速响应。",
            "Covering translation, vehicles, accommodations and consulting. Mix-and-match with fast response."
          )}
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href={`/${lang}/contact`}>{t("咨询定制方案", "Get a tailored plan")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${lang}`}>{t("返回首页", "Back to Home")}</Link>
          </Button>
        </div>
      </section>

      {/* Service Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((c) => (
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

      {/* How it works */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: t("沟通需求", "Discuss needs"),
            desc: t("微信/WhatsApp 简要说明场景与时间地点。", "Share your scenario and schedule via WeChat/WhatsApp."),
          },
          {
            title: t("匹配资源", "Match resources"),
            desc: t("从本地池中匹配合适译员、车辆或酒店。", "Match translators, vehicles or hotels from our local pool."),
          },
          {
            title: t("确认与执行", "Confirm & deliver"),
            desc: t("确认价格与细节后执行，全程中文跟进。", "Confirm price and details, then deliver with Chinese support."),
          }
        ].map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-3">{t("需要快速安排？", "Need it arranged fast?")}</h2>
        <p className="opacity-90 mb-4">{t("现在联系，通常 24 小时内响应。", "Contact now, we usually reply within 24 hours.")}</p>
        <div className="text-sm opacity-85">WeChat: KazGateway_Official · WhatsApp: +7-XXX-XXX-XXXX</div>
      </section>
    </div>
  );
}


