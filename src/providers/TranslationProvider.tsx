import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { FallBack } from "@/components/common/FallBack";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function TranslationProvider({ children, fallback = <FallBack /> }: Props): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const { ready } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !ready) {
    return fallback as JSX.Element;
  }

  return children as JSX.Element;
}
