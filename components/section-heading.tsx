'use client'

import { motion } from 'framer-motion'
import { useTheme } from './theme-provider'

export function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <span className="text-accent font-mono text-sm tracking-wider uppercase">
        {'// '}{title}
      </span>
      <h2 className={`text-3xl sm:text-4xl font-bold font-mono mt-2 ${
        theme === 'dark' ? 'text-white' : 'text-navy-900'
      }`}>
        {subtitle}
      </h2>
      <div className="section-divider mt-4 max-w-xs" />
    </motion.div>
  )
}
