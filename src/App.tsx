import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BenefitsSection } from './components/BenefitsSection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { DiagnosticCTA } from './components/DiagnosticCTA'
import { Footer } from './components/Footer'
import { GlassDashboard } from './components/GlassDashboard'
import { PillarsSection } from './components/PillarsSection'
import { TrustStrip } from './components/TrustStrip'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <BenefitsSection />
        <PillarsSection />
        <CapabilitiesSection />
        <DiagnosticCTA />
        <section aria-label="AI认知概览" className={styles.mobileOverview}>
          <div className={styles.mobileOverviewInner}>
            <GlassDashboard variant="mobile" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
