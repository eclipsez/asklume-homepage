import { capabilities } from '../content/homeContent'
import { Icon } from './Icon'
import styles from './CapabilitiesSection.module.css'

type CapabilityArt = 'platform' | 'ring' | 'cubes' | 'orb'

const capabilityArt = [
  'platform',
  'ring',
  'cubes',
  'orb',
] as const satisfies readonly CapabilityArt[]

export function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="capabilities-title"
      className={styles.section}
      id="capabilities"
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>平台能力</p>
          <h2 id="capabilities-title">从数据到决策的完整能力体系</h2>
          <p className={styles.subtitle}>
            一站式AI认知基础设施，帮助企业构建长期可持续的认知影响力。
          </p>
        </header>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <article className={styles.card} key={capability.title}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name={capability.icon} size={27} />
              </span>
              <div className={styles.copy}>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
              <span
                aria-hidden="true"
                className={styles.art}
                data-art={capabilityArt[index]}
              >
                <i />
                <i />
                <i />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
