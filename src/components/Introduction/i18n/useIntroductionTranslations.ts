import { useTranslation } from "react-i18next";
import { IntroductionTranslationsType } from "./types";
import { useMemo } from "react";

export function useIntroductionTranslations(): IntroductionTranslationsType {
  const { t } = useTranslation();

  return useMemo(
    () => ({
      title: t("introduction.title"),
      subtitle: t("introduction.subtitle"),
      firstName: t("introduction.firstName"),
      lastName: t("introduction.lastName"),
      jobTitle: t("introduction.jobTitle"),
      cvButton: t("introduction.cvButton"),
    }),
    [t]
  );
}
