import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BenefitsSection } from './components/BenefitsSection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { DiagnosticCTA } from './components/DiagnosticCTA'
import { Footer } from './components/Footer'
import { GlassDashboard } from './components/GlassDashboard'
import { PillarsSection } from './components/PillarsSection'
import { TrustStrip } from './components/TrustStrip'
import { Reveal } from './components/Reveal'
import { AppV2 } from './v2/AppV2'
import styles from './App.module.css'

function App() {
  const [version, setVersion] = useState<'v1' | 'v2'>('v1')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('v') === '2') {
      setVersion('v2')
    }
  }, [])

  return (
    <>
      {/* Dynamic Top Version Switcher Bar */}
      <div className={styles.versionBar}>
        <div>✦ AskLume 设计效果对比 (Design Version Comparison)</div>
        <div className={styles.versionButtons}>
          <button
            onClick={() => setVersion('v1')}
            style={{
              background: version === 'v1' ? '#7556f4' : 'transparent',
              color: '#ffffff',
              border: 'none',
              padding: '4px 12px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.78rem'
            }}
          >
            版本 1.0 (原基线版)
          </button>
          <button
            onClick={() => setVersion('v2')}
            style={{
              background: version === 'v2' ? 'linear-gradient(135deg, #4972ff, #7556f4, #df5fd1)' : 'transparent',
              color: '#ffffff',
              border: 'none',
              padding: '4px 12px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.78rem',
              boxShadow: version === 'v2' ? '0 2px 10px rgba(117,86,244,0.5)' : 'none'
            }}
          >
            版本 2.0 (设计师极致版) ✦
          </button>
        </div>
      </div>

      {version === 'v2' ? (
        <AppV2 />
      ) : (
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
                <Reveal>
                  <GlassDashboard variant="mobile" />
                </Reveal>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
