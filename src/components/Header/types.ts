export type MenuItem = {
  href: string;
  label: string;
};

export type MenuClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;
