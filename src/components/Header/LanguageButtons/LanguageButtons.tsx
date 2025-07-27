import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { GlobeIcon } from "@/components/common/GlobeIcon";
import { SUPPORTED_LOCALES } from "@/i18n/locales";
import { SupportedLocaleType } from "@/i18n/types";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";
import { setLocaleCookie } from "@/utils/cookies";

import LanguageButton from "./LanguageButton";

type Props = {
  onCloseMenu: () => void;
};

function LanguageButtons({ onCloseMenu }: Props): JSX.Element {
  const { i18n } = useTranslation();
  const {
    header: { languages },
  } = usePortfolioTranslations();

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      if (typeof window !== "undefined") {
        document.documentElement.dir = lng === "he" ? "rtl" : "ltr";
        setLocaleCookie(lng);
        onCloseMenu();
      }
    },
    [i18n, onCloseMenu]
  );

  return (
    <div className="flex items-center gap-2 px-4">
      <div className="flex items-center rtl:mr-0 rtl:ml-3">
        <GlobeIcon className="h-5 w-5 text-black" />
      </div>
      {Object.values(SUPPORTED_LOCALES).map((language) => (
        <LanguageButton
          key={language}
          buttonText={languages[language]}
          currentLanguage={i18n.language as SupportedLocaleType}
          selectedLanguage={language}
          onClick={changeLanguage}
        />
      ))}
    </div>
  );
}

export default memo(LanguageButtons);
