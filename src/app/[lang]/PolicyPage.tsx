import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ui, isLocale } from "@/i18n/ui";
import { legal } from "@/i18n/legal";
import { translations } from "@/i18n/translations";
import { siteUrl, languages } from "@/i18n/guides";
import Link from "next/link";
import { LangProvider } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Policy = keyof Pick<(typeof ui)["en"], "privacy" | "terms" | "cookies">;
type Props = { params: Promise<{ lang: string }> };

export async function policyMetadata({ params }: Props, policy: Policy): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const title = ui[lang][policy];
  const description = policy === "cookies" ? legal[lang].cookies.intro : legal[lang][policy][0][1];
  const canonical = `${siteUrl}/${lang}/${policy}`;
  return {
    title, description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(languages.map((locale) => [locale, `${siteUrl}/${locale}/${policy}`])),
        "x-default": `${siteUrl}/en/${policy}`,
      },
    },
    openGraph: { title, description, url: canonical, siteName: ui[lang].site },
    twitter: { title, description },
  };
}

export async function PolicyPage({ params }: Props, policy: "privacy" | "terms") {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = translations[lang];
  const labels = ui[lang];

  return (
    <div className="policy-page">
      <nav className="site-nav scrolled" style={{ background: "var(--color-deep)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href={`/${lang}`} style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff", textDecoration: "none" }}>
            {labels.park}
          </Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div className="nav-links">
            <Link href={`/${lang}`}>{t.nav.about}</Link>
          </div>
          <LangProvider initialLocale={lang}><LanguageSwitcher /></LangProvider>
        </div>
      </nav>

      <main className="policy-content" style={{ marginTop: "80px" }}>
        <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
              {labels[policy]}
            </h1>
            <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>
              {labels.updated}
            </p>

            {legal[lang][policy].map(([heading, paragraph, ...items]) => (
              <section key={heading} style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
                  {heading}
                </h2>
                <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: items.length ? "1rem" : undefined }}>
                  {paragraph}
                </p>
                {items.length > 0 && (
                  <ul style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", paddingLeft: "1.5rem" }}>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
              <Link href={`/${lang}`} style={{ color: "var(--color-teal)", textDecoration: "none" }}>
                ← {labels.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="site-footer" style={{ marginTop: "4rem" }}>
        <p className="footer-text">{t.footer.text}</p>
        <p className="footer-made">{t.footer.made}</p>
      </footer>
    </div>
  );
}
