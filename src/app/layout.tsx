import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

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

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "morrocoynationalpark.com"}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Parque Nacional Morrocoy — Falcón, Venezuela",
    template: "%s | Parque Nacional Morrocoy",
  },
  description:
    "A travel guide to Parque Nacional Morrocoy, the stunning Caribbean coastal national park in Falcón, Venezuela, featuring coral reefs, mangroves, and tropical dry forests.",
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
    locale: "es_VE",
    alternateLocale: ["en_US", "zh_CN"],
    url: baseUrl,
    title: "Parque Nacional Morrocoy — Falcón, Venezuela",
    description:
      "A travel guide to Parque Nacional Morrocoy, the stunning Caribbean coastal national park in Falcón, Venezuela.",
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
    title: "Parque Nacional Morrocoy — Falcón, Venezuela",
    description:
      "A travel guide to Parque Nacional Morrocoy, the stunning Caribbean coastal national park in Falcón, Venezuela.",
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
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
      "zh": "/zh",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
