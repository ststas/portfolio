import { JSX, memo } from "react";

import { Sections } from "@/components/common/constants";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import { SOCIAL_LINKS } from "./constants";
import SocialLink from "./SocialLink";

function Footer(): JSX.Element {
  const {
    [Sections.contacts]: { title },
    footer: { rights, title: footerTitle },
  } = usePortfolioTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <section className="text-center" id="contacts-area">
            <h5 className="mb-6 text-xl font-bold">{title}</h5>
            <div className="mb-8 flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <SocialLink key={link.href} link={link} />
              ))}
            </div>
          </section>
          <section className="text-center">
            <p className="text-gray-600">{footerTitle}</p>
            <p className="text-xs text-gray-600">
              {rights} {currentYear}
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
