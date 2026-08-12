import React from 'react'
import { GlassDashboardV2 } from './GlassDashboardV2'
import { IconV2 } from './IconV2'
import styles from './HeroV2.module.css'

const valueItems = [
  '让事实被看见',
  '让能力被理解',
  '让品牌被选择',
  '让价值被放大',
] as const

export function HeroV2() {
  return (
    <section className={styles.hero}>
      <div className={styles.auraBlob1}></div>
      <div className={styles.auraBlob2}></div>

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.pillTag}>✦ 企业AI认知与影响力基础设施</div>

            <h1 className={styles.heroTitle}>
              让品牌被AI<br />
              <span className={styles.gradientText}>看见、理解与选择。</span>
            </h1>

            <p className={styles.heroDesc}>
              问答光源通过 GEO-AIP™ 数字证据工程，帮助企业把真实能力转化为 AI
              可发现、可理解、可检验、可引用的高价值认知资产。
            </p>

            <div className={styles.valuePillsGrid}>
              {valueItems.map((val, idx) => (
                <div key={val} className={styles.valuePillItem}>
                  <span className={styles.pillNumIcon}>{idx + 1}</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div className={styles.heroActions}>
              <a href="#v2-diagnostic" className={styles.primaryBtn}>
                开启AI认知基线诊断
                <IconV2 name="arrow" size={16} />
              </a>
              <a href="#v2-capabilities" className={styles.secondaryBtn}>
                了解产品
                <IconV2 name="arrow" size={12} />
              </a>
            </div>
          </div>

          <div>
            <GlassDashboardV2 />
          </div>
        </div>
      </div>
    </section>
  )
}
