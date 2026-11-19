"use client";

import React, { createContext, useContext, useCallback } from "react";
import { translations, type Locale, type Translations } from "@/i18n/translations";
import { isLocale } from "@/i18n/ui";
import { useRouter, usePathname } from "next/navigation";

interface LangContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const defaultT: Translations = translations.es;

const LangContext = createContext<LangContextValue>({
  locale: "es",
  setLocale: () => {},
  t: defaultT,
});

export function LangProvider({ children, initialLocale }: { children: React.ReactNode, initialLocale?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const routeLocale = pathname.split("/")[1];
  const locale = isLocale(routeLocale) ? routeLocale : isLocale(initialLocale) ? initialLocale : "en";
  
  const setLocale = useCallback((l: Locale) => {
    // Replace the first segment of the path with the new language
    const segments = pathname.split('/');
    if (segments.length > 1 && ["en", "es", "zh"].includes(segments[1])) {
      segments[1] = l;
      router.push(segments.join('/'));
    } else {
      router.push(`/${l}${pathname === '/' ? '' : pathname}`);
    }
  }, [pathname, router]);

  const t = translations[locale];
  return (
    <LangContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
