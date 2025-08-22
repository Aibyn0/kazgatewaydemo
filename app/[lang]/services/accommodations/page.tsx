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

      {/* 住宿类型 */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="text-2xl mb-3">🏨</div>
          <h3 className="font-semibold mb-2">
            {t("商务酒店", "Business Hotels")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("现代化设施，商务中心，会议室", "Modern facilities, business center, meeting rooms")}
          </p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-2xl mb-3">🏠</div>
          <h3 className="font-semibold mb-2">
            {t("精品民宿", "Boutique B&Bs")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("家庭式服务，完整厨房，长期优惠", "Family service, full kitchen, long-term discounts")}
          </p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <div className="text-2xl mb-3">⭐</div>
          <h3 className="font-semibold mb-2">
            {t("豪华酒店", "Luxury Hotels")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("五星级服务，SPA中心，礼宾服务", "5-star service, SPA center, concierge service")}
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

      {/* 服务优势 */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("服务优势", "Service Advantages")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              中
            </div>
            <h3 className="font-medium mb-2">{t("中文服务", "Chinese Service")}</h3>
            <p className="text-sm text-gray-600">
              {t("前台和房东提供中文沟通", "Front desk and hosts speak Chinese")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              📍
            </div>
            <h3 className="font-medium mb-2">{t("优越位置", "Prime Location")}</h3>
            <p className="text-sm text-gray-600">
              {t("市中心位置，交通便利", "City center location, convenient transportation")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              💰
            </div>
            <h3 className="font-medium mb-2">{t("优惠价格", "Special Rates")}</h3>
            <p className="text-sm text-gray-600">
              {t("长期住宿享受特别优惠", "Special discounts for long-term stays")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              🛎️
            </div>
            <h3 className="font-medium mb-2">{t("贴心服务", "Thoughtful Service")}</h3>
            <p className="text-sm text-gray-600">
              {t("机场接送，当地指导", "Airport transfer, local guidance")}
            </p>
          </div>
        </div>
      </div>

      {/* 城市分布 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("城市分布", "City Coverage")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              🏙️ {t("阿拉木图", "Almaty")}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>{t("商务酒店", "Business Hotels")}</span>
                <span className="text-primary font-medium">2 {t("家", "hotels")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>{t("精品民宿", "Boutique B&Bs")}</span>
                <span className="text-primary font-medium">1 {t("家", "property")}</span>
              </div>
              <div className="text-sm text-gray-600 mt-3">
                {t(
                  "经济中心，商务活动频繁，住宿选择丰富",
                  "Economic center with frequent business activities and rich accommodation options"
                )}
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              🏛️ {t("阿斯塔纳", "Astana")}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>{t("豪华酒店", "Luxury Hotels")}</span>
                <span className="text-primary font-medium">1 {t("家", "hotel")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>{t("政府区域", "Government Area")}</span>
                <span className="text-primary font-medium">{t("核心位置", "Prime location")}</span>
              </div>
              <div className="text-sm text-gray-600 mt-3">
                {t(
                  "政治中心，政府事务和高端商务的首选",
                  "Political center, preferred for government affairs and high-end business"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 预订流程 */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("预订流程", "Booking Process")}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h3 className="font-medium mb-2">{t("选择住宿", "Choose Accommodation")}</h3>
            <p className="text-sm text-gray-600">
              {t("根据预算和需求选择", "Select based on budget and needs")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h3 className="font-medium mb-2">{t("联系预订", "Contact & Book")}</h3>
            <p className="text-sm text-gray-600">
              {t("通过微信或WhatsApp预订", "Book via WeChat or WhatsApp")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h3 className="font-medium mb-2">{t("确认入住", "Confirm Check-in")}</h3>
            <p className="text-sm text-gray-600">
              {t("确认日期、房型和价格", "Confirm dates, room type and price")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h3 className="font-medium mb-2">{t("安心入住", "Comfortable Stay")}</h3>
            <p className="text-sm text-gray-600">
              {t("享受舒适的住宿体验", "Enjoy comfortable accommodation experience")}
            </p>
          </div>
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

      {/* 常见问题 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {t("常见问题", "Frequently Asked Questions")}
        </h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("如何选择合适的住宿？", "How to choose the right accommodation?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "商务出差选择商务酒店，长期居住选择民宿，政府事务选择阿斯塔纳豪华酒店，预算有限选择经济型住宿。",
                "Business trips: business hotels; Long-term stays: B&Bs; Government affairs: luxury hotels in Astana; Budget-conscious: economy options."
              )}
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("住宿费用包含哪些服务？", "What services are included in accommodation fees?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "基本费用包含住宿、WiFi、基础设施使用。部分住宿包含早餐、机场接送、洗衣服务等，具体以住宿详情为准。",
                "Basic fees include accommodation, WiFi, and basic facilities. Some include breakfast, airport transfer, laundry service - check accommodation details."
              )}
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("可以提供长期住宿优惠吗？", "Are long-term stay discounts available?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "是的，月租可享受优惠价格，部分民宿提供包含水电费的优惠套餐。具体优惠请联系我们咨询。",
                "Yes, monthly rentals enjoy discounted rates. Some B&Bs offer packages including utilities. Contact us for specific discounts."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
