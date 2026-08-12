import { useId } from 'react'
import glassBloom from '../assets/glass/glass-bloom.webp'
import glassLoop from '../assets/glass/glass-loop.webp'
import glassRibbon from '../assets/glass/glass-ribbon.webp'
import { benefits } from '../content/homeContent'
import { PointerGlowCard } from './PointerGlowCard'
import { Reveal } from './Reveal'
import styles from './BenefitsSection.module.css'

const glassArt = [
  { name: 'loop', src: glassLoop, width: 1254, height: 1254 },
  { name: 'bloom', src: glassBloom, width: 1254, height: 1254 },
  { name: 'ribbon', src: glassRibbon, width: 1536, height: 1024 },
] as const

export function BenefitsSection() {
  const articleIdPrefix = useId()

  return (
    <section
      aria-labelledby="benefits-title"
      className={styles.section}
      id="insights"
    >
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>核心优势</p>
            <h2 id="benefits-title">为什么选择问答光源</h2>
            <p className={styles.subtitle}>
              从发现、理解到选择，构建企业在AI时代的认知竞争力。
            </p>
          </header>
        </Reveal>

        <Reveal className={styles.grid} delay={0.08}>
          {benefits.map((benefit, index) => {
            const art = glassArt[index]
            const headingId = `${articleIdPrefix}-benefit-${index}`

            return (
              <PointerGlowCard
                aria-labelledby={headingId}
                className={styles.card}
                data-glass-art={art.name}
                key={benefit.title}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className={styles.art}
                  decoding="async"
                  draggable="false"
                  height={art.height}
                  src={art.src}
                  width={art.width}
                />
                <div className={styles.copy}>
                  <h3 id={headingId}>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <a href={benefit.href}>
                    了解更多 <span aria-hidden="true">→</span>
                  </a>
                </div>
              </PointerGlowCard>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
