import heroImage from '../assets/partnerships/public-sector-hero.jpg'
import pilotImage from '../assets/partnerships/public-sector-pilot.jpg'
import { ClosingCta, PartnershipFrame, partnershipStyles as styles } from './PartnershipFrame'

const scenarios = [
  ['区域产业认知基线', '记录 AI 如何回答区域、产业、企业和投资服务相关问题。'],
  ['公共事实源治理', '整理公开政策、产业数据、主体关系和服务信息的来源与更新责任。'],
  ['重点主体内容建设', '围绕产业链、园区和企业建立可读取、可核验的说明页面。'],
  ['国际传播与多语言', '按目标市场重新建立问题、事实、当地来源和技术关系。'],
] as const

const deliverables = [
  ['问题与平台基线', '约定问题集、平台、模型、时间和原始回答记录。'],
  ['经授权的事实源', '明确公开范围、更新责任、来源链接和冲突处理。'],
  ['建设与技术清单', '形成页面、内容、结构化信息和可访问性工作项。'],
  ['复测与维护记录', '按同一协议复测，保留变化、偏差和后续建议。'],
] as const

export function PublicSectorPage() {
  return (
    <PartnershipFrame
      description="帮助区域、园区和产业主体建立公开、准确、可核验的 AI 信息基础，并形成可验收的建设记录。"
      eyebrow="政府与产业合作"
      heroAlt="区域产业主体连接至稳定的公共信息与证据基础"
      heroImage={heroImage}
      page="publicSector"
      primaryAction={{ href: 'mailto:hello@asklume.com?subject=政府与产业合作咨询', label: '预约项目沟通' }}
      secondaryAction={{ href: '#pilot', label: '查看试点方式' }}
      title="为区域产业建立可核验的 AI 信息基础"
    >
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}><h2>适合从明确公共问题切入</h2><p>项目不以堆积宣传内容为目标，而是改善公开事实、来源、页面和复测之间的连接。</p></header>
          <div className={styles.scenarioGrid}>{scenarios.map(([title, text], index) => <article className={index === 0 ? styles.scenarioLead : ''} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`} id="pilot">
        <div className={styles.inner}>
          <div className={styles.pilotLayout}>
            <figure className={styles.supportVisual}><img alt="不同区域主体经过授权和审核进入统一验收结构" loading="lazy" src={pilotImage} /></figure>
            <div className={styles.pilotCopy}>
              <h2>先做小范围试点，再决定是否扩展</h2>
              <p>建议选择一个区域主题、一组重点主体和一批真实问题，完成从基线到复测的闭环。</p>
              <ol className={styles.compactProcess}>
                <li><strong>明确对象</strong><span>确认区域、产业、主体、用户和公开问题范围。</span></li>
                <li><strong>建立基线</strong><span>保存原始回答、引用来源和事实偏差。</span></li>
                <li><strong>执行建设</strong><span>治理事实、来源、页面和技术可访问性。</span></li>
                <li><strong>验收复测</strong><span>按约定协议复测并记录未解决项。</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionNavy}`}>
        <div className={styles.inner}>
          <header className={`${styles.sectionHeading} ${styles.sectionHeadingLight}`}><h2>项目交付必须可以检查和接续维护</h2><p>每项工作都需要对应责任人、来源、状态和验收依据。</p></header>
          <div className={styles.deliverableGrid}>{deliverables.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.governanceLayout}>
            <div><h2>公开、授权和安全边界优先于传播速度</h2><p>项目只处理公开或经授权的信息，不以绕过平台规则或控制第三方模型为目标。</p></div>
            <div className={styles.governanceRules}>
              <article><h3>信息授权</h3><p>明确哪些事实可以公开、由谁确认、何时更新。</p></article>
              <article><h3>数据最小化</h3><p>不要求提交与项目目标无关的个人或敏感数据。</p></article>
              <article><h3>结果边界</h3><p>不承诺固定排名、引用、推荐或模型输出。</p></article>
              <article><h3>采购与验收</h3><p>以约定交付物、实施记录和复测结果完成验收。</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}><h2>项目沟通前建议准备</h2></header>
          <div className={styles.prepGrid}>
            <span>机构与项目背景</span><span>目标区域和产业范围</span><span>重点主体或服务对象</span><span>现有公开资料入口</span><span>希望解决的问题</span><span>采购阶段与时间窗口</span>
          </div>
        </div>
      </section>

      <ClosingCta description="请说明机构、项目范围、目标区域、现有资料和预计时间窗口。" href="mailto:hello@asklume.com?subject=政府与产业合作咨询" label="预约项目沟通" title="从一个可验收的试点开始" />
    </PartnershipFrame>
  )
}
