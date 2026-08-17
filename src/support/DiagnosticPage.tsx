import diagnosticHero from '../assets/diagnostic/diagnostic-baseline-hero.jpg'
import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'
import { IntakeForm } from '../components/IntakeForm'

const diagnosticSteps = [
  { title: '记录现状', body: '围绕约定的问题、平台、模型与时间，保留原始回答和引用来源。' },
  { title: '判断断点', body: '区分可见性、事实准确性、证据覆盖和技术可读取性问题。' },
  { title: '安排建设', body: '按影响、依赖和可控程度排序，形成清晰的工程动作与验收依据。' },
] as const

export function DiagnosticPage() {
  return (
    <SupportPageFrame
      activeLabel="产品与服务"
      description="先确认 AI 当前如何理解您的品牌，再决定哪些内容、证据和技术环节值得投入。"
      eyebrow="AI 认知基线诊断"
      heroAlt="多来源证据进入 AI 认知基线校准网格"
      heroImage={diagnosticHero}
      page="diagnostic"
      primaryAction={{ href: './diagnostic.html#intake', label: '申请免费需求评估' }}
      secondaryAction={{ href: './services.html', label: '查看服务范围' }}
      title="先看清问题，再安排建设"
    >
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>诊断不是一张分数表</p>
            <h2>它是一份可以继续使用的决策底稿</h2>
            <p>诊断结果需要能够回答：AI 现在怎么说、为什么这样说、哪些地方可以被企业主动改善。</p>
          </div>
          <div className={styles.split}>
            <div className={styles.splitCopy}>
              <p>我们会把测试条件、原始回答、引用来源与判断依据放在同一条记录里，避免把偶然截图当成结论。</p>
              <p>后续服务可以直接沿用这份基线，比较建设前后的事实准确性、证据覆盖和复测变化。</p>
            </div>
            <ol className={styles.numberList}>
              {diagnosticSteps.map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>开始前准备</p>
            <h2>带着问题来，不需要先准备一套完美材料</h2>
          </div>
          <div className={styles.featureGrid}>
            <article className={`${styles.panel} ${styles.panelLead}`}>
              <span className={styles.panelLabel}>建议提供</span>
              <h3>官网、核心产品与最想验证的 AI 问题</h3>
              <p>如果已有品牌词、竞品、目标市场或典型回答，也可以一并提供。材料不完整时，我们会在启动前明确缺口。</p>
            </article>
            <div className={styles.stack}>
              <article className={styles.panel}><h3>适合谁</h3><p>准备启动 GEO 建设、正在出海，或发现 AI 对企业理解不稳定的团队。</p></article>
              <article className={styles.panel}><h3>不承诺什么</h3><p>不承诺固定排名、推荐率或第三方模型的可控结果，只交付可复核的判断与建设依据。</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhite}`} id="intake">
        <div className={styles.inner}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>需求申请</p>
            <h2>申请免费需求评估</h2>
            <p>填写以下信息，我们通常在 1 个工作日内明确问题属于诊断、建设还是定制范围。</p>
          </div>
          <IntakeForm />
        </div>
      </section>
    </SupportPageFrame>
  )
}

