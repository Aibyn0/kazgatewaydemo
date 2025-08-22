"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact({ params }: { params: { lang: "zh" | "en" } }) {
  const { lang } = params;
  const [status, setStatus] = useState<string | null>(null);
  async function onSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch(`/api/contact`, { method: "POST", body: formData });
    if (res.ok) setStatus(lang === "zh" ? "提交成功，我们会尽快联系您" : "Submitted, we will contact you soon");
    else setStatus(lang === "zh" ? "提交失败，请稍后再试" : "Failed, please try later");
  }
  return (
    <div className="container-responsive py-10">
      <h1 className="text-2xl font-semibold mb-6">{lang === "zh" ? "联系与咨询" : "Contact"}</h1>
      <form
        action={async (fd) => {
          await onSubmit(fd);
        }}
        className="space-y-4 max-w-xl"
      >
        <div className="grid gap-2">
          <Label htmlFor="name">{lang === "zh" ? "姓名" : "Name"}</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="service">{lang === "zh" ? "意向服务" : "Interested Service"}</Label>
          <Input id="service" name="service" placeholder={lang === "zh" ? "如：机场接送" : "e.g., airport transfer"} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">{lang === "zh" ? "备注/需求" : "Message"}</Label>
          <Input id="message" name="message" />
        </div>
        <Button type="submit">{lang === "zh" ? "提交" : "Submit"}</Button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </form>
    </div>
  );
}


