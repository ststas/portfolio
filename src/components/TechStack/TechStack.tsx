import { memo } from "react";

import { Sections } from "@/components/common/constants";
import Section from "@/components/common/Section";
import { usePortfolioTranslations } from "@/i18n/usePortfolioTranslations";

import { TECH_ITEMS } from "./constants";
import TechCard from "./TechCard";

function TechStack(): JSX.Element {
  const {
    [Sections.techStack]: { techItems, title },
  } = usePortfolioTranslations();

  return (
    <Section id="stack-area" title={title}>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {TECH_ITEMS.map((techItem) => (
          <TechCard key={techItem.name} item={techItem} translations={techItems[techItem.name]} />
        ))}
      </div>
    </Section>
  );
}

export default memo(TechStack);
