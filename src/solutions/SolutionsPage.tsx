import heroVisual from '../assets/solutions/solutions-architecture-hero.jpg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './SolutionsPage.module.css'

const solutions = [
  {
    id: 'discoverability',
    title: 'AI可发现性建设',
    problem: 'AI回答相关问题时不出现品牌，官网虽存在，重要页面却难以被读取。',
    fit: ['品牌、产品与核心场景关系不清', '核心页面存在读取或索引障碍', '相关问题中缺少稳定出现'],
    work: ['问题与平台基线', '技术可读取性检查', '实体与主题关系建设', '核心事实页面建设'],
    output: '问题地图、技术修复清单、核心事实页面、建设后复测记录',
  },
  {
    id: 'correction',
    title: 'AI认知纠偏',
    problem: 'AI能够提到品牌，但对产品边界、适用对象或服务能力的描述不准确。',
    fit: ['公开来源之间存在事实冲突', '旧信息持续影响当前回答', '品牌主体或产品关系被混淆'],
    work: ['企业核心事实源', '证据台账', '冲突信息治理', '权威说明页面与复测'],
    output: '核心事实源、冲突台账、权威说明资产、纠偏复测记录',
  },
  {
    id: 'decision-content',
    title: '复杂业务与决策内容建设',
    problem: '产品线多、决策门槛高，AI知道品牌，却无法说明为什么适合当前场景。',
    fit: ['B2B或专业服务', '用户需要比较与内部决策', '能力、案例和场景之间缺少关系'],
    work: ['决策问题地图', '产品、能力与案例关系', '对比型和场景型页面', '可引用来源组织'],
    output: '决策问题地图、内容架构、场景页面、对比与证据资产',
  },
] as const

export function SolutionsPage() {
  return (
    <div className={styles.page} id="top">
      <Header activeLabel="解决方案" page="solutions" />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>企业问题解决方案</p>
              <h1>先看清断点，再安排建设</h1>
              <p>同一个 GEO-AIP™ 方法，从不同业务问题进入。先建立基线，再决定事实、证据、内容与技术的优先级。</p>
              <div className={styles.actions}>
                <a className={styles.primaryButton} href="#paths">选择问题路径</a>
                <a className={styles.secondaryButton} href="./geo-aip.html">查看 GEO-AIP™ 方法</a>
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <img alt="四类企业AI认知问题汇入统一证据架构" decoding="async" fetchPriority="high" src={heroVisual} />
            </figure>
          </div>
        </section>

        <section className={styles.paths} id="paths">
          <div className={styles.inner}>
            <header className={styles.sectionHeading}>
              <h2>按症状找到正确入口</h2>
              <p>这里回答“企业遇到什么问题，应该怎么解决”。具体购买范围在产品与服务页确认。</p>
            </header>
            <div className={styles.pathList}>
              {solutions.map((solution, index) => (
                <article className={styles.path} id={solution.id} key={solution.id}>
                  <div className={styles.pathIntro}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{solution.title}</h3>
                    <p>{solution.problem}</p>
                  </div>
                  <div className={styles.pathSignals}>
                    <h4>典型信号</h4>
                    <ul>{solution.fit.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className={styles.pathWork}>
                    <h4>核心工作</h4>
                    <ul>{solution.work.map((item) => <li key={item}>{item}</li>)}</ul>
                    <p><strong>可核验产出</strong>{solution.output}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.globalFeature}>
          <div className={styles.globalInner}>
            <div className={styles.globalCopy}>
              <p>重点解决方案</p>
              <h2>品牌出海与全球AI可发现性</h2>
              <span>国内内容资产不能自动成为海外 AI 的可信证据。目标市场需要重新建立问题集、本地事实、可信来源与多语言技术关系。</span>
              <a href="./global-geo.html">进入海外 GEO 专题页</a>
            </div>
            <div className={styles.globalIndex} aria-label="海外GEO四个关键层面">
              <span>目标市场问题集</span>
              <span>本地语言事实</span>
              <span>当地可信来源</span>
              <span>多语言技术关系</span>
            </div>
          </div>
        </section>

        <section className={styles.crosswalk}>
          <div className={styles.inner}>
            <div className={styles.crosswalkHeading}>
              <h2>问题、方法与购买范围，各自回答一件事</h2>
              <p>清晰分层，避免客户在“我要解决什么”和“我要买什么”之间来回猜测。</p>
            </div>
            <div className={styles.crosswalkGrid}>
              <a href="./solutions.html"><strong>解决方案</strong><span>确认当前业务断点与进入路径</span></a>
              <a href="./geo-aip.html"><strong>GEO-AIP™ 方法</strong><span>理解基线、证据、建设与复测</span></a>
              <a href="./services.html"><strong>产品与服务</strong><span>选择39,800、69,800或定制范围</span></a>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div><h2>不知道属于哪一种问题？</h2><p>先提交当前业务、目标市场和关注问题，我们会判断适合的解决路径与服务范围。</p></div>
          <a className={styles.primaryButton} href="./index.html#diagnostic">免费需求评估</a>
        </section>
      </main>
      <Footer page="solutions" />
    </div>
  )
}
