'use client'

import { motion } from 'framer-motion'
import { Quote, Brain, Heart } from 'lucide-react'
import { assessmentStrengths, cognitiveAssessment, volunteering, languages } from '@/data/resume'
import { useTheme } from './theme-provider'
import { SectionHeading } from './section-heading'

export function Testimonials() {
  const { theme } = useTheme()

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Insights" subtitle="What Others Say" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Professional Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl border p-6 ${
              theme === 'dark'
                ? 'bg-navy-900/50 border-navy-800'
                : 'bg-white border-navy-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Quote size={20} className="text-accent" />
              <h3 className={`font-mono font-bold ${
                theme === 'dark' ? 'text-white' : 'text-navy-900'
              }`}>
                Professional Assessment
              </h3>
            </div>
            <p className={`text-xs font-mono mb-4 ${
              theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
            }`}>
              Source: Introduce — Senior Consultant
            </p>
            <ul className="space-y-3">
              {assessmentStrengths.map((s, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    theme === 'dark' ? 'text-navy-300' : 'text-navy-700'
                  }`}
                >
                  <span className="text-accent mt-0.5 shrink-0">&#10003;</span>
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-6">
            {/* Cognitive Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`rounded-xl border p-6 ${
                theme === 'dark'
                  ? 'bg-navy-900/50 border-navy-800'
                  : 'bg-white border-navy-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain size={20} className="text-accent" />
                <h3 className={`font-mono font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  Cognitive Assessment
                </h3>
              </div>
              <p className={`text-xs font-mono mb-4 ${
                theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
              }`}>
                SHL Verify — KBC
              </p>
              <div className="space-y-3">
                {cognitiveAssessment.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-navy-300' : 'text-navy-700'
                    }`}>
                      {item.area}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        item.score === 'A'
                          ? 'bg-accent/10 text-accent font-bold'
                          : theme === 'dark'
                            ? 'bg-navy-700 text-navy-300'
                            : 'bg-navy-100 text-navy-700'
                      }`}>
                        {item.score} — {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`rounded-xl border p-6 ${
                theme === 'dark'
                  ? 'bg-navy-900/50 border-navy-800'
                  : 'bg-white border-navy-200 shadow-sm'
              }`}
            >
              <h3 className={`font-mono font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-navy-900'
              }`}>
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map(lang => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={theme === 'dark' ? 'text-navy-300' : 'text-navy-700'}>
                        {lang.name}
                      </span>
                      <span className={`font-mono text-xs ${
                        theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
                      }`}>
                        {lang.level}
                      </span>
                    </div>
                    <div className={`h-1.5 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-navy-800' : 'bg-navy-100'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Volunteering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`rounded-xl border p-6 ${
                theme === 'dark'
                  ? 'bg-navy-900/50 border-navy-800'
                  : 'bg-white border-navy-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Heart size={20} className="text-accent" />
                <h3 className={`font-mono font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  Volunteering
                </h3>
              </div>
              <p className={`font-mono text-sm font-bold ${
                theme === 'dark' ? 'text-white' : 'text-navy-900'
              }`}>
                {volunteering.role}
              </p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
              }`}>
                {volunteering.organization}
              </p>
              <p className={`text-xs font-mono mt-1 ${
                theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
              }`}>
                {volunteering.period}
              </p>
              <p className={`text-xs mt-2 ${
                theme === 'dark' ? 'text-navy-400' : 'text-navy-500'
              }`}>
                {volunteering.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
