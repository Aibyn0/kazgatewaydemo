"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const languages = [
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇺🇸" }
] as const;

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params.lang as "zh" | "en";
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  // 获取当前路径（去掉语言前缀）
  const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');

  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-2">
          <span className="text-lg">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
        </div>
      }
    >
      {languages.map((lang) => (
        <DropdownMenuItem key={lang.code}>
          <Link 
            href={`/${lang.code}${pathWithoutLang}`}
            className="flex items-center gap-2"
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenu>
  );
}
