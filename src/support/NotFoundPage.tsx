import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'

export function NotFoundPage() {
  return (
    <SupportPageFrame
      description="这个地址没有对应的页面。你可以回到首页，查看解决方案，或从资源中心继续了解 GEO。"
      eyebrow="页面未找到"
      page="notFound"
      primaryAction={{ href: './index.html', label: '回到首页' }}
      secondaryAction={{ href: './solutions.html', label: '查看解决方案' }}
      title="这条路径暂时没有内容"
    >
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <div className={styles.featureGrid}>
            <article className={`${styles.panel} ${styles.panelLead}`}>
              <span className={styles.panelLabel}>推荐入口</span>
              <h3>从真实问题开始</h3>
              <p>先判断 AI 当前如何理解品牌，再决定内容、证据和技术建设范围。</p>
              <a className={styles.inlineLink} href="./diagnostic.html">了解基线诊断 →</a>
            </article>
            <div className={styles.stack}>
              <article className={styles.panel}><h3>解决方案</h3><p>按可发现性、认知纠偏、复杂业务和品牌出海组织服务路径。</p><a className={styles.inlineLink} href="./solutions.html">查看解决方案 →</a></article>
              <article className={styles.panel}><h3>资源中心</h3><p>阅读 GEO 基础、问题集、证据台账和测量方法。</p><a className={styles.inlineLink} href="./resources.html">浏览资源 →</a></article>
            </div>
          </div>
        </div>
      </section>
    </SupportPageFrame>
  )
}
