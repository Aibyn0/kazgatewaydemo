import { getVehiclesData } from "@/lib/data";
import { VehicleCard } from "@/components/vehicle-card";

export const dynamic = "force-static";

export default function VehiclesPage({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  const all = getVehiclesData();
  const vehicles = all.vehicles;

  return (
    <div className="container-responsive py-10 space-y-8">
      {/* 标题 */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">{t("可选车辆目录", "Vehicle Catalog")}</h1>
        <p className="text-muted-foreground">{t("上传与展示可用车辆，用户按车型/城市筛选后联系下单", "Showcase vehicles and let users filter by type/city, then contact to book")}</p>
      </div>

      {/* 前期车辆较少，暂不提供筛选 */}

      {/* 列表 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map(v => (
          <VehicleCard key={v.id} vehicle={v} lang={lang} />
        ))}
      </div>

      {/* CTA */}
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">{t("联系预约车辆", "Contact to book a vehicle")}</h2>
        <p className="opacity-90 mb-4">{t("选择车辆后，通过微信或 WhatsApp 联系我们确认时间与价格。", "After choosing a vehicle, contact us via WeChat/WhatsApp to confirm time and price.")}</p>
        <div className="text-sm opacity-80">WeChat: KazGateway_Official · WhatsApp: +7-XXX-XXX-XXXX</div>
      </div>
    </div>
  );
}


