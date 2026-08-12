import React from 'react'
import { IconV2 } from './IconV2'
import styles from './DiagnosticCTAV2.module.css'

export function DiagnosticCTAV2() {
  return (
    <div id="v2-diagnostic" className={styles.container}>
      <div className={styles.banner}>
        <div>
          <h2 className={styles.title}>开启您的AI认知基线诊断</h2>
          <p className={styles.desc}>了解企业在AI中的真实表现，发现机会，制定提升策略。</p>
          <div className={styles.actions}>
            <a href="#v2-diagnostic" className={styles.primaryPill}>
              立即开始诊断 <IconV2 name="arrow" size={14} />
            </a>
            <a href="#v2-footer" className={styles.secondaryPill}>
              与专家咨询 <IconV2 name="arrow" size={12} />
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
