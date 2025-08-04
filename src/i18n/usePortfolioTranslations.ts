import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Sections } from "@/components/common/constants";
import { BUTTON, PROJECTS_NAMES } from "@/components/Projects/constants";
import { TECH_ITEMS_NAMES } from "@/components/TechStack/constants";

import { SUPPORTED_LOCALES } from "./locales";
import { PortfolioTranslationsType } from "./types";

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
        languages: {
          [SUPPORTED_LOCALES.en]: t("language.en"),
          [SUPPORTED_LOCALES.he]: t("language.he"),
          [SUPPORTED_LOCALES.ru]: t("language.ru"),
        },
      },
      introduction: {
        title: t("introduction.title"),
        subtitle: t("introduction.subtitle"),
        firstName: t("introduction.firstName"),
        lastName: t("introduction.lastName"),
        jobTitle: t("introduction.jobTitle"),
        cvButton: t("introduction.cvButton"),
        portfolioButton: t("introduction.portfolioButton"),
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
          [TECH_ITEMS_NAMES.Express]: {
            name: t("techStack.express.name"),
            description: t("techStack.express.description"),
          },
          [TECH_ITEMS_NAMES.Git]: {
            name: t("techStack.git.name"),
            description: t("techStack.git.description"),
          },
          [TECH_ITEMS_NAMES.ApolloGraphQL]: {
            name: t("techStack.apollo.name"),
            description: t("techStack.apollo.description"),
          },
          [TECH_ITEMS_NAMES.StoryBook]: {
            name: t("techStack.storybook.name"),
            description: t("techStack.storybook.description"),
          },
          [TECH_ITEMS_NAMES.Docker]: {
            name: t("techStack.docker.name"),
            description: t("techStack.docker.description"),
          },
          [TECH_ITEMS_NAMES.MongoDB]: {
            name: t("techStack.mongodb.name"),
            description: t("techStack.mongodb.description"),
          },
        },
      },
      [Sections.projects]: {
        title: t("projects.title"),
        list: {
          [PROJECTS_NAMES.next]: {
            name: t("projects.list.next.name"),
            description: t("projects.list.next.description"),
            fullDescription: t("projects.list.next.fullDescription"),
          },
          [PROJECTS_NAMES.movies]: {
            name: t("projects.list.movies.name"),
            description: t("projects.list.movies.description"),
            fullDescription: t("projects.list.movies.fullDescription"),
          },
          [PROJECTS_NAMES.mesto]: {
            name: t("projects.list.mesto.name"),
            description: t("projects.list.mesto.description"),
            fullDescription: t("projects.list.mesto.fullDescription"),
          },
          [PROJECTS_NAMES.todolist]: {
            name: t("projects.list.todolist.name"),
            description: t("projects.list.todolist.description"),
            fullDescription: t("projects.list.todolist.fullDescription"),
          },
          [PROJECTS_NAMES.drummachine]: {
            name: t("projects.list.drummachine.name"),
            description: t("projects.list.drummachine.description"),
            fullDescription: t("projects.list.drummachine.fullDescription"),
          },
          [PROJECTS_NAMES.express]: {
            name: t("projects.list.express.name"),
            description: t("projects.list.express.description"),
            fullDescription: t("projects.list.express.fullDescription"),
          },
          // [PROJECTS_NAMES.react]: {
          //   name: t("projects.list.react.name"),
          //   description: t("projects.list.react.description"),
          //   fullDescription: t("projects.list.react.fullDescription"),
          // },
          [PROJECTS_NAMES.game]: {
            name: t("projects.list.game.name"),
            description: t("projects.list.game.description"),
            fullDescription: t("projects.list.game.fullDescription"),
          },
          [PROJECTS_NAMES.javascript]: {
            name: t("projects.list.javascript.name"),
            description: t("projects.list.javascript.description"),
            fullDescription: t("projects.list.javascript.fullDescription"),
          },
          [PROJECTS_NAMES.warTimer]: {
            name: t("projects.list.warTimer.name"),
            description: t("projects.list.warTimer.description"),
            fullDescription: t("projects.list.warTimer.fullDescription"),
          },
          [PROJECTS_NAMES.gridFlex]: {
            name: t("projects.list.gridFlex.name"),
            description: t("projects.list.gridFlex.description"),
            fullDescription: t("projects.list.gridFlex.fullDescription"),
          },
          [PROJECTS_NAMES.adaptive]: {
            name: t("projects.list.adaptive.name"),
            description: t("projects.list.adaptive.description"),
            fullDescription: t("projects.list.adaptive.fullDescription"),
          },
          [PROJECTS_NAMES.storyBook]: {
            name: t("projects.list.storyBook.name"),
            description: t("projects.list.storyBook.description"),
            fullDescription: t("projects.list.storyBook.fullDescription"),
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
