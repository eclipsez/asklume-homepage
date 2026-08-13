import heroVisual from '../assets/global/global-evidence-hero.jpg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './GlobalGeoPage.module.css'

const breakpoints = [
  ['语言断点', '英文页面只是中文内容的翻译，没有对应当地用户的真实问题与表达。'],
  ['主体断点', '不同市场的品牌、产品、公司主体和渠道关系不一致。'],
  ['来源断点', 'AI引用的仍是旧来源、二手来源，或与目标市场无关的内容。'],
  ['技术断点', '多语言页面关系、抓取、索引和结构化信息无法被稳定识别。'],
] as const

const route = [
  ['目标市场问题集', '从当地客户、竞争语境、购买场景和平台差异建立基线。'],
  ['本地事实与证据', '不是逐句翻译，而是确认当地可成立的产品、主体、资质与能力表达。'],
  ['可信来源环境', '组织官网、行业媒体、合作伙伴、案例和公开资料之间的证据关系。'],
  ['多语言技术实现', '校准语言版本、页面关系、Schema、抓取与可访问性。'],
  ['同协议复测', '保留平台、模型、时间、回答与引用来源，记录变化和偏差。'],
] as const

export function GlobalGeoPage() {
  return (
    <div className={styles.page} id="top">
      <Header activeLabel="解决方案" page="globalGeo" />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>品牌出海与全球AI可发现性</p>
              <h1>海外市场不是中文内容的翻译版</h1>
              <p>让目标市场的 AI 正确理解企业，需要重新建立问题、事实、来源与技术关系。</p>
              <div className={styles.actions}>
                <a className={styles.primaryButton} href="#assessment">申请海外范围评估</a>
                <a className={styles.secondaryButton} href="./solutions.html">返回解决方案</a>
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <img alt="企业事实经过多语言证据层连接至不同目标市场" decoding="async" fetchPriority="high" src={heroVisual} />
            </figure>
          </div>
        </section>

        <section className={styles.breakpointSection}>
          <div className={styles.inner}>
            <header className={styles.sectionHeading}>
              <h2>企业出海常见的四个 AI 认知断点</h2>
              <p>页面有英文版本，不等于目标市场已经形成可发现、可理解、可引用的证据环境。</p>
            </header>
            <div className={styles.breakpointGrid}>
              {breakpoints.map(([title, text], index) => (
                <article className={index === 0 ? styles.breakpointLead : styles.breakpoint} key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.routeSection}>
          <div className={styles.inner}>
            <header className={styles.sectionHeadingLight}>
              <h2>从目标市场问题集开始，而不是从翻译开始</h2>
              <p>GEO-AIP™ 在每个市场使用同一套可复核原则，但问题、语言和来源必须重新建立。</p>
            </header>
            <ol className={styles.routeList}>
              {route.map(([title, text], index) => (
                <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.evidenceSection}>
          <div className={styles.evidenceInner}>
            <div className={styles.evidenceCopy}>
              <h2>当地可信来源决定证据能否成立</h2>
              <p>海外 GEO 不是增加英文文章数量。更关键的是让目标市场中的事实源、行业来源、案例与官网信息彼此一致。</p>
              <a href="./geo-aip.html">查看证据台账与复测方法</a>
            </div>
            <div className={styles.sourceLayers}>
              <article><strong>企业事实源</strong><span>主体、产品、能力、适用边界</span></article>
              <article><strong>当地证明来源</strong><span>媒体、协会、伙伴、客户与公开资料</span></article>
              <article><strong>决策内容资产</strong><span>场景、比较、案例、FAQ与验证页面</span></article>
            </div>
          </div>
        </section>

        <section className={styles.technicalSection}>
          <div className={styles.inner}>
            <header className={styles.technicalHeading}><h2>多语言网站需要清晰的技术关系</h2><p>技术检查只处理可控制项，不把抓取或模型输出包装成确定结果。</p></header>
            <div className={styles.technicalColumns}>
              <div><h3>内容与实体关系</h3><ul><li>语言版本对应关系</li><li>品牌与公司主体一致性</li><li>产品命名与市场边界</li><li>本地案例和来源归属</li></ul></div>
              <div><h3>访问与机器理解</h3><ul><li>抓取、索引与渲染检查</li><li>canonical 与 hreflang 关系</li><li>Schema 和关键事实结构</li><li>站点地图与内部链接</li></ul></div>
            </div>
          </div>
        </section>

        <section className={styles.scopeSection} id="assessment">
          <div className={styles.scopeInner}>
            <div className={styles.scopeHeading}><h2>单市场可增强，多市场需定制</h2><p>先确认品牌、站点、语言和目标市场数量，再决定进入标准服务增强项还是定制项目。</p></div>
            <div className={styles.scopeOptions}>
              <article><span>标准服务增强项</span><h3>单品牌、单站点、单一目标市场</h3><p>可在39,800或69,800标准建设范围上增加海外市场工作。</p><a href="./services.html#global">查看产品与服务边界</a></article>
              <article><span>定制触发项</span><h3>多国家、多语言、多站点或持续本地运营</h3><p>需要单独拆解市场优先级、内容依赖、当地来源与验收协议。</p><a href="mailto:hello@asklume.com?subject=申请海外GEO范围评估">申请海外范围评估</a></article>
            </div>
            <p className={styles.boundary}>不承诺固定排名、引用率或推荐结果，只交付约定范围内可控制、可复核的工程改进。</p>
          </div>
        </section>
      </main>
      <Footer page="globalGeo" />
    </div>
  )
}
