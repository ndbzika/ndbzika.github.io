import { Navbar } from "@/components/Navbar";
import { Providers } from "./providers";

import "../../styles/global.scss";

export const metadata = {
  title: "Porfólio",
  description: "React Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
