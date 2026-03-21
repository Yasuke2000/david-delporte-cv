'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { useTheme } from './theme-provider'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-navy-950/90 backdrop-blur-md border-b border-navy-800'
            : 'bg-white/90 backdrop-blur-md border-b border-navy-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono text-lg font-bold text-accent">
            {'>'} david.delporte
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-mono transition-colors hover:text-accent ${
                  theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                theme === 'dark' ? 'hover:bg-navy-800 text-navy-400' : 'hover:bg-navy-100 text-navy-600'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="/david-delporte-cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-accent text-navy-950 rounded-lg text-sm font-semibold hover:bg-accent-light transition-colors"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-navy-800 text-navy-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-navy-800 text-navy-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              theme === 'dark' ? 'bg-navy-950/95 border-navy-800' : 'bg-white/95 border-navy-200'
            } backdrop-blur-md`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-mono py-2 transition-colors hover:text-accent ${
                    theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/david-delporte-cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-accent text-navy-950 rounded-lg text-sm font-semibold w-fit"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
