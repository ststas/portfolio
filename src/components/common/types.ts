import { Sections, PopupMediaType } from "./constants";

export type SectionType = (typeof Sections)[keyof typeof Sections];

export type MediaType = (typeof PopupMediaType)[keyof typeof PopupMediaType];
