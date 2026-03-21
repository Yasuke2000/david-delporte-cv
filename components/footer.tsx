'use client'

import { useTheme } from './theme-provider'

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`py-8 px-4 border-t ${
      theme === 'dark' ? 'border-navy-800' : 'border-navy-200'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm font-mono ${
          theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
        }`}>
          &copy; {new Date().getFullYear()} David Delporte
        </p>
        <p className={`text-xs font-mono ${
          theme === 'dark' ? 'text-navy-600' : 'text-navy-300'
        }`}>
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
