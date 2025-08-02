import { Sections } from "@/components/common/constants";
import { SectionType } from "@/components/common/types";
import { ProjectButtonType, ProjectNameType } from "@/components/Projects/types";
import { TechItemNameType } from "@/components/TechStack/types";

import { SUPPORTED_LOCALES } from "./locales";

export type SupportedLocaleType = (typeof SUPPORTED_LOCALES)[keyof typeof SUPPORTED_LOCALES];

export type PortfolioTranslationsType = {
  header: {
    title: string;
    menu: Record<SectionType, string>;
    languages: Record<SupportedLocaleType, string>;
  };
  introduction: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    cvButton: string;
  };
  [Sections.about]: {
    title: string;
    paragraphs: {
      intro: string;
      experience: string;
    };
  };
  [Sections.techStack]: {
    title: string;
    techItems: Record<TechItemNameType, { name: string; description: string }>;
  };
  [Sections.projects]: {
    title: string;
    list: Record<ProjectNameType, { name: string; description: string; fullDescription?: string }>;
    buttons: Record<ProjectButtonType, string>;
  };
  [Sections.contacts]: {
    title: string;
  };
  footer: {
    title: string;
    rights: string;
    contacts: string;
  };
};
