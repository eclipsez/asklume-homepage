import { useId } from 'react'
import { pillars } from '../content/homeContent'
import { Icon, type IconName } from './Icon'
import styles from './PillarsSection.module.css'

const pillarIcons: Record<(typeof pillars)[number]['title'], IconName> = {
  被看见: 'search',
  被理解: 'brain',
  被选择: 'star',
}

export function PillarsSection() {
  const articleIdPrefix = useId()

  return (
    <section
      aria-labelledby="pillars-title"
      className={styles.section}
      id="pillars"
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>GEO-AIP™ 核心系统</p>
          <h2 id="pillars-title">
            三大信息支柱 · <span className={styles.titlePhrase}>构建AI认知基线</span>
          </h2>
          <p className={styles.subtitle}>
            从事实到认知，从可见到可选，系统化提升企业在AI时代的影响力。
          </p>
        </header>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => {
            const headingId = `${articleIdPrefix}-pillar-${index}`

            return (
              <article
                aria-labelledby={headingId}
                className={styles.card}
                key={pillar.title}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={pillarIcons[pillar.title]} size={38} />
                </span>
                <div className={styles.copy}>
                  <h3 id={headingId}>{pillar.title}</h3>
                  <ul>
                    {pillar.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
