import { useId } from 'react'
import glassBloom from '../assets/glass/glass-bloom.webp'
import glassLoop from '../assets/glass/glass-loop.webp'
import glassRibbon from '../assets/glass/glass-ribbon.webp'
import { pillars } from '../content/homeContent'
import { PointerGlowCard } from './PointerGlowCard'
import { Reveal } from './Reveal'
import styles from './PillarsSection.module.css'

const glassArt = [
  { name: 'loop', src: glassLoop, width: 1254, height: 1254 },
  { name: 'bloom', src: glassBloom, width: 1254, height: 1254 },
  { name: 'ribbon', src: glassRibbon, width: 1536, height: 1024 },
] as const

export function PillarsSection() {
  const articleIdPrefix = useId()

  return (
    <section
      aria-labelledby="pillars-title"
      className={styles.section}
      id="pillars"
    >
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>GEO-AIP™ 核心系统</p>
            <h2 id="pillars-title">
              三大信息支柱 · <span className={styles.titlePhrase}>构建AI认知基线</span>
            </h2>
            <p className={styles.subtitle}>
              从事实到认知，从可见到可选，系统化提升企业在AI时代的影响力。
            </p>
          </header>
        </Reveal>

        <Reveal className={styles.grid} delay={0.08}>
          {pillars.map((pillar, index) => {
            const headingId = `${articleIdPrefix}-pillar-${index}`
            const sequence = String(index + 1).padStart(2, '0')
            const art = glassArt[index]

            return (
              <div className={styles.cell} key={pillar.title}>
                <PointerGlowCard
                  aria-labelledby={headingId}
                  className={styles.card}
                  data-glass-art={art.name}
                  data-sequence={sequence}
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
                    <span className={styles.sequence} data-testid="pillar-sequence">
                      {sequence}
                    </span>
                    <h3 id={headingId}>{pillar.title}</h3>
                    <p className={styles.lead} data-testid="pillar-lead">
                      {pillar.lines[0]}
                    </p>
                    <ul>
                      {pillar.lines.slice(1).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </PointerGlowCard>
                {index < pillars.length - 1 ? (
                  <span aria-hidden="true" className={styles.connector} />
                ) : null}
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
