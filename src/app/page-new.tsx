import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Contact />
    </main>
  )
}
