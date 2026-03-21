'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/resume'
import { useTheme } from './theme-provider'
import { SectionHeading } from './section-heading'

export function About() {
  const { theme } = useTheme()

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About" subtitle="Professional Profile" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-8 border ${
            theme === 'dark'
              ? 'bg-navy-900/50 border-navy-800'
              : 'bg-white border-navy-200 shadow-sm'
          }`}
        >
          {/* Terminal header */}
          <div className={`flex items-center gap-2 mb-6 pb-4 border-b ${
            theme === 'dark' ? 'border-navy-700' : 'border-navy-200'
          }`}>
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className={`ml-2 text-xs font-mono ${
              theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
            }`}>
              ~/david/profile.md
            </span>
          </div>

          {profile.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className={`text-base leading-relaxed mb-4 last:mb-0 ${
                theme === 'dark' ? 'text-navy-300' : 'text-navy-700'
              }`}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
