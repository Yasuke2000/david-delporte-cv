'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Server } from 'lucide-react'

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}
import { projects } from '@/data/resume'
import { useTheme } from './theme-provider'
import { SectionHeading } from './section-heading'

export function Projects() {
  const { theme } = useTheme()

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Projects" subtitle="Homelab & Open Source" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group rounded-xl border p-6 transition-all hover:border-accent/50 ${
                index === 0 ? 'md:col-span-2' : ''
              } ${
                theme === 'dark'
                  ? 'bg-navy-900/50 border-navy-800'
                  : 'bg-white border-navy-200 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  {index === 0 ? (
                    <Server size={20} className="text-accent" />
                  ) : (
                    <span className="text-accent"><GithubIcon size={20} /></span>
                  )}
                  <h3 className={`font-mono font-bold text-lg ${
                    theme === 'dark' ? 'text-white' : 'text-navy-900'
                  }`}>
                    {project.name}
                  </h3>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'hover:bg-navy-700 text-navy-400 hover:text-accent'
                        : 'hover:bg-navy-100 text-navy-500 hover:text-accent-dark'
                    }`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className={`text-sm mb-4 ${
                theme === 'dark' ? 'text-navy-400' : 'text-navy-600'
              }`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded text-xs font-mono ${
                      theme === 'dark'
                        ? 'bg-accent/10 text-accent'
                        : 'bg-accent/10 text-accent-dark'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
