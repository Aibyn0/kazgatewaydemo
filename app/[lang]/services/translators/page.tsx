import { getTranslatorsData } from "@/lib/data";
import { TranslatorCard } from "@/components/translator-card";

export const dynamic = "force-static";

export default function TranslatorsPage({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const data = getTranslatorsData();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="container-responsive py-10 space-y-8">
      {/* 页面标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          {t("专业翻译服务", "Professional Translation Services")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(
            "我们精选的翻译师团队，具备丰富的商务翻译经验，熟悉哈萨克斯坦本地环境，为您提供专业可靠的翻译服务。",
            "Our carefully selected team of translators with extensive business translation experience and local knowledge of Kazakhstan."
          )}
        </p>
      </div>

      {/* 服务特色 */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="text-2xl mb-3">🌍</div>
          <h3 className="font-semibold mb-2">
            {t("多语言支持", "Multi-language Support")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("中文、俄语、哈萨克语、英语", "Chinese, Russian, Kazakh, English")}
          </p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-2xl mb-3">💼</div>
          <h3 className="font-semibold mb-2">
            {t("专业领域", "Professional Fields")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("商务、法律、医疗、技术", "Business, Legal, Medical, Technical")}
          </p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <div className="text-2xl mb-3">⚡</div>
          <h3 className="font-semibold mb-2">
            {t("快速响应", "Quick Response")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("24小时内确认预约", "Confirmation within 24 hours")}
          </p>
        </div>
      </div>

      {/* 翻译师列表 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {t("我们的翻译师", "Our Translators")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.translators.map((translator) => (
            <TranslatorCard key={translator.id} translator={translator} lang={lang} />
          ))}
        </div>
      </div>

      {/* 服务流程 */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("服务流程", "Service Process")}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h3 className="font-medium mb-2">{t("选择翻译师", "Choose Translator")}</h3>
            <p className="text-sm text-gray-600">
              {t("根据需求选择合适的翻译师", "Select based on your needs")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h3 className="font-medium mb-2">{t("联系咨询", "Contact & Consult")}</h3>
            <p className="text-sm text-gray-600">
              {t("通过微信或WhatsApp联系", "Contact via WeChat or WhatsApp")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h3 className="font-medium mb-2">{t("确认预约", "Confirm Booking")}</h3>
            <p className="text-sm text-gray-600">
              {t("确认时间、地点和服务内容", "Confirm time, location and services")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h3 className="font-medium mb-2">{t("开始服务", "Start Service")}</h3>
            <p className="text-sm text-gray-600">
              {t("翻译师按时到达提供服务", "Translator arrives on time")}
            </p>
          </div>
        </div>
      </div>

      {/* 常见问题 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {t("常见问题", "Frequently Asked Questions")}
        </h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("如何选择合适的翻译师？", "How to choose the right translator?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "根据您的具体需求选择：商务谈判选择商务专长的翻译师，法律文件选择法律背景的翻译师，医疗相关选择医疗翻译师。",
                "Choose based on your specific needs: business negotiations, legal documents, or medical translation."
              )}
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("翻译费用如何计算？", "How are translation fees calculated?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "按天计费，标准翻译服务$100/天，带车翻译服务$150/天。具体价格可能因翻译师经验和专业程度有所调整。",
                "Daily rates: $100/day for standard service, $150/day with car. Prices may vary based on translator experience."
              )}
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("可以提供哪些城市的服务？", "Which cities do you serve?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "主要服务阿拉木图和阿斯塔纳，其他城市可根据具体情况安排。",
                "Primarily serving Almaty and Astana, other cities available upon request."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
