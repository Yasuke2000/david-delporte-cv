'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Server, ChevronDown } from 'lucide-react'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

import { personalInfo } from '@/data/resume'
import { useTheme } from './theme-provider'

const titles = [
  'IT Operations & Security Engineer',
  'System Engineer',
  'Cloud Infrastructure Specialist',
  'Cybersecurity Professional',
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && text === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setTitleIndex(i => (i + 1) % titles.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 30)
    } else {
      timeout = setTimeout(() => setText(currentTitle.slice(0, text.length + 1)), 80)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, titleIndex])

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'grid-bg' : 'grid-bg-light'
      }`}
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal-style greeting */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-8 ${
            theme === 'dark' ? 'bg-navy-800/50 text-accent border border-navy-700' : 'bg-navy-100 text-accent-dark border border-navy-200'
          }`}>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Available for hire
          </div>

          <h1 className={`text-5xl sm:text-7xl font-bold font-mono mb-4 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            {personalInfo.name}
          </h1>

          <div className="h-12 sm:h-14 flex items-center justify-center mb-6">
            <span className={`text-xl sm:text-2xl font-mono ${
              theme === 'dark' ? 'text-accent' : 'text-accent-dark'
            }`}>
              {text}
              <span className="cursor-blink text-accent">|</span>
            </span>
          </div>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${
            theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
          }`}>
            {personalInfo.tagline}
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all hover:text-accent ${
                theme === 'dark' ? 'bg-navy-800/50 text-navy-300 border border-navy-700 hover:border-accent' : 'bg-navy-50 text-navy-700 border border-navy-200 hover:border-accent'
              }`}
            >
              <Mail size={16} />
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all hover:text-accent ${
                theme === 'dark' ? 'bg-navy-800/50 text-navy-300 border border-navy-700 hover:border-accent' : 'bg-navy-50 text-navy-700 border border-navy-200 hover:border-accent'
              }`}
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all hover:text-accent ${
                theme === 'dark' ? 'bg-navy-800/50 text-navy-300 border border-navy-700 hover:border-accent' : 'bg-navy-50 text-navy-700 border border-navy-200 hover:border-accent'
              }`}
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={personalInfo.homelab}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono transition-all hover:text-accent ${
                theme === 'dark' ? 'bg-navy-800/50 text-navy-300 border border-navy-700 hover:border-accent' : 'bg-navy-50 text-navy-700 border border-navy-200 hover:border-accent'
              }`}
            >
              <Server size={16} />
              Homelab
            </a>
          </div>

          <div className={`flex items-center justify-center gap-2 text-sm font-mono ${
            theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
          }`}>
            <MapPin size={14} />
            {personalInfo.location}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className={theme === 'dark' ? 'text-navy-600' : 'text-navy-300'} size={24} />
        </motion.div>
      </div>
    </section>
  )
}
