import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Accommodation } from "@/types/services";

interface AccommodationCardProps {
  accommodation: Accommodation;
  lang: "zh" | "en";
}

export function AccommodationCard({ accommodation, lang }: AccommodationCardProps) {
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={accommodation.photo}
            alt={accommodation.name}
            fill
            className="object-cover rounded-t-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-hotel.svg";
            }}
          />
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 text-xs px-2 py-1 rounded-full font-medium">
              {accommodation.type}
            </span>
          </div>
          <div className="absolute top-2 right-2">
            <div className="bg-white/90 text-xs px-2 py-1 rounded-full flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{accommodation.rating}</span>
            </div>
          </div>
        </div>
        <div className="p-4 pb-0">
          <CardTitle className="text-lg">{accommodation.name}</CardTitle>
          <CardDescription>
            {accommodation.city} • {accommodation.address}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* 价格区间 */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{t("价格区间", "Price Range")}</span>
            <div className="text-right">
              <span className="font-bold text-primary">
                ${accommodation.priceRange.min} - ${accommodation.priceRange.max}
              </span>
              <span className="text-xs text-gray-500 ml-1">/{accommodation.priceRange.unit}</span>
            </div>
          </div>
        </div>

        {/* 房型信息 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("房型选择", "Room Types")}</h4>
          <div className="space-y-2">
            {accommodation.roomTypes.slice(0, 2).map((room, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{room.type}</span>
                <span className="font-medium">${room.price}/{accommodation.priceRange.unit}</span>
              </div>
            ))}
            {accommodation.roomTypes.length > 2 && (
              <div className="text-xs text-gray-500">
                +{accommodation.roomTypes.length - 2} {t("种房型", "more types")}
              </div>
            )}
          </div>
        </div>

        {/* 设施服务 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("设施服务", "Amenities")}</h4>
          <div className="flex flex-wrap gap-1">
            {accommodation.amenities.slice(0, 6).map((amenity) => (
              <span
                key={amenity}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {amenity}
              </span>
            ))}
            {accommodation.amenities.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                +{accommodation.amenities.length - 6}
              </span>
            )}
          </div>
        </div>

        {/* 语言支持 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("语言支持", "Languages")}</h4>
          <div className="flex flex-wrap gap-1">
            {accommodation.languages.map((language) => (
              <span
                key={language}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* 位置信息 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("位置信息", "Location")}</h4>
          <p className="text-xs text-gray-600 mb-1">{accommodation.location.landmark}</p>
          <div className="flex flex-wrap gap-1">
            {accommodation.location.nearby.slice(0, 4).map((place) => (
              <span
                key={place}
                className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded"
              >
                {place}
              </span>
            ))}
          </div>
        </div>

        {/* 特别优惠 */}
        {accommodation.specialOffers && (
          <div className="mb-4">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-2">
              <p className="text-xs text-orange-700">
                🎁 {accommodation.specialOffers}
              </p>
            </div>
          </div>
        )}

        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-4 flex-1">
          {accommodation.description}
        </p>

        {/* 预约按钮 */}
        <div className="mt-auto">
          <Button 
            size="sm" 
            className="w-full"
          >
            {t("预约此住宿", "Book This Accommodation")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
