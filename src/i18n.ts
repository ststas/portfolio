import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

import { getLocaleCookie } from "@/utils/cookies";

i18n
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../public/locales/${language}/${namespace}.json`)
    )
  )
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: getLocaleCookie() || "en",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
