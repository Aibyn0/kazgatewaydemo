import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KazGateway | 您在哈萨克斯坦的中文本地化服务平台",
  description: "提供阿拉木图中文翻译、司机接送、酒店住宿、商务咨询等服务。",
  metadataBase: new URL("https://kazgateway.example.com"),
  openGraph: {
    title: "KazGateway",
    description: "阿拉木图中文化本地服务平台",
    url: "https://kazgateway.example.com",
    siteName: "KazGateway",
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}


