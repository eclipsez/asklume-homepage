import { SiteIcon } from './SiteIcon'
import styles from './BenefitsSection.module.css'

export function BenefitsSection() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>核心优势</span>
          <h2 className={styles.sectionTitle}>为什么选择问答光源</h2>
          <p className={styles.sectionDesc}>从发现、理解到选择，构建企业在AI时代的认知竞争力。</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="target" size={32} />
            </div>
            <h3 className={styles.cardTitle}>更高的AI可见性</h3>
            <p className={styles.cardDesc}>让企业在更多AI平台中被主动发现与识别。</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="brain" size={32} />
            </div>
            <h3 className={styles.cardTitle}>更准确的AI理解</h3>
            <p className={styles.cardDesc}>让AI正确理解企业是谁、能做什么、适合谁。</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="diamond" size={32} />
            </div>
            <h3 className={styles.cardTitle}>更强的品牌选择力</h3>
            <p className={styles.cardDesc}>为企业进入AI推荐与决策场景提供可信基础。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
