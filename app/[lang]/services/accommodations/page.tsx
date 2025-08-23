import { getAccommodationsData } from "@/lib/data";
import { AccommodationCard } from "@/components/accommodation-card";
import { ContactSection } from "@/components/contact-section";

export const dynamic = "force-static";

export default function AccommodationsPage({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const data = getAccommodationsData();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="container-responsive py-10 space-y-8">
      {/* 页面标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          {t("优质住宿服务", "Quality Accommodation Services")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(
            "精选优质酒店和民宿，提供舒适安全的住宿环境，支持中文服务，让您的哈萨克斯坦之行更加便捷。",
            "Carefully selected hotels and accommodations with comfortable and safe environments, Chinese service support for your convenience in Kazakhstan."
          )}
        </p>
      </div>

      {/* 住宿概述 */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-4">
            {t("住宿特点", "Accommodation Features")}
          </h3>
          <p className="text-gray-600">
            {t("精选优质住宿，包含照片、位置信息和价格参考", "Carefully selected quality accommodations with photos, location and pricing")}
          </p>
        </div>
      </div>

      {/* 住宿列表 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {t("推荐住宿", "Recommended Accommodations")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.accommodations.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accommodation={accommodation} lang={lang} />
          ))}
        </div>
      </div>





      {/* 预约联系 */}
      <ContactSection
        title={t("预约住宿服务", "Book Accommodation Service")}
        description={t(
          "通过我们预约优质住宿，我们为您推荐最适合的酒店或民宿，享受特殊优惠价格。",
          "Book quality accommodations through us. We recommend the most suitable hotels or B&Bs with special discount prices."
        )}
        lang={lang}
      />

      {/* 服务说明 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {t("服务说明", "Service Information")}
        </h2>
        <div className="text-center text-gray-600">
          <p>{t("提供阿拉木图、阿斯塔纳等城市的优质住宿选择", "Quality accommodation options in Almaty, Astana and other cities")}</p>
        </div>
      </div>
    </div>
  );
}
