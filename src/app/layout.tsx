import { Metadata } from "next";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "FHMS - Portfolio",
  description: "React Developer",
  keywords: "React, Developer, JavaScript, TypeScript",
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
    <html lang="en-US">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
