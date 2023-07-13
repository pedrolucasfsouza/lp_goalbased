import Analytics from "@/components/Analytics";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <title>BOLETAAI - A Central de Inteligencia do Investidor</title>
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
