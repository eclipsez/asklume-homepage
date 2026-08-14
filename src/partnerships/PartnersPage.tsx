import heroImage from '../assets/partnerships/channel-partnership-hero.jpg'
import deliveryImage from '../assets/partnerships/channel-delivery.jpg'
import { ClosingCta, PartnershipFrame, partnershipStyles as styles } from './PartnershipFrame'

const partnerTypes = [
  ['品牌、公关与传播机构', '需要为客户补充 AI 认知诊断、证据治理与可复测交付能力。'],
  ['SEO 与内容营销团队', '希望把搜索、内容与 GEO 工作连接到同一套事实和验收体系。'],
  ['出海与本地化服务商', '需要处理目标市场问题、本地来源和多语言技术关系。'],
  ['行业顾问与解决方案商', '掌握行业与客户关系，需要稳定的专业能力共同完成项目。'],
] as const

const collaborationModes = [
  ['商机推荐', '伙伴负责识别机会并完成必要背景说明，AskLume 独立评估范围、签约和交付。'],
  ['联合交付', '双方共同服务客户，启动前写清客户窗口、专业分工、资料权限和验收责任。'],
  ['能力补充', 'AskLume 在既有品牌、内容或出海项目中承担约定的 GEO 专项工作。'],
] as const

const process = [
  ['背景核验', '确认公司、现有服务、客户类型与公开合作身份。'],
  ['机会对齐', '判断客户问题是否属于 AskLume 可控制的服务范围。'],
  ['边界确认', '写清沟通窗口、交付责任、数据权限与商业条件。'],
  ['项目复盘', '以交付记录和客户反馈决定是否扩大合作范围。'],
] as const

export function PartnersPage() {
  return (
    <PartnershipFrame
      description="把 GEO-AIP™ 数字证据工程接入现有客户服务，共同交付可控制、可复核的企业 AI 认知建设。"
      eyebrow="渠道与代理合作"
      heroAlt="两类专业网络经过清晰边界汇合为一条联合交付路径"
      heroImage={heroImage}
      page="partners"
      primaryAction={{ href: 'mailto:hello@asklume.com?subject=申请渠道与代理合作', label: '申请合作评估' }}
      secondaryAction={{ href: '#boundary', label: '了解交付边界' }}
      title="把 GEO 能力接入你的客户服务体系"
    >
      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}>
            <h2>适合已经拥有客户关系和专业能力的伙伴</h2>
            <p>合作从真实项目和明确分工开始，不以购买代理资格或囤积名额为前提。</p>
          </header>
          <div className={styles.partnerRows}>
            {partnerTypes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}><h2>合作方式由客户关系和项目责任决定</h2><p>所有模式都需要保留真实服务主体，不把专业工作包装成无法追溯的黑盒。</p></header>
          <div className={styles.modeGrid}>
            {collaborationModes.map(([title, text], index) => <article className={index === 0 ? styles.modeLead : ''} key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionNavy}`} id="boundary">
        <div className={styles.inner}>
          <div className={styles.mediaSplit}>
            <figure className={styles.supportVisual}><img alt="两套专业模块围绕共同项目边界完成对齐" loading="lazy" src={deliveryImage} /></figure>
            <div className={styles.boundaryCopy}>
              <h2>联合交付之前，先把边界写清楚</h2>
              <div className={styles.boundaryColumns}>
                <div><h3>伙伴通常负责</h3><p>客户关系、行业背景、项目协同、必要资料收集和既有服务衔接。</p></div>
                <div><h3>AskLume 通常负责</h3><p>问题基线、事实与证据治理、页面和技术工作、复测及约定交付物。</p></div>
              </div>
              <p className={styles.boundaryNote}>具体责任以项目工作单为准。未经确认，不承诺区域独家、固定返佣或白标交付。</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}><h2>从一次可复盘的项目开始</h2><p>合作机制会根据实际交付表现逐步确认，不以口头承诺替代项目记录。</p></header>
          <ol className={styles.processList}>{process.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}><h2>合作前常见问题</h2></header>
          <div className={styles.faqList}>
            <details><summary>是否提供公开的代理价和返佣表？</summary><p>暂不公开。商业条件需要结合合作模式、客户责任和实际交付范围单独确认。</p></details>
            <details><summary>可以用合作伙伴自己的品牌交付吗？</summary><p>是否联合品牌、共同提案或由一方作为主服务商，需要在项目启动前确认，不默认提供完全白标。</p></details>
            <details><summary>合作伙伴是否需要掌握 GEO 技术？</summary><p>不要求复制 AskLume 的专业工作，但需要能够准确介绍服务边界，并配合客户事实和权限确认。</p></details>
          </div>
        </div>
      </section>

      <ClosingCta description="请说明公司、现有服务、主要客户类型、目标市场，以及希望采用的合作方式。" href="mailto:hello@asklume.com?subject=申请渠道与代理合作" label="申请合作评估" title="有真实项目，再开始合作判断" />
    </PartnershipFrame>
  )
}
