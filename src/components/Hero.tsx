import { GlassDashboard } from './GlassDashboard'
import { SiteIcon } from './SiteIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section aria-labelledby="home-hero-title" className={styles.hero}>
      <div className={styles.auraBlob1}></div>
      <div className={styles.auraBlob2}></div>

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.pillTag}>企业AI认知与影响力基础设施</div>

            <h1 className={styles.heroTitle} id="home-hero-title">
              让品牌被AI<br />
              <span className={styles.gradientText}>看见、理解与选择。</span>
            </h1>

            <p className={styles.heroDesc}>
              问答光源通过 GEO-AIP™ 数字证据工程，帮助企业把真实能力转化为 AI
              可发现、可理解、可检验、可引用的高价值认知资产。
            </p>

            <div className={styles.heroActions}>
              <a href="#diagnostic" className={styles.primaryBtn}>
                开启AI认知基线诊断
                <SiteIcon name="arrow" size={16} />
              </a>
              <a href="#capabilities" className={styles.secondaryBtn}>
                了解产品
                <SiteIcon name="arrow" size={12} />
              </a>
            </div>
          </div>

          <div aria-label="AI认知诊断示例">
            <GlassDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
