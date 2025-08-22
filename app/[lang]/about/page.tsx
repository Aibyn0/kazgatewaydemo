export default function About({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  return (
    <div className="container-responsive py-10 space-y-4">
      <h1 className="text-2xl font-semibold">{lang === "zh" ? "关于我们" : "About Us"}</h1>
      <p className="text-muted-foreground">
        {lang === "zh"
          ? "KazGateway 致力于为来到哈萨克斯坦（特别是阿拉木图）的中文用户提供可信赖的本地化服务。"
          : "KazGateway provides reliable localized services for Chinese visitors and businesses in Kazakhstan, especially Almaty."}
      </p>
    </div>
  );
}


