import heroImage from '../assets/partnerships/media-research-hero.jpg'
import archiveImage from '../assets/partnerships/media-source-archive.jpg'
import { ClosingCta, PartnershipFrame, partnershipStyles as styles } from './PartnershipFrame'

const topics = [
  ['GEO 与 AI 搜索', '解释企业如何从传统搜索进入 AI 回答和决策场景。'],
  ['数字证据工程', '讨论事实、来源、页面与复测如何形成可审计链路。'],
  ['品牌 AI 认知风险', '识别主体混淆、事实冲突、旧信息和错误引用。'],
  ['全球 AI 可发现性', '分析多语言、当地问题和可信来源之间的关系。'],
] as const

const formats = [
  ['专家采访', '围绕明确主题提供方法解释和行业观察。'],
  ['研究引用', '在授权范围内提供可追溯来源和引用说明。'],
  ['联合研究', '共同定义问题、样本、记录方式和发布边界。'],
  ['演讲与圆桌', '为行业活动提供面向企业决策者的 GEO 议题。'],
] as const

export function MediaPage() {
  return (
    <PartnershipFrame
      description="为媒体、研究机构和行业活动提供可核验的 GEO 方法解释、资料线索与企业实践观察。"
      eyebrow="媒体与研究合作"
      heroAlt="多层研究来源被连接并整理为清晰的公开叙事"
      heroImage={heroImage}
      page="media"
      primaryAction={{ href: 'mailto:hello@asklume.com?subject=媒体与研究合作申请', label: '提交采访需求' }}
      secondaryAction={{ href: './about.html', label: '了解 AskLume' }}
      title="让可核验的 GEO 研究进入公共讨论"
    >
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.editorialIntro}>
            <div><h2>我们可以讨论什么</h2><p>优先回应有清晰议题、发布场景和时间要求的采访或研究需求。</p></div>
            <div className={styles.topicGrid}>{topics.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <header className={styles.sectionHeading}><h2>合作形式取决于资料用途</h2><p>我们会先确认内容是否公开、是否需要原始来源，以及 AskLume 以何种身份出现。</p></header>
          <div className={styles.formatGrid}>{formats.map(([title, text], index) => <article className={index === 2 ? styles.formatWide : ''} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionNavy}`}>
        <div className={styles.inner}>
          <div className={styles.mediaSplit}>
            <div className={styles.boundaryCopy}>
              <h2>引用之前，先确认来源和表达边界</h2>
              <p>公开材料、方法说明、观察结论和客户案例的证据等级不同。我们会区分可直接引用、需要背景说明和不可公开的内容。</p>
              <div className={styles.policyList}>
                <div><strong>可引用</strong><span>官网公开事实、正式发布的方法说明和已授权资料。</span></div>
                <div><strong>需确认</strong><span>阶段性研究、未公开数据、客户实践和合作方信息。</span></div>
                <div><strong>不提供</strong><span>客户敏感资料、未经授权案例和无法追溯的效果数字。</span></div>
              </div>
            </div>
            <figure className={styles.supportVisual}><img alt="经过整理并准备核验的来源档案" loading="lazy" src={archiveImage} /></figure>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.requestLayout}>
            <div><h2>一封完整的采访邮件应包含</h2><p>信息越完整，我们越容易判断是否能在你的截稿时间内提供有效回应。</p></div>
            <dl>
              <div><dt>机构与栏目</dt><dd>媒体、研究机构、播客或活动名称及公开链接</dd></div>
              <div><dt>主题与形式</dt><dd>采访问题、研究方向、引用需求或演讲形式</dd></div>
              <div><dt>发布与截止时间</dt><dd>预计发布日期、采访时间和材料提交时间</dd></div>
              <div><dt>使用范围</dt><dd>文字、视频、音频、研究报告或活动传播范围</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <ClosingCta description="请附上机构、主题、形式、截止时间和预计发布渠道。" href="mailto:hello@asklume.com?subject=媒体与研究合作申请" label="提交采访需求" title="让我们先判断是否适合回应" />
    </PartnershipFrame>
  )
}
