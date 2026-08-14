import verifiedOutcomes from '../assets/cases/verified-outcomes-generated.jpg'
import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'

export function CasesPage() {
  return (
    <SupportPageFrame activeLabel="关于我们" description="案例要先能够被复核，再用于说明方法的价值。AskLume 不用未经授权的数字和截图替代证据。" eyebrow="案例与证据" heroAlt="分散的事实与信号经过整理后汇入稳定的验证节点" heroImage={verifiedOutcomes} page="cases" primaryAction={{ href: './diagnostic.html', label: '申请免费需求评估' }} secondaryAction={{ href: './contact.html', label: '联系专家团队' }} title="先展示证据，再谈结果" >
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}><div className={styles.split}><div className={styles.splitCopy}><p className={styles.eyebrow}>公开记录原则</p><h2>每个结果都要有范围、有时间、有出处</h2><p>GEO 变化受到平台、模型、时间、问题集和外部来源影响。我们会把观察到的变化与因果判断分开。</p></div><ol className={styles.numberList}>{['只使用已授权或公开的材料','保留测试条件、原始回答和引用来源','区分事实改善、可见性变化与业务结果'].map((item, index) => <li key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>在案例公开前，先由项目负责人确认范围与表述。</p></div></li>)}</ol></div></div>
      </section>
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}><div className={styles.sectionHeading}><p className={styles.eyebrow}>案例库建设中</p><h2>先建立可公开的证据格式</h2><p>当前网站不虚构客户名称、排名变化或推荐率。后续案例会按授权状态逐步发布。</p></div><div className={styles.featureGrid}><article className={`${styles.panel} ${styles.panelLead}`}><span className={styles.panelLabel}>匿名项目记录</span><h3>从问题地图到复测记录</h3><p>只公开已经脱敏并获得授权的范围，重点展示判断过程、建设动作和验收方式。</p></article><div className={styles.stack}><article className={styles.panel}><span className={styles.panelLabel}>公开样本研究</span><h3>用可复核样本说明方法</h3><p>围绕公开网站、公开问题和公开来源，记录 AI 回答中的事实与引用变化。</p></article><article className={styles.panel}><span className={styles.panelLabel}>合作伙伴</span><h3>欢迎共同形成公开案例</h3><p>如果你愿意授权，我们会先确认可公开的事实、数据范围和审核流程。</p></article></div></div></div>
      </section>
      <section className={`${styles.section} ${styles.sectionDark}`}><div className={styles.inner}><div className={styles.callout}><div><p className={styles.eyebrow}>建立你的基线</p><h2>从自己的真实问题开始</h2><p>先诊断，再决定是否需要公开案例或持续建设。</p></div><a className={styles.primaryButton} href="./diagnostic.html">了解诊断流程</a></div></div></section>
    </SupportPageFrame>
  )
}
