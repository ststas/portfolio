import Link from "next/link";
import { memo } from "react";

import LanguageDropdown from "@/components/Header/LanguageButtons/LanguageDropdown";

import { MenuClickHandler, MenuItem } from "./types";

type Props = {
  items: MenuItem[];
  onItemClick: MenuClickHandler;
};

function DesktopMenu({ items, onItemClick }: Props): JSX.Element {
  return (
    <div className="hidden md:block" data-testid="desktop-menu">
      <div className="flex space-x-8 rtl:space-x-8">
        {items.map((item) => (
          <Link
            key={item.href}
            className="text-black hover:text-gray-700"
            data-testid={`nav-link-${item.href.replace("#", "")}`}
            href={item.href}
            onClick={onItemClick}
          >
            {item.label}
          </Link>
        ))}
        <LanguageDropdown />
      </div>
    </div>
  );
}

export default memo(DesktopMenu);
