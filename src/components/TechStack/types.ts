import { TECH_ITEMS_NAMES } from "./constants";

export type TechItemNameType = (typeof TECH_ITEMS_NAMES)[keyof typeof TECH_ITEMS_NAMES];

export type TechItemType = {
  name: TechItemNameType;
  icon: string;
  description: string;
  href: string;
};
