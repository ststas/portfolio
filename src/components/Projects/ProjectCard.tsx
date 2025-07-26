import Image from "next/image";
import { memo } from "react";

import Button from "@/components/common/Button";

import { BUTTON, BUTTONS } from "./constants";
import type { ProjectButtonType, ProjectType } from "./types";

type ProjectCardProps = {
  project: ProjectType;
  translations: {
    name: string;
    description: string;
  };
  buttonsTranslations: Record<ProjectButtonType, string>;
};

function ProjectCard({
  project,
  translations,
  buttonsTranslations,
}: ProjectCardProps): JSX.Element {
  const { image, webLink, githubLink } = project;
  const { name, description } = translations;

  return (
    <div className="border-none bg-transparent">
      <div className="relative mb-4 aspect-square w-full">
        <Image
          fill
          alt={description}
          className="object-mid rounded border border-gray-600 object-cover saturate-0 filter transition-all duration-400 ease-in-out hover:scale-[1.015] hover:filter-[saturate(115%)]"
          src={image}
        />
      </div>
      <div className="p-0">
        <h5 className="mb-4 truncate text-xl font-bold tracking-wider">{name}</h5>
        <div className="grid w-full grid-cols-2 gap-4">
          {BUTTONS.map((button) => {
            const link = button.type === BUTTON.web ? webLink : githubLink;

            return (
              <Button
                key={button.type}
                className={button.className}
                disabled={!link}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {buttonsTranslations[button.type]}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
