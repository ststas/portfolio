import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { PortfolioTranslationsType } from "./types";
import { Sections } from "@/components/common/constants";
import { TECH_ITEMS_NAMES } from "@/components/TechStack/constants";
import { BUTTON, PROJECTS_NAMES } from "@/components/Projects/constants";

export function usePortfolioTranslations(): PortfolioTranslationsType {
  const { t } = useTranslation();

  return useMemo(
    () => ({
      header: {
        title: t("header.title"),
        menu: {
          [Sections.about]: t("menu.about"),
          [Sections.techStack]: t("menu.techStack"),
          [Sections.projects]: t("menu.projects"),
          [Sections.contacts]: t("menu.contacts"),
        },
      },
      introduction: {
        title: t("introduction.title"),
        subtitle: t("introduction.subtitle"),
        firstName: t("introduction.firstName"),
        lastName: t("introduction.lastName"),
        jobTitle: t("introduction.jobTitle"),
        cvButton: t("introduction.cvButton"),
      },
      [Sections.about]: {
        title: t("about.title"),
        paragraphs: {
          intro: t("about.intro"),
          experience: t("about.experience"),
        },
      },
      [Sections.techStack]: {
        title: t("techStack.title"),
        techItems: {
          [TECH_ITEMS_NAMES.HTML]: {
            name: t("techStack.html.name"),
            description: t("techStack.html.description"),
          },
          [TECH_ITEMS_NAMES.CSS]: {
            name: t("techStack.css.name"),
            description: t("techStack.css.description"),
          },
          [TECH_ITEMS_NAMES.JavaScript]: {
            name: t("techStack.javascript.name"),
            description: t("techStack.javascript.description"),
          },
          [TECH_ITEMS_NAMES.TypeScript]: {
            name: t("techStack.typescript.name"),
            description: t("techStack.typescript.description"),
          },
          [TECH_ITEMS_NAMES.React]: {
            name: t("techStack.react.name"),
            description: t("techStack.react.description"),
          },
          [TECH_ITEMS_NAMES.NextJS]: {
            name: t("techStack.next.name"),
            description: t("techStack.next.description"),
          },
          [TECH_ITEMS_NAMES.NodeJS]: {
            name: t("techStack.node.name"),
            description: t("techStack.node.description"),
          },
          [TECH_ITEMS_NAMES.Git]: {
            name: t("techStack.git.name"),
            description: t("techStack.git.description"),
          },
        },
      },
      [Sections.projects]: {
        title: t("projects.title"),
        list: {
          [PROJECTS_NAMES.next]: {
            name: t("projects.list.next.name"),
            description: t("projects.list.next.description"),
          },
          [PROJECTS_NAMES.movies]: {
            name: t("projects.list.movies.name"),
            description: t("projects.list.movies.description"),
          },
          [PROJECTS_NAMES.mesto]: {
            name: t("projects.list.mesto.name"),
            description: t("projects.list.mesto.description"),
          },
          [PROJECTS_NAMES.todolist]: {
            name: t("projects.list.todolist.name"),
            description: t("projects.list.todolist.description"),
          },
          [PROJECTS_NAMES.drummachine]: {
            name: t("projects.list.drummachine.name"),
            description: t("projects.list.drummachine.description"),
          },
          [PROJECTS_NAMES.express]: {
            name: t("projects.list.express.name"),
            description: t("projects.list.express.description"),
          },
          [PROJECTS_NAMES.react]: {
            name: t("projects.list.react.name"),
            description: t("projects.list.react.description"),
          },
          [PROJECTS_NAMES.game]: {
            name: t("projects.list.game.name"),
            description: t("projects.list.game.description"),
          },
          [PROJECTS_NAMES.javascript]: {
            name: t("projects.list.javascript.name"),
            description: t("projects.list.javascript.description"),
          },
          [PROJECTS_NAMES.warTimer]: {
            name: t("projects.list.warTimer.name"),
            description: t("projects.list.warTimer.description"),
          },
          [PROJECTS_NAMES.gridFlex]: {
            name: t("projects.list.gridFlex.name"),
            description: t("projects.list.gridFlex.description"),
          },
          [PROJECTS_NAMES.adaptive]: {
            name: t("projects.list.adaptive.name"),
            description: t("projects.list.adaptive.description"),
          },
        },
        buttons: {
          [BUTTON.web]: t("projects.buttons.web"),
          [BUTTON.git]: t("projects.buttons.github"),
        },
      },
      [Sections.contacts]: {
        title: t("contacts.title"),
      },
      footer: {
        title: t("footer.title"),
        rights: t("footer.rights"),
        contacts: t("footer.contacts"),
      },
    }),
    [t]
  );
}
