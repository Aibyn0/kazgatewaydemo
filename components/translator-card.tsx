"use client";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Translator } from "@/types/services";

interface TranslatorCardProps {
  translator: Translator;
  lang: "zh" | "en";
}

export function TranslatorCard({ translator, lang }: TranslatorCardProps) {
  const t = (zh: string, en: string) => (lang === "zh" ? zh : en);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <Image
            src={translator.photo}
            alt={translator.name}
            fill
            className="object-cover rounded-full"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-avatar.svg";
            }}
          />
        </div>
        <CardTitle className="text-lg">{translator.name}</CardTitle>
        <CardDescription>
          {translator.city} • {translator.experience}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* 语言能力 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("语言能力", "Languages")}</h4>
          <div className="flex flex-wrap gap-1">
            {Object.entries(translator.proficiency).map(([lang, level]) => (
              <span
                key={lang}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {lang === "russian" ? t("俄语", "Russian") :
                 lang === "kazakh" ? t("哈萨克语", "Kazakh") :
                 lang === "english" ? t("英语", "English") :
                 lang === "chinese" ? t("中文", "Chinese") : lang}: {level}
              </span>
            ))}
          </div>
        </div>

        {/* 专业领域 */}
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">{t("专业领域", "Specialties")}</h4>
          <div className="flex flex-wrap gap-1">
            {translator.specialties.map((specialty) => (
              <span
                key={specialty}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* 价格 */}
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{t("日费率", "Daily Rate")}</span>
            <span className="font-bold text-primary">${translator.dailyRate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{t("带车服务", "With Car")}</span>
            <span className="font-bold text-primary">${translator.withCarRate}</span>
          </div>
        </div>

        {/* 评分和完成任务 */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{translator.rating}</span>
            </div>
            <span className="text-gray-600">
              {translator.completedJobs} {t("个项目", "projects")}
            </span>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-sm text-gray-600 mb-4 flex-1">
          {translator.description}
        </p>

        {/* 预约按钮 */}
        <div className="mt-auto">
          <Button 
            size="sm" 
            className="w-full"
          >
            {t("预约此翻译师", "Book This Translator")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
