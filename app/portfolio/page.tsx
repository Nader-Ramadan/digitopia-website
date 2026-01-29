import Navigation from '@/components/Navigation'
import Portfolio from '@/components/Portfolio'
import ProjectCTA from '@/components/ProjectCTA'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Portfolio />
      </div>
      <ProjectCTA />
      <Footer />
    </main>
  )
}

