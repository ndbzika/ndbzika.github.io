import { Metadata } from "next";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "FHMS",
  description: "Desenvolvedor Web Full Stack",
  keywords: "React, Desenvolvedor, JavaScript, TypeScript, Web, Full Stack, Frontend, Backend, Node, Next, React Native, Mobile, WebApp, PWA, Portfolio, FHMS, Flavio, Henrique, Marques, Sousa",
  icons: [
    '/FHMS.ico',
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body>
          {children}
        </body>
      </Providers>
    </html>
  );
}
