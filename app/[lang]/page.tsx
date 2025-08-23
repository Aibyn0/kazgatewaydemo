import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);
  return (
    <div className="container-responsive py-12 space-y-12">
      {/* Hero */}
      <section className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
          <span>🌏</span>
          <span>{t("中文一站式本地服务", "One‑stop local services for Chinese users")}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {t("在哈萨克斯坦，更轻松地开展你的行程与业务", "Do your trip and business in Kazakhstan with ease")}
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {t(
            "翻译 / 用车 / 住宿 / 商务对接，快速安排，当地中文团队全程跟进。",
            "Translation, vehicles, stays and business coordination. Fast arrangement with a local Chinese-speaking team."
          )}
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href={`/${lang}/contact`}>{t("获取方案与报价", "Get a plan & quote")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${lang}/services`}>{t("查看服务", "View services")}</Link>
          </Button>
        </div>
      </section>

      {/* Trust stats */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { k: "cities", v: t("2+ 城市覆盖", "2+ cities covered"), d: t("阿拉木图 / 阿斯塔纳", "Almaty / Astana") },
          { k: "partners", v: t("15+ 合作伙伴", "15+ vetted partners"), d: t("律所、司机、酒店等本地资源", "Law firms, drivers, hotels and more") },
          { k: "response", v: t("24 小时内响应", "Response within 24h"), d: t("急单请加微信备注", "For urgent requests, mention in WeChat") },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border p-6 bg-white text-center">
            <div className="text-xl font-semibold">{s.v}</div>
            <div className="text-sm text-slate-600 mt-1">{s.d}</div>
          </div>
        ))}
      </section>

      {/* 典型场景 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">{t("典型服务场景", "Typical scenarios")}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { i: "✈️", t: t("机场接送", "Airport transfer"), d: t("落地即接，无缝中文沟通", "Pickup on arrival with Chinese support") },
            { i: "🗣️", t: t("商务口译", "Business interpreting"), d: t("会议/拜访/展会随行", "Meetings, visits and expos") },
            { i: "🚗", t: t("市内/城际用车", "In‑city/Intercity rides"), d: t("按小时或按天安排", "Hourly or daily") },
            { i: "🏨", t: t("酒店与民宿", "Hotels & stays"), d: t("优选位置，中文服务", "Good locations, Chinese-friendly") },
          ].map((c) => (
            <div key={c.t} className="rounded-lg border p-5 bg-white">
              <div className="text-2xl">{c.i}</div>
              <div className="font-medium mt-2">{c.t}</div>
              <div className="text-sm text-slate-600">{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 优势亮点 */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: t("本地中文团队", "Local Chinese-speaking team"),
            desc: t("无需反复沟通解释，需求直达执行。", "No translation loss — needs go straight to execution."),
          },
          {
            title: t("可核验的资源", "Vetted resources"),
            desc: t("译员、车辆、住宿与合作方均经筛选与评估。", "Translators, vehicles, stays and partners are screened and evaluated."),
          },
          {
            title: t("清晰透明的价格", "Clear, transparent pricing"),
            desc: t("方案/报价先行，确认后再推进。", "Plan and quote first; proceed after confirmation."),
          }
        ].map((b) => (
          <div key={b.title} className="rounded-lg border p-6 bg-white">
            <h3 className="font-semibold mb-2">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </section>

      {/* 服务流程 */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: t("1. 沟通需求", "1. Share needs"), desc: t("微信/WhatsApp 说明行程与时间。", "Share itinerary and schedule via WeChat/WhatsApp.") },
          { title: t("2. 匹配方案", "2. Match plan"), desc: t("从资源池匹配人车房与报价。", "Match people, vehicles, stays and quote.") },
          { title: t("3. 确认执行", "3. Confirm & deliver"), desc: t("确认细节后执行，全程中文跟进。", "Confirm details and deliver with Chinese support.") },
        ].map((s) => (
          <div key={s.title} className="rounded-lg bg-gray-50 p-6">
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* 口碑 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">{t("部分客户反馈", "What clients say")}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            t("“展会三天口译与用车安排得很稳，沟通顺畅。”", "“Interpreting and rides for our 3‑day expo were smooth and reliable.”"),
            t("“落地注册公司与税务说明很到位，节省大量时间。”", "“Company setup and tax briefing saved us lots of time.”"),
          ].map((q, i) => (
            <div key={i} className="rounded-lg border p-5 bg-white text-slate-700">
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-center">FAQ</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              q: t("如何计价？", "How do you price?"),
              a: t("按项目或按天计价，提供透明报价，确认后执行。", "Project‑based or per day. We quote transparently and proceed after confirmation."),
            },
            {
              q: t("是否支持紧急需求？", "Do you support urgent requests?"),
              a: t("支持。请在微信/表单备注时间点，我们会优先处理。", "Yes. Add your deadline in WeChat/form notes and we will prioritize."),
            },
            {
              q: t("是否可开具票据？", "Invoices available?"),
              a: t("可按当地规范提供凭证，细节在沟通中确认。", "We provide documentation per local regulations; details upon discussion."),
            },
          ].map((f) => (
            <div key={f.q} className="rounded-lg bg-gray-50 p-5">
              <div className="font-medium mb-1">{f.q}</div>
              <div className="text-sm text-slate-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 引导至服务页 */}
      <section className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">{t("按需选择服务模块", "Pick the services you need")}</h2>
        <p className="text-muted-foreground">{t("翻译 / 车辆 / 住宿 / 商务咨询，均可独立或组合", "Translation / Vehicles / Stays / Consulting, standalone or bundled")}</p>
        <Button asChild>
          <Link href={`/${lang}/services`}>{t("前往服务页面", "Go to Services")}</Link>
        </Button>
      </section>
    </div>
  );
}


