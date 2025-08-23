import { ContactSection } from "@/components/contact-section";

export const dynamic = "force-static";

export default function ConsultingPage({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="container-responsive py-10 space-y-8">
      {/* 页面标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">{t("商务咨询服务", "Business Consulting")}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t(
            "为计划在哈萨克斯坦投资与运营的客户提供落地服务与合规指导，先咨询后对接，按需匹配专业人士。",
            "Landing and compliance support in Kazakhstan. We consult first, then match the right experts based on your needs."
          )}
        </p>
      </div>

      {/* 服务模块（精简版） */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">{t("公司注册与合规", "Company Formation & Compliance")}</h3>
          <p className="text-sm text-gray-600">
            {t(
              "公司注册、许可证办理、股权与治理结构建议、合规流程搭建。",
              "Company setup, licensing, governance structure, and compliance processes."
            )}
          </p>
        </div>
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">{t("税务与财务", "Tax & Finance")}</h3>
          <p className="text-sm text-gray-600">
            {t(
              "税制解读、税务筹划、财务外包建议、发票与报税规范。",
              "Tax briefings, planning, finance outsourcing, invoicing and filing practices."
            )}
          </p>
        </div>
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">{t("市场进入与调研", "Market Entry & Research")}</h3>
          <p className="text-sm text-gray-600">
            {t(
              "行业扫描、竞品与渠道分析、政策与风险提示、落地路径建议。",
              "Industry scan, competitor/channel analysis, policy and risk notes, go-to-market path."
            )}
          </p>
        </div>
        <div className="rounded-lg border p-6 bg-white">
          <h3 className="font-semibold mb-2">{t("合作资源对接", "Partnership & Resources")}</h3>
          <p className="text-sm text-gray-600">
            {t(
              "根据需求对接本地律所、会计师、园区与合作伙伴。",
              "Tailored connections to local law firms, accountants, industrial parks and partners."
            )}
          </p>
        </div>
      </div>

      {/* 适用行业与定价说明（简洁） */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="font-semibold mb-2">{t("适用行业", "Industries")}</h3>
          <p className="text-sm text-gray-600">
            {t("贸易、制造、科技、农业等细分场景可按需扩展。", "Trade, Manufacturing, Tech, Agriculture; extendable per case.")}
          </p>
        </div>
        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="font-semibold mb-2">{t("咨询方式与价格", "Engagement & Pricing")}</h3>
          <p className="text-sm text-gray-600">
            {t(
              "先沟通需求，再按项目报价或按小时收费（透明）。支持中文沟通。",
              "Discuss needs first, then project-based or hourly pricing (transparent). Chinese support available."
            )}
          </p>
        </div>
      </div>

      {/* 预约联系 */}
      <ContactSection
        title={t("预约商务咨询", "Book Consulting")}
        description={t(
          "添加微信或 WhatsApp 告诉我们需求，我们为您匹配合适专家并推进落地。",
          "Reach us via WeChat or WhatsApp with your needs. We will match experts and facilitate execution."
        )}
        lang={lang}
      />
    </div>
  );
}


