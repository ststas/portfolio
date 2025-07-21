import { Sections } from "components/common/constants";
import { SectionType } from "components/common/types";

export const MENU_H_REFS: Record<SectionType, string> = {
  [Sections.about]: "#about-me-area",
  [Sections.techStack]: "#stack-area",
  [Sections.projects]: "#projects-area",
  [Sections.contacts]: "#contacts-area",
};
