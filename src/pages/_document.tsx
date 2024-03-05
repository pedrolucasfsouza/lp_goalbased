import Analytics from "@/components/Analytics";
import GoogleAds from "@/components/GoogleAds";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>Alphamar Investimentos - Objetivos</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Head />
        <body>
            <Main />
              <NextScript />
                <GoogleAds />
            <Analytics />
        </body>
    </Html>
  );
}
