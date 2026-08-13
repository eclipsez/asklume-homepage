import { BenefitsSection } from './components/BenefitsSection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { DiagnosticCTA } from './components/DiagnosticCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { PillarsSection } from './components/PillarsSection'
import { SolutionsPreviewSection } from './components/SolutionsPreviewSection'

export function App() {
  return (
    <div id="top" style={{ background: 'var(--page-bg)', minHeight: '100vh' }}>
      <Header />
      <main id="main-content">
        <Hero />
        <BenefitsSection />
        <SolutionsPreviewSection />
        <PillarsSection />
        <CapabilitiesSection />
        <DiagnosticCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
