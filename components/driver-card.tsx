import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Driver } from "@/types/services";

interface DriverCardProps {
  driver: Driver;
  lang: "zh" | "en";
}

export function DriverCard({ driver, lang }: DriverCardProps) {
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={driver.photo}
            alt={driver.name}
            fill
            className="object-cover rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-avatar.svg";
            }}
          />
        </div>
        <CardTitle className="text-lg">{driver.name}</CardTitle>
        <CardDescription>
          {driver.city} • {driver.experience}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* 车辆信息 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("车辆信息", "Vehicles")}</h4>
          <div className="space-y-2">
            {driver.vehicles.map((vehicle, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{vehicle.model}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {vehicle.seats} {t("座", "seats")}
                  </span>
                </div>
                <div className="relative w-full h-20 mb-2">
                  <Image
                    src={vehicle.photo}
                    alt={vehicle.model}
                    fill
                    className="object-cover rounded"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/placeholder-car.svg";
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {vehicle.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {vehicle.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{vehicle.features.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 服务项目 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("服务项目", "Services")}</h4>
          <div className="flex flex-wrap gap-1">
            {driver.services.map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* 价格信息 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("价格信息", "Pricing")}</h4>
          <div className="space-y-1 text-sm">
            {driver.pricing.airportTransfer && (
              <div className="flex justify-between">
                <span className="text-gray-600">{t("机场接送", "Airport Transfer")}</span>
                <span className="font-medium">${driver.pricing.airportTransfer}</span>
              </div>
            )}
            {driver.pricing.dailyRental && (
              <div className="flex justify-between">
                <span className="text-gray-600">{t("日租", "Daily Rental")}</span>
                <span className="font-medium">${driver.pricing.dailyRental}</span>
              </div>
            )}
            {driver.pricing.cityTour && (
              <div className="flex justify-between">
                <span className="text-gray-600">{t("城市观光", "City Tour")}</span>
                <span className="font-medium">${driver.pricing.cityTour}</span>
              </div>
            )}
          </div>
        </div>

        {/* 语言能力 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("语言能力", "Languages")}</h4>
          <div className="flex flex-wrap gap-1">
            {driver.languages.map((language) => (
              <span
                key={language}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* 评分和完成行程 */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{driver.rating}</span>
            </div>
            <span className="text-gray-600">
              {driver.completedTrips} {t("次行程", "trips")}
            </span>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-4 flex-1">
          {driver.description}
        </p>

        {/* 预约按钮 */}
        <div className="mt-auto">
          <Button 
            size="sm" 
            className="w-full"
          >
            {t("预约此司机", "Book This Driver")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
