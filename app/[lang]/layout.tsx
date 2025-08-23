import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

const SUPPORTED = ["zh", "en"] as const;
type Lang = typeof SUPPORTED[number];

export default function LangLayout({ children, params }: { children: ReactNode; params: { lang: Lang } }) {
  const lang = params.lang;
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-slate-50">
        <div className="container-responsive py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">KazGateway</h3>
              <p className="text-slate-600 text-sm">
                您在哈萨克斯坦的中文本地化服务平台
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">服务</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href={`/${lang}/services/translators`} className="hover:underline">中文翻译</a></li>
                <li><a href={`/${lang}/services/drivers`} className="hover:underline">司机接送</a></li>
                <li><a href={`/${lang}/services/accommodations`} className="hover:underline">住宿服务</a></li>
                <li><a href={`/${lang}/services/consulting`} className="hover:underline">商务咨询</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">联系</h4>
              <p className="text-slate-600 text-sm">
                阿拉木图，哈萨克斯坦<br />
                © {new Date().getFullYear()} KazGateway
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}


