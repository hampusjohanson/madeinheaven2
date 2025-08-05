import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stjärntecken Kompatibilitet',
  description: 'Upptäck hur väl ditt stjärntecken passar med andra för kärlek och vänskap',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {children}
      </body>
    </html>
  )
} 