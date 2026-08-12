import React from 'react'
import { IconV2 } from './IconV2'
import styles from './PillarsSectionV2.module.css'

export function PillarsSectionV2() {
  return (
    <section id="v2-pillars" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>GEO-AIP™ 核心系统</span>
          <h2 className={styles.sectionTitle}>三大信息支柱 · 构建AI认知基线</h2>
          <p className={styles.sectionDesc}>从事实到认知，从可见到可选，系统化提升企业在AI时代的影响力。</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconPod}>
              <IconV2 name="search" size={28} />
            </div>
            <h3 className={styles.cardTitle}>被看见</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.bullet}></span>提升AI发现与识别能力</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>建立实体与主题基础</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>优化内容与技术可识别性</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>增强AI抓取与呈现</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <IconV2 name="brain" size={28} />
            </div>
            <h3 className={styles.cardTitle}>被理解</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.bullet}></span>确保AI准确理解企业能力</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>统一核心事实与能力表达</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>建立清晰的语义关联</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>提升回答准确性</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.iconPod}>
              <IconV2 name="star" size={28} />
            </div>
            <h3 className={styles.cardTitle}>被选择</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.bullet}></span>赢得AI推荐与决策信任</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>建设可信证据与来源</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>打造差异化表达</li>
              <li className={styles.listItem}><span className={styles.bullet}></span>提升行动选择权</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
