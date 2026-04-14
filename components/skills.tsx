'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Cloud, Network, Terminal, Phone, FileText, Bot, Users } from 'lucide-react'
import { skills } from '@/data/resume'
import { useTheme } from './theme-provider'
import { SectionHeading } from './section-heading'

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={20} />,
  Cloud: <Cloud size={20} />,
  Network: <Network size={20} />,
  Terminal: <Terminal size={20} />,
  Phone: <Phone size={20} />,
  FileText: <FileText size={20} />,
  Bot: <Bot size={20} />,
  Users: <Users size={20} />,
}

export function Skills() {
  const { theme } = useTheme()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredSkills = activeCategory
    ? skills.filter(c => c.name === activeCategory)
    : skills

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technical Expertise" />

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-mono transition-all ${
              activeCategory === null
                ? 'bg-accent text-navy-950'
                : theme === 'dark'
                  ? 'bg-navy-800 text-navy-400 hover:text-accent'
                  : 'bg-navy-100 text-navy-600 hover:text-accent-dark'
            }`}
          >
            All
          </button>
          {skills.map(category => (
            <button
              key={category.name}
              onClick={() =>
                setActiveCategory(activeCategory === category.name ? null : category.name)
              }
              className={`px-4 py-2 rounded-lg text-sm font-mono transition-all flex items-center gap-2 ${
                activeCategory === category.name
                  ? 'bg-accent text-navy-950'
                  : theme === 'dark'
                    ? 'bg-navy-800 text-navy-400 hover:text-accent'
                    : 'bg-navy-100 text-navy-600 hover:text-accent-dark'
              }`}
            >
              {iconMap[category.icon]}
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className={`rounded-xl border p-6 ${
                theme === 'dark'
                  ? 'bg-navy-900/50 border-navy-800'
                  : 'bg-white border-navy-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-accent">{iconMap[category.icon]}</div>
                <h3 className={`font-mono font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      theme === 'dark'
                        ? 'bg-navy-800 text-navy-300 hover:text-accent hover:bg-navy-700'
                        : 'bg-navy-50 text-navy-700 hover:text-accent-dark hover:bg-navy-100'
                    }`}
                  >
                    {skill}
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
