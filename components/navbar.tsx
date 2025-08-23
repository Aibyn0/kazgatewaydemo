"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";

const navigation = [
  { name: "home", zh: "首页", en: "Home", href: "" },
  { name: "translators", zh: "翻译", en: "Translators", href: "/services/translators" },
  { name: "drivers", zh: "司机", en: "Drivers", href: "/services/drivers" },
  { name: "accommodations", zh: "住宿", en: "Stay", href: "/services/accommodations" },
  { name: "consulting", zh: "咨询", en: "Consulting", href: "/services/consulting" },
  { name: "about", zh: "关于", en: "About", href: "/about" },
  { name: "contact", zh: "联系", en: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as "zh" | "en";
  
  const isActive = (href: string) => {
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
    return currentPath === href;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center group">
            <div className="relative w-48 h-12">
              <Image
                src="/images/kazgatewaylogo.png"
                alt="KazGateway Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                priority
                onError={(e) => {
                  // 如果图片加载失败，隐藏图片元素
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  // 显示 fallback 文字
                  const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <span className="logo-fallback text-primary text-lg font-bold" style={{ display: 'none' }}>
                KazGateway
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${lang}${item.href}`}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive(item.href)
                    ? "bg-primary text-white shadow-md"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }
                `}
              >
                {lang === "zh" ? item.zh : item.en}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-slate-200 py-4">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`/${lang}${item.href}`}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${isActive(item.href)
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }
                `}
              >
                {lang === "zh" ? item.zh : item.en}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
