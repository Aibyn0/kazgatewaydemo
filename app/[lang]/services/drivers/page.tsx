import { getDriversData } from "@/lib/data";
import { DriverCard } from "@/components/driver-card";
import { ContactSection } from "@/components/contact-section";

export const dynamic = "force-static";

export default function DriversPage({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const data = getDriversData();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="container-responsive py-10 space-y-8">
      {/* 页面标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          {t("专业司机服务", "Professional Driver Services")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t(
            "安全可靠的司机服务，熟悉当地路况，提供机场接送、城市观光、商务陪同等多种服务。",
            "Safe and reliable driver services with local knowledge, offering airport transfers, city tours, and business accompaniment."
          )}
        </p>
      </div>

      {/* 服务特色 */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="text-2xl mb-3">🚗</div>
          <h3 className="font-semibold mb-2">
            {t("多种车型", "Various Vehicles")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("经济型、商务型、豪华型", "Economy, Business, Luxury")}
          </p>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-2xl mb-3">🛡️</div>
          <h3 className="font-semibold mb-2">
            {t("安全保障", "Safety Guaranteed")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("资深司机，优秀驾驶记录", "Experienced drivers, excellent records")}
          </p>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <div className="text-2xl mb-3">🌍</div>
          <h3 className="font-semibold mb-2">
            {t("语言沟通", "Language Support")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("中文、俄语、哈萨克语", "Chinese, Russian, Kazakh")}
          </p>
        </div>
        <div className="text-center p-6 bg-orange-50 rounded-lg">
          <div className="text-2xl mb-3">⏰</div>
          <h3 className="font-semibold mb-2">
            {t("全天服务", "24/7 Service")}
          </h3>
          <p className="text-sm text-gray-600">
            {t("随时预约，准时到达", "Available anytime, always on time")}
          </p>
        </div>
      </div>

      {/* 司机列表 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {t("我们的司机", "Our Drivers")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.drivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} lang={lang} />
          ))}
        </div>
      </div>

      {/* 服务类型 */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("服务类型", "Service Types")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-semibold mb-2">{t("机场接送", "Airport Transfer")}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {t("准时接机送机服务", "Punctual pickup and drop-off")}
            </p>
            <div className="text-primary font-bold">$25 {t("起", "from")}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏙️</div>
            <h3 className="font-semibold mb-2">{t("城市观光", "City Tour")}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {t("专业导游式观光服务", "Professional guided city tours")}
            </p>
            <div className="text-primary font-bold">$60 {t("起", "from")}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-semibold mb-2">{t("商务陪同", "Business Escort")}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {t("商务会议接送陪同", "Business meeting transportation")}
            </p>
            <div className="text-primary font-bold">$80 {t("起", "from")}</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🚐</div>
            <h3 className="font-semibold mb-2">{t("长途包车", "Long Distance")}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {t("城际交通包车服务", "Intercity transportation service")}
            </p>
            <div className="text-primary font-bold">$150 {t("起", "from")}</div>
          </div>
        </div>
      </div>

      {/* 预订流程 */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("预订流程", "Booking Process")}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h3 className="font-medium mb-2">{t("选择司机", "Choose Driver")}</h3>
            <p className="text-sm text-gray-600">
              {t("根据车型和服务需求选择", "Select based on vehicle and service needs")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h3 className="font-medium mb-2">{t("联系预约", "Contact & Book")}</h3>
            <p className="text-sm text-gray-600">
              {t("通过微信或WhatsApp预约", "Book via WeChat or WhatsApp")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h3 className="font-medium mb-2">{t("确认行程", "Confirm Trip")}</h3>
            <p className="text-sm text-gray-600">
              {t("确认时间、路线和价格", "Confirm time, route and price")}
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h3 className="font-medium mb-2">{t("享受服务", "Enjoy Service")}</h3>
            <p className="text-sm text-gray-600">
              {t("司机准时到达，安全送达", "Driver arrives on time, safe delivery")}
            </p>
          </div>
        </div>
      </div>

      {/* 预约联系 */}
      <ContactSection
        title={t("预约司机服务", "Book Driver Service")}
        description={t(
          "通过我们预约专业司机，我们为您匹配最合适的司机和车辆，提供安全可靠的出行服务。",
          "Book professional drivers through us. We match you with the most suitable driver and vehicle for safe and reliable transportation."
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
              {t("如何选择合适的车型？", "How to choose the right vehicle?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "经济型适合1-4人出行，商务型适合商务接待，豪华型适合VIP客户，SUV适合长途或多人出行。",
                "Economy for 1-4 people, Business for corporate use, Luxury for VIP clients, SUV for long trips or groups."
              )}
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("司机服务费用如何计算？", "How are driver service fees calculated?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "根据服务类型计费：机场接送$25起，城市观光$60起，商务陪同$80起，长途包车$150起。具体价格根据距离和时间调整。",
                "Based on service type: Airport transfer from $25, City tour from $60, Business escort from $80, Long distance from $150."
              )}
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">
              {t("需要提前多久预约？", "How far in advance should I book?")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "建议提前24小时预约以确保车辆和司机的可用性，紧急情况可联系我们安排。",
                "We recommend booking 24 hours in advance. Emergency arrangements available upon request."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
