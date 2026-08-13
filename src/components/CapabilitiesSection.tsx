import { SiteIcon } from './SiteIcon'
import styles from './CapabilitiesSection.module.css'

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>平台能力</span>
          <h2 className={styles.sectionTitle}>从数据到决策的完整能力体系</h2>
          <p className={styles.sectionDesc}>一站式AI认知基础设施，帮助企业构建长期可持续的AI影响力。</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="search" size={26} />
            </div>
            <h3 className={styles.cardTitle}>AI搜索与洞察</h3>
            <p className={styles.cardDesc}>追踪品牌在主流AI平台中的表现、发现问题、洞察机会。</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="shield" size={26} />
            </div>
            <h3 className={styles.cardTitle}>持续监测与预警</h3>
            <p className={styles.cardDesc}>实时监测AI回答变化、识别风险信号、助力品牌管理。</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="cube" size={26} />
            </div>
            <h3 className={styles.cardTitle}>企业协同与资产管理</h3>
            <p className={styles.cardDesc}>跨团队、跨系统协作，沉淀企业资产、提升组织生产力。</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <SiteIcon name="spark" size={26} />
            </div>
            <h3 className={styles.cardTitle}>定制化智能方案</h3>
            <p className={styles.cardDesc}>根据行业与业务特点定制方案，匹配企业独特需求。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
