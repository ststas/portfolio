import Link from "next/link";
import { memo } from "react";

import type { SocialLink as SocialLinkType } from "./types";

type Props = {
  link: SocialLinkType;
};

function SocialLink({ link }: Props): JSX.Element {
  return (
    <Link
      aria-label={link.label}
      className="h-6 w-6 text-2xl text-[#656565] transition-all duration-400 ease-in-out hover:scale-130 hover:text-[#0342fe]"
      href={link.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className={link.icon}></i>
    </Link>
  );
}

export default memo(SocialLink);
