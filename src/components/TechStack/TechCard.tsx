import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import type { TechItemType } from "./types";

type Props = {
  item: TechItemType;
  translations: {
    name: string;
    description: string;
  };
};

function TechCard({ item, translations }: Props): JSX.Element {
  const { icon, href } = item;
  const { name, description } = translations;

  return (
    <Link
      className="flex flex-col items-center justify-center p-4 transition-all duration-400 ease-in-out hover:scale-110"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="relative mb-2 h-20 w-20">
        <Image
          fill
          alt={description}
          className="object-contain saturate-0 filter transition-all duration-400 ease-in-out hover:filter-none"
          src={icon}
        />
      </div>
      <span className="text-gray-700">{name}</span>
    </Link>
  );
}

export default memo(TechCard);
