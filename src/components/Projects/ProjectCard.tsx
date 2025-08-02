import Image from "next/image";
import { memo, useState } from "react";

import Button from "@/components/common/Button";
import Popup from "@/components/common/Popup";

import { BUTTON, BUTTONS } from "./constants";
import type { ProjectButtonType, ProjectType } from "./types";

type ProjectCardProps = {
  project: ProjectType;
  translations: {
    name: string;
    description: string;
    fullDescription?: string;
  };
  buttonsTranslations: Record<ProjectButtonType, string>;
};

function ProjectCard({
  project,
  translations,
  buttonsTranslations,
}: ProjectCardProps): JSX.Element {
  const { image, mediaSrc, webLink, githubLink, mediaType } = project;
  const { name, description, fullDescription } = translations;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="border-none bg-transparent">
      <div className="relative mb-4 aspect-square w-full">
        <Image
          fill
          alt={description}
          className="object-mid cursor-pointer rounded border border-gray-600 object-cover saturate-0 filter transition-all duration-400 ease-in-out hover:scale-[1.015] hover:filter-[saturate(115%)]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          src={image}
          onClick={() => setIsPopupOpen(true)}
        />
      </div>
      <div className="p-0">
        <h5 className="mb-1 truncate text-center text-xl font-bold tracking-tighter">{name}</h5>
        <h5 className="text-m mb-4 truncate text-center tracking-tighter">{description}</h5>
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
      <Popup
        description={fullDescription || description}
        isOpen={isPopupOpen}
        mediaSrc={mediaSrc}
        mediaType={mediaType}
        title={name}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}

export default memo(ProjectCard);
