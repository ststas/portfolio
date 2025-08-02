import { MediaType } from "@/components/common/types";

import { BUTTON, PROJECTS_NAMES } from "./constants";

export type ProjectNameType = (typeof PROJECTS_NAMES)[keyof typeof PROJECTS_NAMES];

export type ProjectType = {
  name: ProjectNameType;
  image: string;
  mediaSrc: string;
  mediaType?: MediaType;
  webLink?: string;
  githubLink?: string;
};

export type ProjectButtonType = (typeof BUTTON)[keyof typeof BUTTON];
