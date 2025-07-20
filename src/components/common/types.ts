import { Sections } from "./constants";

export type SectionType = (typeof Sections)[keyof typeof Sections];
