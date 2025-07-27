import "@/app/globals.css";
import "@/i18n";

import type { AppProps } from "next/app";

import { TranslationProvider } from "@/providers/TranslationProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}
