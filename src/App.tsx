import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BenefitsSection } from './components/BenefitsSection'
import { TrustStrip } from './components/TrustStrip'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <BenefitsSection />
      </main>
    </>
  )
}

export default App
