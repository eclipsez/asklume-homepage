import { benefits } from '../content/homeContent'
import { Icon } from './Icon'
import styles from './BenefitsSection.module.css'

export function BenefitsSection() {
  return (
    <section
      aria-labelledby="benefits-title"
      className={styles.section}
      id="insights"
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>核心优势</p>
          <h2 id="benefits-title">为什么选择问答光源</h2>
          <p className={styles.subtitle}>
            从发现、理解到选择，构建企业在AI时代的认知竞争力。
          </p>
        </header>

        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <article className={styles.card} key={benefit.title}>
              <span className={styles.icon}>
                <Icon name={benefit.icon} size={38} />
              </span>
              <div className={styles.copy}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <a href={benefit.href}>了解更多 <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
