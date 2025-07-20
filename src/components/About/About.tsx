import { memo } from "react";

import Section from "components/common/Section";
import { Sections } from "components/common/constants";
import { usePortfolioTranslations } from "i18n/usePortfolioTranslations";

function About(): JSX.Element {
  const {
    [Sections.about]: { title, paragraphs },
  } = usePortfolioTranslations();

  return (
    <Section id="about-me-area" title={title}>
      <div className="space-y-4 text-sm text-gray-700 sm:space-y-6 sm:text-base">
        {Object.entries(paragraphs).map(([key, paragraph]) => (
          <p key={key} className="block break-words">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default memo(About);
