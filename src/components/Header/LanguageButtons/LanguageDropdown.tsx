import { memo, useCallback, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Button from "@/components/common/Button";
import { GlobeIcon } from "@/components/common/GlobeIcon";
import { SUPPORTED_LOCALES } from "@/i18n/locales";
import { SupportedLocaleType } from "@/i18n/types";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import LanguageButton from "./LanguageButton";

function LanguageDropdown(): JSX.Element {
  const { i18n } = useTranslation();
  const {
    header: { languages },
  } = usePortfolioTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      if (typeof window !== "undefined") {
        document.documentElement.dir = lng === "he" ? "rtl" : "ltr";
      }
      setIsOpen(false);
    },
    [i18n]
  );

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Закрытие dropdown при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative flex items-center justify-center">
      <Button
        aria-label="Change language"
        className="flex items-center justify-center rounded-lg text-black transition-colors hover:text-gray-700"
        onClick={toggleDropdown}
      >
        <GlobeIcon className="h-4.5 w-4.5 text-black" />
      </Button>

      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`absolute z-50 mt-4 w-32 rounded-lg border border-current bg-[lightgray] shadow-lg ${
              i18n.language === "he" ? "left-0" : "right-0"
            }`}
          >
            <div className="flex flex-col space-y-2 py-2">
              {Object.values(SUPPORTED_LOCALES).map((language) => (
                <div key={language} className="px-4">
                  <LanguageButton
                    buttonText={languages[language]}
                    currentLanguage={i18n.language as SupportedLocaleType}
                    selectedLanguage={language}
                    onClick={changeLanguage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LanguageDropdown);
