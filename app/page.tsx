import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Certifications } from '@/components/certifications'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { JsonLd } from '@/components/json-ld'

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
    </>
  )
}
