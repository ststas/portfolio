import Link from "next/link";
import { memo } from "react";

import LanguageButtons from "@/components/Header/LanguageButtons/LanguageButtons";

import { MenuClickHandler, MenuItem } from "./types";

type Props = {
  items: MenuItem[];
  isOpen: boolean;
  onItemClick: MenuClickHandler;
};

function MobileMenu({ items, isOpen, onItemClick }: Props): JSX.Element {
  return (
    <div
      className={`grid transition-all duration-200 ease-in-out md:hidden ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <div className="flex flex-col space-y-4 bg-[lightgray] py-4">
          {items.map((item) => (
            <Link
              key={item.href}
              className="rounded-lg px-4 py-2 text-black transition-colors hover:bg-gray-200"
              href={item.href}
              onClick={onItemClick}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex">
            <LanguageButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MobileMenu);
