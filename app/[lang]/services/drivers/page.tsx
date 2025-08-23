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

      {/* 服务概述 */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="font-semibold text-lg mb-4">
            {t("服务特点", "Service Features")}
          </h3>
          <p className="text-gray-600">
            {t("提供多种车型选择，包车服务，覆盖主要城市", "Various vehicle types, charter services, covering major cities")}
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





      {/* 预约联系 */}
      <ContactSection
        title={t("预约司机服务", "Book Driver Service")}
        description={t(
          "通过我们预约专业司机，我们为您匹配最合适的司机和车辆，提供安全可靠的出行服务。",
          "Book professional drivers through us. We match you with the most suitable driver and vehicle for safe and reliable transportation."
        )}
        lang={lang}
      />

      {/* 服务说明 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {t("服务说明", "Service Information")}
        </h2>
        <div className="text-center text-gray-600">
          <p>{t("提供各种车型的包车服务，覆盖阿拉木图、阿斯塔纳等主要城市", "Charter services with various vehicle types, covering major cities like Almaty and Astana")}</p>
        </div>
      </div>
    </div>
  );
}
