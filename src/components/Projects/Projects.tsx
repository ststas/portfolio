import { memo } from "react";

import Section from "@/components/common/Section";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import { Sections } from "../common/constants";

import { PROJECTS } from "./constants";
import ProjectCard from "./ProjectCard";

function Projects(): JSX.Element {
  const {
    [Sections.projects]: { title, list, buttons },
  } = usePortfolioTranslations();

  return (
    <Section id="projects-area" title={title}>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            buttonsTranslations={buttons}
            project={project}
            translations={list[project.name]}
          />
        ))}
      </div>
    </Section>
  );
}

export default memo(Projects);
