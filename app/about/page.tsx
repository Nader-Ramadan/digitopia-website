import Navigation from '@/components/Navigation'
import About from '@/components/About'
import ProjectCTA from '@/components/ProjectCTA'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <ProjectCTA />
      <Footer />
    </main>
  )
}

