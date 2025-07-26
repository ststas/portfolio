import Image from "next/image";
import Link from "next/link";
import { JSX, memo } from "react";

import Section from "@/components/common/Section";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import { CV_BUTTON_LINK } from "./constants";

function Introduction(): JSX.Element {
  const { introduction } = usePortfolioTranslations();
  const { title, subtitle, firstName, lastName, jobTitle, cvButton } = introduction;

  return (
    <Section className="pt-[54px] sm:pt-[18px] md:pt-[54px]" id="hello-area" title={title}>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="max-w-full">
          <h2 className="mb-0 text-[39px] font-bold break-words sm:text-[39px] md:text-[54px]">
            {subtitle}
          </h2>
          <h2 className="mb-0 text-[39px] font-bold break-words sm:text-[39px] md:text-[54px]">
            {firstName}
          </h2>

          <h2 className="mb-0 text-[39px] font-bold break-words sm:text-[39px] md:text-[54px]">
            {lastName}
          </h2>
          <h4 className="mb-[10%] text-xl sm:text-2xl">{jobTitle}</h4>
          <Link
            className="inline-block rounded-lg border border-black px-4 py-2 transition-colors hover:bg-gray-200 sm:px-6 sm:py-3"
            href={CV_BUTTON_LINK}
            rel="noopener noreferrer"
            target="_blank"
          >
            {cvButton}
          </Link>
        </div>
        <div className="relative h-48 w-full sm:h-64 md:h-96">
          <Image
            fill
            priority
            alt="Stanislav Zaitsev"
            className="rounded-lg object-cover"
            src="/images/my-avatar.jpg"
          />
        </div>
      </div>
    </Section>
  );
}

export default memo(Introduction);
