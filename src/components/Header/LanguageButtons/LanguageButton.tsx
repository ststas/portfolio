import { memo } from "react";

import { SupportedLocaleType } from "@/i18n/types";

type Props = {
  buttonText: string;
  currentLanguage: SupportedLocaleType;
  selectedLanguage: SupportedLocaleType;
  onClick: (lng: string) => void;
};

function LanguageButton({
  buttonText,
  currentLanguage,
  selectedLanguage,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      className={`w-full rounded-lg px-3 text-black transition-colors hover:bg-gray-200 ${
        currentLanguage === selectedLanguage ? "bg-gray-200 font-semibold" : ""
      }`}
      onClick={() => onClick(selectedLanguage)}
    >
      {buttonText.toUpperCase()}
    </button>
  );
}

export default memo(LanguageButton);
