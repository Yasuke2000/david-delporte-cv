import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'David Delporte — IT Operations & Security Engineer',
  description: 'David Delporte — IT Operations & Security Engineer based in Belgium. Specializing in M365, Azure, cybersecurity, and multi-site infrastructure management.',
  keywords: ['IT Security', 'System Engineer', 'Azure', 'M365', 'Cybersecurity', 'Belgium', 'Infrastructure'],
  authors: [{ name: 'David Delporte' }],
  openGraph: {
    title: 'David Delporte — IT Operations & Security Engineer',
    description: 'IT Operations & Security Engineer based in Belgium. Specializing in M365, Azure, cybersecurity, and multi-site infrastructure management.',
    type: 'website',
    locale: 'en_BE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-navy-950 text-navy-100 dark:bg-navy-950 dark:text-navy-100`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
