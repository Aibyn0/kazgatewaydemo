interface ContactSectionProps {
  title: string;
  description: string;
  lang: "zh" | "en";
}

export function ContactSection({ title, description, lang }: ContactSectionProps) {
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <div className="bg-primary text-white rounded-lg p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-lg mb-6 opacity-90">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📱</span>
          <div>
            <div className="font-medium">{t("微信联系", "WeChat Contact")}</div>
            <div className="text-sm opacity-90">KazGateway_Official</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">💬</span>
          <div>
            <div className="font-medium">WhatsApp</div>
            <div className="text-sm opacity-90">+7-XXX-XXX-XXXX</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-sm opacity-75">
        {t("24小时内回复 • 专业服务 • 价格透明", "Reply within 24 hours • Professional service • Transparent pricing")}
      </div>
    </div>
  );
}
