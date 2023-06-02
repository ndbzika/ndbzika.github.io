import { Providers } from './providers'

export const metadata = {
  title: 'Porfólio',
  description: 'React Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
