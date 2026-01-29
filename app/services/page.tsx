import Navigation from '@/components/Navigation'
import Services from '@/components/Services'
import ProjectCTA from '@/components/ProjectCTA'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Services />
      </div>
      <ProjectCTA />
      <Footer />
    </main>
  )
}

