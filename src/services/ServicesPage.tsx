import evidenceEngineeringHero from '../assets/services/evidence-engineering-hero.jpg'
import globalEvidenceVisual from '../assets/services/evidence-system-generated.jpg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './ServicesPage.module.css'

const basePlan = {
  name: 'AI认知基础建设',
  price: '39,800',
  summary: '适合首次系统建设 AI 认知基础的企业。围绕一个核心业务方向，完成诊断、证据整理、建设与复测。',
  fit: '单品牌、单站点、核心业务边界清晰',
  items: ['核心问题与平台基线', '企业事实与证据台账', '重点页面及语义结构建设', '约定范围内的技术检查', '建设后复测与改进报告'],
} as const

const growthPlan = {
  name: 'AI认知增长建设',
  price: '69,800',
  summary: '适合产品线更丰富、竞争问题更多，或需要形成持续增长基础的企业。',
  fit: '多产品场景、重点竞品与更广问题覆盖',
  items: ['更广的问题、平台与竞品覆盖', '多主题证据体系与内容架构', '更多重点页面及技术实施', '多轮复测与偏差记录', '跨团队协作与后续增长计划'],
} as const

const comparison = [
  { label: '建设重点', base: '建立一个核心方向的完整闭环', growth: '扩展多主题与竞争场景的系统能力' },
  { label: '覆盖范围', base: '单品牌、单站点、核心业务', growth: '更多产品、问题、平台与竞品' },
  { label: '内容资产', base: '关键事实与重点页面', growth: '主题集群、决策页面与证据体系' },
  { label: '验证方式', base: '建设后基线复测', growth: '多轮复测、偏差记录与增长计划' },
] as const

const customTriggers = ['多品牌或多站点', '多国家或多语言', '强监管行业', '复杂 CMS 或 API 接入', '网站重构与定制开发'] as const

export function ServicesPage() {
  return (
    <div className={styles.page} id="top">
      <Header activeLabel="产品与服务" page="services" />

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>GEO-AIP™ 数字证据工程</p>
              <h1>让企业事实成为 AI 可用证据</h1>
              <p>两档标准服务覆盖诊断、建设与复测。复杂范围先评估，再进入定制。</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#plans">选择服务</a>
                <a className={styles.secondaryButton} href="./diagnostic.html?intent=general#intake">申请免费需求评估</a>
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <img
                alt="透明证据页面通过光线路径汇入可核验的信息核心"
                decoding="async"
                fetchPriority="high"
                src={evidenceEngineeringHero}
              />
            </figure>
          </div>
        </section>

        <section className={styles.plansSection} id="plans">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>选择建设范围，不购买结果承诺</h2>
              <p>两档服务都交付完整闭环，差别在覆盖广度、资产数量与复测深度。</p>
            </div>

            <div className={styles.planGrid}>
              <article className={styles.planBase} id="standard">
                <div className={styles.planTopline}>
                  <span>基础建设</span>
                  <span>完整闭环</span>
                </div>
                <h3>{basePlan.name}</h3>
                <p className={styles.price}><span>¥</span>{basePlan.price}</p>
                <p className={styles.planSummary}>{basePlan.summary}</p>
                <div className={styles.fitBlock}>
                  <span>适合</span>
                  <strong>{basePlan.fit}</strong>
                </div>
                <ul>
                  {basePlan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className={styles.planButton} href="./diagnostic.html?intent=base-plan#intake">咨询基础建设</a>
              </article>

              <article className={styles.planGrowth} id="growth">
                <div className={styles.planTopline}>
                  <span>增长建设</span>
                  <span>推荐方案</span>
                </div>
                <h3>{growthPlan.name}</h3>
                <p className={styles.price}><span>¥</span>{growthPlan.price}</p>
                <p className={styles.planSummary}>{growthPlan.summary}</p>
                <div className={styles.fitBlock}>
                  <span>适合</span>
                  <strong>{growthPlan.fit}</strong>
                </div>
                <ul>
                  {growthPlan.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className={styles.planButtonStrong} href="./diagnostic.html?intent=growth-plan#intake">咨询增长建设</a>
              </article>
            </div>
            <p className={styles.priceNote}>以上为标准服务价格。最终范围以双方确认的项目说明书为准。</p>
          </div>
        </section>

        <section className={styles.deliverySection}>
          <div className={styles.deliveryInner}>
            <h2>从现状到复测，交付一条完整路径</h2>
            <a className={styles.deliveryMethodLink} href="./geo-aip.html">查看 GEO-AIP™ 方法与验收标准</a>
            <div className={styles.deliveryFlow}>
              <article><strong>建立基线</strong><p>记录问题、平台、时间、原始回答与引用来源。</p></article>
              <article><strong>整理证据</strong><p>统一核心事实、来源、责任人与有效日期。</p></article>
              <article><strong>建设资产</strong><p>形成页面、内容结构和机器可读信息。</p></article>
              <article><strong>复测验收</strong><p>沿用约定协议记录变化与待改进项。</p></article>
            </div>
          </div>
        </section>

        <section className={styles.compareSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeadingCompact}>
              <h2>两档服务，差别在哪里</h2>
              <p>39,800 元先完成核心闭环，69,800 元把同一方法扩展到更广业务范围。</p>
            </div>
            <div className={styles.comparisonGrid}>
              {comparison.map((item) => (
                <article key={item.label}>
                  <h3>{item.label}</h3>
                  <div><span>39,800</span><p>{item.base}</p></div>
                  <div><span>69,800</span><p>{item.growth}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.globalSection} id="global">
          <div className={styles.globalInner}>
            <figure className={styles.globalVisual}>
              <img
                alt="面向目标市场的问题地图与证据来源组织"
                decoding="async"
                loading="lazy"
                src={globalEvidenceVisual}
              />
            </figure>
            <div className={styles.globalCopy}>
              <h2>出海不是翻译，是目标市场的证据重建</h2>
              <p>围绕当地用户问题、语言表达、可信来源与技术可访问性，重新组织企业事实。</p>
              <div className={styles.globalScope}>
                <article>
                  <h3>标准增强</h3>
                  <p>单品牌、单站点、单一目标市场，可在标准服务上增加出海范围。</p>
                </article>
                <article>
                  <h3>进入定制</h3>
                  <p>多国家、多语言、多站点或持续本地运营，需要单独评估。</p>
                </article>
              </div>
              <div className={styles.globalActions}>
                <a className={styles.textLink} href="./global-geo.html">了解海外 GEO 解决方案</a>
                <a className={styles.textLinkMuted} href="./diagnostic.html?intent=global-geo#intake">申请出海范围评估</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.extensionSection}>
          <div className={styles.extensionInner}>
            <article className={styles.customPanel} id="custom">
              <div>
                <h2>企业定制</h2>
                <p>当项目超出标准交付边界，我们先拆解范围、依赖和验收方式，再给出报价。</p>
              </div>
              <div className={styles.triggerCloud} aria-label="企业定制触发条件">
                {customTriggers.map((item) => <span key={item}>{item}</span>)}
              </div>
              <a href="./diagnostic.html?intent=custom#intake">提交定制需求</a>
            </article>

            <article className={styles.monitoringPanel} id="monitoring">
              <h2>持续监测与迭代</h2>
              <p>标准建设完成后，按约定问题与平台持续记录变化，识别事实过期、引用偏差和新增机会。</p>
              <ul>
                <li>定期复测与变化记录</li>
                <li>证据资产维护建议</li>
                <li>新增问题与竞争场景评估</li>
              </ul>
              <a href="./diagnostic.html?intent=monitoring#intake">咨询监测服务</a>
            </article>
          </div>
        </section>

        <section className={styles.boundarySection}>
          <div className={styles.boundaryInner}>
            <div>
              <h2>先确认问题，再确定服务范围</h2>
              <p>我们不承诺固定排名、推荐率或第三方模型输出，只交付可控制、可复核的工程改进。</p>
            </div>
            <a className={styles.primaryButton} href="./diagnostic.html?intent=general#intake">申请免费需求评估</a>
          </div>
        </section>
      </main>

      <Footer page="services" />
    </div>
  )
}
