import Image from "next/image";
import { VehicleResource } from "@/types/services";

export function VehicleCard({ vehicle, lang }: { vehicle: VehicleResource; lang: "zh" | "en" }) {
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);
  return (
    <div className="rounded-lg border overflow-hidden bg-white">
      <div className="relative h-44 w-full">
        <Image src={vehicle.photo} alt={vehicle.model} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{vehicle.model}</h3>
          <span className="text-xs text-slate-500">{vehicle.year}</span>
        </div>
        <div className="text-sm text-slate-600">
          {vehicle.type} · {t("座位", "Seats")} {vehicle.seats} · {vehicle.city}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          {vehicle.features.slice(0, 4).map((f) => (
            <span key={f} className="rounded border px-2 py-0.5">{f}</span>
          ))}
        </div>
        <div className="text-primary font-semibold">
          {vehicle.pricing.airportTransfer ? `${t("接送机", "Airport")} $${vehicle.pricing.airportTransfer}` : null}
          {vehicle.pricing.airportTransfer && vehicle.pricing.dailyRental ? " · " : ""}
          {vehicle.pricing.dailyRental ? `${t("包车/天", "Daily")} $${vehicle.pricing.dailyRental}` : null}
        </div>
        <div className="text-xs text-slate-500">{vehicle.available}</div>
      </div>
    </div>
  );
}


