import "@/app/globals.css";
import "@/i18n";

import type { AppProps } from "next/app";
import Head from "next/head";

import { TranslationProvider } from "@/providers/TranslationProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Head>
        <title>Portfolio - Stanislav Zaitsev</title>
        <meta
          content="Personal developer portfolio showcasing projects, skills, and experience"
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}
