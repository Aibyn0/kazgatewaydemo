"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export function VehicleFilters({
  cities,
  types,
  initialCity,
  initialType,
  lang
}: {
  cities: string[];
  types: string[];
  initialCity?: string;
  initialType?: string;
  lang: "zh" | "en";
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  function updateParam(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(name, value); else params.delete(name);
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  return (
    <div className="grid md:grid-cols-4 gap-3">
      <select
        className="rounded border p-2"
        defaultValue={initialCity || ""}
        onChange={(e) => updateParam("city", e.target.value)}
      >
        <option value="">{t("全部城市", "All cities")}</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <select
        className="rounded border p-2"
        defaultValue={initialType || ""}
        onChange={(e) => updateParam("type", e.target.value)}
      >
        <option value="">{t("全部车型", "All types")}</option>
        {types.map((tp) => (
          <option key={tp} value={tp}>
            {tp}
          </option>
        ))}
      </select>
    </div>
  );
}


