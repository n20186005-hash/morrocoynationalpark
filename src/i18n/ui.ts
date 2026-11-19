import type { Locale } from "./translations";

export const ui = {
  en: {
    park: "Morrocoy National Park", site: "Morrocoy National Park Travel Guide",
    privacy: "Privacy Policy", terms: "Terms of Service", cookies: "Cookie Settings",
    home: "Back to Home", updated: "Last updated: June 2026",
    map: "Map of Morrocoy National Park", photo: "Morrocoy National Park photo",
    close: "Close photo", prev: "Previous photo", next: "Next photo",
    switchTo: { en: "Switch to English", es: "Switch to Spanish", zh: "Switch to Simplified Chinese" },
  },
  es: {
    park: "Parque Nacional Morrocoy", site: "Guía del Parque Nacional Morrocoy",
    privacy: "Política de privacidad", terms: "Condiciones del servicio", cookies: "Configuración de cookies",
    home: "Volver al inicio", updated: "Última actualización: junio de 2026",
    map: "Mapa del Parque Nacional Morrocoy", photo: "Foto del Parque Nacional Morrocoy",
    close: "Cerrar foto", prev: "Foto anterior", next: "Foto siguiente",
    switchTo: { en: "Cambiar a inglés", es: "Cambiar a español", zh: "Cambiar a chino simplificado" },
  },
  zh: {
    park: "莫罗科伊国家公园", site: "莫罗科伊国家公园旅行指南",
    privacy: "隐私政策", terms: "服务条款", cookies: "Cookie 设置",
    home: "返回首页", updated: "最后更新时间：2026 年 6 月",
    map: "莫罗科伊国家公园位置地图", photo: "莫罗科伊国家公园照片",
    close: "关闭照片", prev: "上一张照片", next: "下一张照片",
    switchTo: { en: "切换至英语", es: "切换至西班牙语", zh: "切换至简体中文" },
  },
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "es" || value === "zh";
}

export const sourceLabels: Record<string, Record<Locale, string>> = {
  "Decreto 113": { es: "Decreto 113", en: "Decree 113", zh: "第 113 号法令" },
  "Estudio geomorfológico": { es: "Estudio geomorfológico", en: "Geomorphological study", zh: "地貌研究" },
  "INPARQUES · Cuare": { es: "INPARQUES · Cuare", en: "INPARQUES · Cuare Wildlife Refuge", zh: "INPARQUES · 夸雷野生动物保护区" },
  "INPARQUES · Morrocoy": { es: "INPARQUES · Morrocoy", en: "INPARQUES · Morrocoy National Park", zh: "INPARQUES · 莫罗科伊国家公园" },
  "INPARQUES · Playuela": { es: "INPARQUES · Playuela", en: "INPARQUES · Playuela Beach", zh: "INPARQUES · 普拉尤埃拉海滩" },
};
