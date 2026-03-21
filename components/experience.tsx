'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, ChevronDown, MapPin, Building2 } from 'lucide-react'
import { experience } from '@/data/resume'
import { useTheme } from './theme-provider'
import { SectionHeading } from './section-heading'

export function Experience() {
  const { theme } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="Career Timeline" />

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px ${
            theme === 'dark' ? 'bg-navy-700' : 'bg-navy-200'
          }`} />

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 sm:left-6 w-4 h-4 rounded-full border-2 top-6 ${
                  index === 0
                    ? 'bg-accent border-accent glow'
                    : theme === 'dark'
                      ? 'bg-navy-800 border-navy-600'
                      : 'bg-white border-navy-300'
                }`} />

                <div
                  className={`rounded-xl border transition-all cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-navy-900/50 border-navy-800 hover:border-navy-600'
                      : 'bg-white border-navy-200 hover:border-navy-300 shadow-sm'
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className={`text-lg font-bold font-mono ${
                            theme === 'dark' ? 'text-white' : 'text-navy-900'
                          }`}>
                            {exp.role}
                          </h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                            exp.type === 'Full-time'
                              ? 'bg-accent/10 text-accent'
                              : exp.type === 'Self-employed'
                                ? 'bg-purple-500/10 text-purple-400'
                                : theme === 'dark'
                                  ? 'bg-navy-700 text-navy-300'
                                  : 'bg-navy-100 text-navy-600'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <div className={`flex items-center gap-3 text-sm ${
                          theme === 'dark' ? 'text-navy-400' : 'text-navy-500'
                        }`}>
                          <span className="flex items-center gap-1">
                            <Building2 size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        <p className={`text-sm font-mono mt-1 ${
                          theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
                        }`}>
                          {exp.period}
                        </p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown
                          size={20}
                          className={theme === 'dark' ? 'text-navy-500' : 'text-navy-400'}
                        />
                      </motion.div>
                    </div>

                    <p className={`text-sm mt-3 ${
                      theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
                    }`}>
                      {exp.description}
                    </p>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-2 overflow-hidden"
                        >
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 text-sm ${
                                theme === 'dark' ? 'text-navy-300' : 'text-navy-700'
                              }`}
                            >
                              <span className="text-accent mt-1 shrink-0">&#9656;</span>
                              {highlight}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
