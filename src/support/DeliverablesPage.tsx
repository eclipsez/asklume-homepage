import ledgerCover from '../assets/resources/evidence-ledger-cover.jpg'
import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'

export function DeliverablesPage() {
  return (
    <SupportPageFrame activeLabel="产品与服务" description="每一项服务都要留下可以复核、交接和继续维护的资产，而不是只交一份演示报告。" eyebrow="交付物与验收" heroAlt="证据台账与来源卡片组成的工作材料" heroImage={ledgerCover} page="deliverables" primaryAction={{ href: './diagnostic.html?intent=general#intake', label: '申请免费需求评估' }} secondaryAction={{ href: './services.html', label: '查看两档服务' }} title="客户最终拿到什么" >
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>交付逻辑</p><h2>围绕四个问题，组织一套可继续使用的资产</h2><p>交付物的价值不在于页面数量，而在于团队能否理解、验收并继续维护。</p></div>
          <ol className={styles.numberList}>
            {[
              ['AI 现在如何回答', '基线记录与问题地图，说明平台、模型、时间、原始回答和引用。'],
              ['企业事实是否一致', '事实源和证据台账，标记来源、日期、责任人和限制条件。'],
              ['哪些地方需要建设', '页面、语义结构、技术可读取性与内容动作的优先级清单。'],
              ['建设后如何复核', '沿用测试协议复测，记录变化、无变化与仍需人工判断的部分。'],
            ].map(([title, body], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}
          </ol>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}><div className={styles.sectionHeading}><p className={styles.eyebrow}>服务层级</p><h2>价格不同，交付深度不同</h2></div>
          <div className={styles.featureGrid}>
            <article className={`${styles.panel} ${styles.panelLead}`}><span className={styles.panelLabel}>39,800 元服务档</span><h3>建立首期可执行的 GEO 基础</h3><p>适合先解决核心品牌与产品的可见性、事实一致性和首轮证据建设问题。具体范围以诊断后确认的工作单为准。</p><a className={styles.inlineLink} href="./services.html#standard">查看服务边界 →</a></article>
            <div className={styles.stack}><article className={styles.panel}><span className={styles.panelLabel}>69,800 元服务档</span><h3>覆盖更复杂的业务与验证周期</h3><p>适合产品线、场景、来源和复测要求更多的企业，包含更深的内容与证据建设。</p></article><article className={styles.panel}><span className={styles.panelLabel}>定制与出海</span><h3>按市场、语言和系统复杂度评估</h3><p>品牌出海、多市场、多语言、持续监测和深度定制不直接塞进固定套餐，先基于范围评估再报价。</p><a className={styles.inlineLink} href="./global-geo.html">了解全球 AI 可发现性 →</a></article></div>
          </div>
        </div>
      </section>
    </SupportPageFrame>
  )
}
