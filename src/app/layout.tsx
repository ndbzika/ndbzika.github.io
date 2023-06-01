import { Providers } from './providers'

export const metadata = {
  title: 'Portfólio',
  description: 'Junior React Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body>
        <Providers>
            {children}
          </Providers>
      </body>
    </html>
  )
}
