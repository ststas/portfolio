import { useMemo } from "react";

import { Sections } from "@/components/common/constants";
import { SectionType } from "@/components/common/types";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import { MENU_H_REFS } from "./constants";
import { MenuItem } from "./types";

export function useMenuItems(): MenuItem[] {
  const {
    header: { menu },
  } = usePortfolioTranslations();

  return useMemo(
    () =>
      Object.entries(Sections).map(([key]) => ({
        href: MENU_H_REFS[key as SectionType],
        label: menu[key as SectionType],
      })),
    [menu]
  );
}
