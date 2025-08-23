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

      {/* 核心信息 */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              {t("语言支持", "Language Support")}
            </h3>
            <p className="text-gray-600">
              {t("中文-俄语、中文-哈萨克语", "Chinese-Russian, Chinese-Kazakh")}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">
              {t("服务价格", "Service Pricing")}
            </h3>
            <p className="text-gray-600">
              {t("$100/天，带车翻译 $150/天", "$100/day, with car $150/day")}
            </p>
          </div>
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



      {/* 预约联系 */}
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {t("预约翻译师服务", "Book Translator Service")}
        </h2>
        <p className="text-lg mb-6 opacity-90">
          {t(
            "通过我们预约专业翻译师，我们为您匹配最合适的翻译师并提供全程服务保障。",
            "Book professional translators through us. We match you with the most suitable translator and provide full service guarantee."
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <div>
              <div className="font-medium">{t("微信联系", "WeChat Contact")}</div>
              <div className="text-sm opacity-90">KazGateway_Official</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <div>
              <div className="font-medium">WhatsApp</div>
              <div className="text-sm opacity-90">+7-XXX-XXX-XXXX</div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-sm opacity-75">
          {t("24小时内回复 • 专业服务 • 价格透明", "Reply within 24 hours • Professional service • Transparent pricing")}
        </div>
      </div>

      {/* 服务说明 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {t("服务说明", "Service Information")}
        </h2>
        <div className="text-center text-gray-600">
          <p>{t("我们的翻译师主要掌握哈萨克语，同时具备日常俄语交流能力", "Our translators mainly speak Kazakh and can communicate in daily Russian")}</p>
          <p className="mt-2">{t("服务城市：阿拉木图、阿斯塔纳", "Service cities: Almaty, Astana")}</p>
        </div>
      </div>
    </div>
  );
}
