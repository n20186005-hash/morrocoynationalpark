import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";
import { homeSeo, languages, siteUrl } from "@/i18n/guides";
import { notFound } from "next/navigation";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = siteUrl;
  const locale = languages.find((value) => value === lang) ?? "en";
  const [title, description] = homeSeo[locale];
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Parque Nacional Morrocoy",
    },
    description,
    keywords: [
      "Parque Nacional Morrocoy",
      "Morrocoy National Park",
      "Venezuela travel",
      "Caribbean beaches",
      "coral reefs",
      "Falcón tourism",
      "cayos",
      "snorkeling",
      "diving",
      "mangroves",
    ],
    authors: [{ name: "Parque Nacional Morrocoy Travel Guide" }],
    creator: "Parque Nacional Morrocoy Travel Guide",
    publisher: "Parque Nacional Morrocoy Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: lang === "es" ? "es_VE" : lang === "zh" ? "zh_CN" : "en_US",
      alternateLocale: ["en_US", "es_VE", "zh_CN"].filter(l => !l.startsWith(lang)),
      url: `${baseUrl}/${lang}`,
      title,
      description,
      siteName: "Parque Nacional Morrocoy Travel Guide",
      images: [
        {
          url: "/gallery/parque-nacional-morrocoy (1).jpg",
          width: 1200,
          height: 630,
          alt: "Parque Nacional Morrocoy - Caribbean National Park",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/gallery/parque-nacional-morrocoy (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "en": `${baseUrl}/en`,
        "es": `${baseUrl}/es`,
        "zh": `${baseUrl}/zh`,
        "x-default": `${baseUrl}/en`,
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!languages.some((value) => value === lang)) notFound();
  return (
    <html lang={lang} className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
