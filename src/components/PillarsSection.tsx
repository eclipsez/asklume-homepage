import { SiteIcon, type SiteIconName } from './SiteIcon'
import styles from './PillarsSection.module.css'

interface SolutionLane {
  title: string
  icon: SiteIconName
  problem: string
  actions: string
  deliverable: string
}

const solutionLanes: readonly SolutionLane[] = [
  {
    title: '被看见',
    icon: 'search',
    problem: '品牌主体混淆、核心页面难以读取，相关问题中缺少稳定出现。',
    actions: '问题集与平台基线、实体和主题关系校准、技术可读取性修复',
    deliverable: '基线记录、问题地图、技术修复清单',
  },
  {
    title: '被理解',
    icon: 'brain',
    problem: 'AI 能提到品牌，却无法准确说明能力、边界与适用场景。',
    actions: '核心事实对齐、证据台账建设、权威内容与 Schema 组织',
    deliverable: '事实源、证据台账、主题内容资产',
  },
  {
    title: '被选择',
    icon: 'star',
    problem: '回答缺少充分证据，品牌难以进入比较、引用与推荐语境。',
    actions: '决策型内容架构、来源与案例补强、多轮复测与偏差记录',
    deliverable: '场景与对比页面、复测记录、持续迭代清单',
  },
]

const servicePath = ['免费初筛', '基线诊断', '证据建设', '持续监测'] as const

export function PillarsSection() {
  return (
    <section
      aria-labelledby="pillars-title"
      className={styles.section}
      id="pillars"
    >
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="pillars-title">
            GEO-AIP™ 如何把企业事实变成可核验资产
          </h2>
          <p className={styles.sectionDesc}>
            从现状基线开始，经由事实与证据建设，再回到同一协议复测。
          </p>
        </header>

        <div className={styles.solutionLayout}>
          <aside className={styles.methodPanel} aria-label="GEO-AIP解决方案方法">
            <p className={styles.methodName}>GEO-AIP™ 方法</p>
            <h3>先建立基线，再决定建设重点</h3>
            <p className={styles.methodIntro}>
              先记录 AI 当前如何回答，再针对事实缺口、证据缺口和技术阻碍安排工程动作。
            </p>

            <dl className={styles.methodFacts}>
              <div>
                <dt>诊断对象</dt>
                <dd>品牌、产品、场景与竞争问题</dd>
              </div>
              <div>
                <dt>记录方式</dt>
                <dd>保留平台、模型、时间、原始回答与引用来源</dd>
              </div>
              <div>
                <dt>验收依据</dt>
                <dd>事实准确性、证据覆盖、技术实现与复测结果</dd>
              </div>
            </dl>

            <ol className={styles.servicePath} aria-label="服务路径">
              {servicePath.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <p className={styles.boundaryNote}>
              <strong>交付边界</strong>
              不承诺固定排名或推荐结果，只交付可控制、可复核的工程改进。
            </p>

            <a className={styles.methodLink} href="./geo-aip.html">
              查看完整 GEO-AIP™ 方法
            </a>
          </aside>

          <div className={styles.solutionPath}>
            {solutionLanes.map((lane) => (
              <article className={styles.solutionLane} key={lane.title}>
                <header className={styles.laneHeader}>
                  <span className={styles.iconPod} aria-hidden="true">
                    <SiteIcon name={lane.icon} size={28} />
                  </span>
                  <div>
                    <h3>{lane.title}</h3>
                    <p>{lane.problem}</p>
                  </div>
                </header>

                <div className={styles.laneDetails}>
                  <div className={styles.workBlock}>
                    <h4>工程动作</h4>
                    <p>{lane.actions}</p>
                  </div>
                  <div className={styles.outputBlock}>
                    <h4>可核验产出</h4>
                    <p>{lane.deliverable}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
