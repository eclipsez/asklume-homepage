import { useId } from 'react'
import { capabilities } from '../content/homeContent'
import { Icon } from './Icon'
import { PointerGlowCard } from './PointerGlowCard'
import { Reveal } from './Reveal'
import styles from './CapabilitiesSection.module.css'

export function CapabilitiesSection() {
  const articleIdPrefix = useId()

  return (
    <section
      aria-labelledby="capabilities-title"
      className={styles.section}
      id="capabilities"
    >
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>平台能力</p>
            <h2 id="capabilities-title">从数据到决策的完整能力体系</h2>
            <p className={styles.subtitle}>
              一站式AI认知基础设施，帮助企业构建长期可持续的认知影响力。
            </p>
          </header>
        </Reveal>

        <Reveal className={styles.grid} delay={0.08}>
          {capabilities.map((capability, index) => {
            const headingId = `${articleIdPrefix}-capability-${index}`

            return (
              <PointerGlowCard
                aria-labelledby={headingId}
                className={styles.card}
                data-art-type={capability.art}
                key={capability.title}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={capability.icon} size={27} />
                </span>
                <div className={styles.copy}>
                  <h3 id={headingId}>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <span
                  aria-hidden="true"
                  className={styles.arrow}
                  data-capability-arrow=""
                >
                  →
                </span>
                <span
                  aria-hidden="true"
                  className={styles.art}
                  data-art={capability.art}
                >
                  <i />
                  <i />
                  <i />
                </span>
              </PointerGlowCard>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
