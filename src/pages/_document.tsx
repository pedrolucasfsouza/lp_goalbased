import Analytics from "@/components/Analytics";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>Alphamar Invest LP</title>
      <link rel="icon" href="/favicon.svg" sizes="any" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
