"use client";

import { useLang } from "./LangProvider";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLang();
  return (
    <div className="lang-switcher">
      {(["zh", "en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => setLocale(l)}
          aria-label={ui[locale].switchTo[l]}
          aria-pressed={locale === l}
          lang={l}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
