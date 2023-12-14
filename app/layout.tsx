import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notify',
  description: 'Not your average notes service',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo2.png",
        href: "/logo2.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo1.png",
        href: "/logo1.png",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
        storageKey='notify-theme'>
          {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
