import Navigation from '@/components/Navigation'
import InteractiveHero from '@/components/InteractiveHero'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <InteractiveHero />
    </main>
  )
}