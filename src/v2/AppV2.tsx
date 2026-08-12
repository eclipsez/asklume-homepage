import React from 'react'
import { HeaderV2 } from './components/HeaderV2'
import { HeroV2 } from './components/HeroV2'
import { BenefitsSectionV2 } from './components/BenefitsSectionV2'
import { PillarsSectionV2 } from './components/PillarsSectionV2'
import { CapabilitiesSectionV2 } from './components/CapabilitiesSectionV2'
import { DiagnosticCTAV2 } from './components/DiagnosticCTAV2'
import { FooterV2 } from './components/FooterV2'
import './styles/v2-tokens.css'

export function AppV2() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: '#fafbfd', minHeight: '100vh' }}>
      <HeaderV2 />
      <main id="v2-main">
        <HeroV2 />
        <BenefitsSectionV2 />
        <PillarsSectionV2 />
        <CapabilitiesSectionV2 />
        <DiagnosticCTAV2 />
      </main>
      <FooterV2 />
    </div>
  )
}

export default AppV2
