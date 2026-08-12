import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BenefitsSection } from './components/BenefitsSection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { PillarsSection } from './components/PillarsSection'
import { TrustStrip } from './components/TrustStrip'

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
      </main>
    </>
  )
}

export default App
