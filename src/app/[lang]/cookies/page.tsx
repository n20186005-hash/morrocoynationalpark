import type { Metadata } from "next";
import CookiesClient from "./CookiesClient";

export const metadata: Metadata = {
  title: "Cookie 设置 | Pozos Azules 旅行指南",
  description: "管理您的 Cookie 偏好设置",
};

export default async function CookiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <CookiesClient initialLocale={lang} />;
}
