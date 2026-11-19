"use client";

import Link from "next/link";
import { useState } from "react";
import { legal } from "@/i18n/legal";
import { ui } from "@/i18n/ui";
import { LangProvider } from "@/components/LangProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLang } from "@/components/LangProvider";

type CookieCategory = {
  id: string;
  active: boolean;
  alwaysActive?: boolean;
};

function CookiesContent({ lang }: { lang: string }) {
  const { t, locale } = useLang();
  const labels = ui[locale];
  const copy = legal[locale].cookies;
  
  const [cookieSettings, setCookieSettings] = useState<CookieCategory[]>([
    {
      id: "necessary",
      active: true,
      alwaysActive: true,
    },
    {
      id: "analytics",
      active: false,
    },
    {
      id: "preferences",
      active: true,
    },
    {
      id: "marketing",
      active: false,
    },
  ]);

  const handleToggle = (id: string) => {
    setCookieSettings((prev) =>
      prev.map((cookie) =>
        cookie.id === id && !cookie.alwaysActive
          ? { ...cookie, active: !cookie.active }
          : cookie
      )
    );
  };

  const handleSave = () => {
    alert(copy.saved);
  };

  const handleRejectAll = () => {
    setCookieSettings((prev) =>
      prev.map((cookie) =>
        cookie.alwaysActive ? cookie : { ...cookie, active: false }
      )
    );
  };

  return (
    <div className="policy-page">
      <nav className="site-nav scrolled" style={{ background: "var(--color-deep)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a href={`/${lang}`} style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, color: "#fff", textDecoration: "none" }}>
            {labels.park}
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div className="nav-links">
            <a href={`/${lang}`}>{t.nav.about}</a>
          </div>
          <LanguageSwitcher />
        </div>
      </nav>

      <main className="policy-content" style={{ marginTop: "80px" }}>
        <div style={{ minHeight: "100vh", background: "var(--color-cream)", padding: "2rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "3rem", borderRadius: "2px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
              {labels.cookies}
            </h1>
            <p style={{ color: "var(--color-stone)", marginBottom: "2rem" }}>
              {labels.updated}
            </p>

        <section style={{ marginBottom: "2rem" }}>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)", marginBottom: "1.5rem" }}>
            {copy.intro}
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          {cookieSettings.map((cookie, index) => (
            <div
              key={cookie.id}
              style={{
                padding: "1.5rem",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "2px",
                marginBottom: "1rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-deep)", margin: 0 }}>
                  {copy.categories[index][0]}
                </h3>
                <label style={{ display: "flex", alignItems: "center", cursor: cookie.alwaysActive ? "not-allowed" : "pointer" }}>
                  <input
                    type="checkbox"
                    aria-label={copy.categories[index][0]}
                    checked={cookie.active}
                    onChange={() => handleToggle(cookie.id)}
                    disabled={cookie.alwaysActive}
                    style={{ marginRight: "0.5rem" }}
                  />
                  <span style={{ fontSize: "0.9rem", color: cookie.active ? "var(--color-teal)" : "var(--color-stone)" }}>
                    {cookie.active ? copy.active : copy.inactive}
                  </span>
                </label>
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "var(--color-earth-soft)", marginBottom: "0.5rem" }}>
                {copy.categories[index][1]}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--color-stone)", margin: 0 }}>
                {copy.provider}{copy.categories[index][2]}
              </p>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-deep)", marginBottom: "1rem" }}>
            {copy.consent}
          </h2>
          <p style={{ lineHeight: "1.8", color: "var(--color-earth-soft)" }}>
            {copy.note}
          </p>
        </section>

        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
          <button
            onClick={handleSave}
            style={{
              padding: "0.75rem 2rem",
              background: "var(--color-teal)",
              color: "#fff",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {copy.save}
          </button>
          <button
            onClick={handleRejectAll}
            style={{
              padding: "0.75rem 2rem",
              background: "transparent",
              color: "var(--color-teal)",
              border: "1.5px solid var(--color-teal)",
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            {copy.reject}
          </button>
        </div>

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

export default function CookiesClient({ initialLocale }: { initialLocale?: string }) {
  return (
    <LangProvider initialLocale={initialLocale}>
      <CookiesContent lang={initialLocale || 'es'} />
    </LangProvider>
  );
}
