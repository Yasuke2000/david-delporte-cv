'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, GraduationCap } from 'lucide-react'
import { certifications, achievements, education } from '@/data/resume'
import { useTheme } from './theme-provider'
import { SectionHeading } from './section-heading'

export function Certifications() {
  const { theme } = useTheme()

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Credentials" subtitle="Certifications & Achievements" />

        {/* Education */}
        <div className="mb-12">
          <h3 className={`font-mono text-lg font-bold mb-6 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            <GraduationCap size={20} className="text-accent" />
            Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl border p-5 ${
                  theme === 'dark'
                    ? 'bg-navy-900/50 border-navy-800'
                    : 'bg-white border-navy-200 shadow-sm'
                }`}
              >
                <p className={`font-mono font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  {edu.degree}
                </p>
                <p className={`text-sm mt-1 ${
                  theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
                }`}>
                  {edu.institution}
                </p>
                <p className={`text-xs font-mono mt-1 ${
                  theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
                }`}>
                  {edu.period}
                </p>
                <p className={`text-xs mt-2 ${
                  theme === 'dark' ? 'text-navy-400' : 'text-navy-500'
                }`}>
                  {edu.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className={`font-mono text-lg font-bold mb-6 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            <Award size={20} className="text-accent" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl border p-5 ${
                  cert.badge
                    ? theme === 'dark'
                      ? 'border-accent/30 bg-accent/5'
                      : 'border-accent/30 bg-accent/5'
                    : theme === 'dark'
                      ? 'bg-navy-900/50 border-navy-800'
                      : 'bg-white border-navy-200 shadow-sm'
                }`}
              >
                <p className={`font-mono text-sm font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  {cert.name}
                </p>
                <p className={`text-xs mt-1 ${
                  theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
                }`}>
                  {cert.issuer}
                </p>
                <p className={`text-xs font-mono mt-2 ${
                  cert.date === 'In Progress' ? 'text-accent' : theme === 'dark' ? 'text-navy-500' : 'text-navy-400'
                }`}>
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className={`font-mono text-lg font-bold mb-6 flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            <Trophy size={20} className="text-accent" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl border p-5 text-center ${
                  theme === 'dark'
                    ? 'bg-navy-900/50 border-navy-800'
                    : 'bg-white border-navy-200 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <Trophy size={18} className="text-accent" />
                </div>
                <p className={`font-mono text-sm font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  {ach.name}
                </p>
                <p className={`text-xs mt-1 ${
                  theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
                }`}>
                  {ach.issuer}
                </p>
                <p className={`text-xs mt-2 ${
                  theme === 'dark' ? 'text-navy-400' : 'text-navy-500'
                }`}>
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
