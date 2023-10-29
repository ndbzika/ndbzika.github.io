import Providers from "./Providers";

export const metadata = {
  title: "FHMS - Portfolio",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
