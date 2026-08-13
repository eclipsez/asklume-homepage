import { siteContact } from '../content/siteContent'
import { SiteIcon } from './SiteIcon'
import styles from './DiagnosticCTA.module.css'

export function DiagnosticCTA() {
  return (
    <div id="diagnostic" className={styles.container}>
      <div className={styles.banner}>
        <div>
          <h2 className={styles.title}>开启您的AI认知基线诊断</h2>
          <p className={styles.desc}>了解企业在AI中的真实表现，发现机会，制定提升策略。</p>
          <div className={styles.actions}>
            <a href="./diagnostic.html" className={styles.primaryPill}>
              了解诊断流程 <SiteIcon name="arrow" size={14} />
            </a>
            <a href="./resources.html" className={styles.secondaryPill}>
              查看方法资源 <SiteIcon name="arrow" size={12} />
            </a>
          </div>
        </div>

        <div className={styles.orbContainer}>
          <div className={styles.orbCore}></div>
        </div>
      </div>
    </div>
  )
}
