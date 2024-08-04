import '../styles/global.css'
import ClientProvider from '../providers/reduxProvider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'rss-react',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
