import evidenceLedgerCover from '../assets/resources/evidence-ledger-cover.jpg'
import methodHero from '../assets/methodology/geo-aip-method-hero.jpg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './GeoAipPage.module.css'

const stages = [
  {
    title: '建立基线',
    statement: '先记录 AI 当前如何回答，再讨论建设动作。',
    input: '品牌、产品、业务场景、用户问题与目标平台',
    output: '原始回答、引用来源、事实状态与问题地图',
  },
  {
    title: '整理证据',
    statement: '把分散材料转成有来源、有日期、有边界的企业事实。',
    input: '官网、产品资料、资质、案例、研究与公开来源',
    output: '核心事实源、证据台账、冲突与缺口清单',
  },
  {
    title: '建设资产',
    statement: '将事实组织成用户可读、机器可取、团队可维护的资产。',
    input: '已确认事实、证据关系、页面目标与技术环境',
    output: '重点页面、主题结构、Schema 与技术实施记录',
  },
  {
    title: '复测验收',
    statement: '沿用约定协议记录变化、无变化和不确定性。',
    input: '原始基线、建设清单、约定问题与测试条件',
    output: '复测记录、事实核验、偏差分析与迭代建议',
  },
] as const

const measurementFields = [
  ['问题与意图', '用户实际会问什么，以及这个问题处于认知、比较还是决策阶段。'],
  ['平台与模型', '记录实际测试环境，避免把不同平台的回答混为同一结果。'],
  ['时间与地区', '保留采样条件，让后续复测可以解释环境差异。'],
  ['原始回答', '保存完整文本，不只截取对品牌有利的片段。'],
  ['引用来源', '记录答案引用了什么，来源是否真实、有效并支持该主张。'],
  ['事实准确性', '逐项核对主体、能力、范围、条件和限制是否正确。'],
  ['竞争参照', '观察同类主体如何出现，但不把单次顺序包装成排名。'],
  ['复测变化', '记录改善、退化、无变化和无法判断的部分。'],
] as const

const acceptanceGroups = [
  {
    title: '记录完整',
    body: '问题、平台、时间、原始回答和引用来源可以回看。',
  },
  {
    title: '事实一致',
    body: '核心主张有来源、有范围，并处理明显冲突与过期信息。',
  },
  {
    title: '实施可查',
    body: '页面、结构化数据和技术调整有明确清单与完成状态。',
  },
  {
    title: '复测同标',
    body: '验收沿用约定问题和条件，不以挑选样本代替整体记录。',
  },
] as const

const serviceMapping = [
  {
    name: 'AI认知基础建设',
    price: '39,800',
    body: '在一个核心业务方向内完成基线、证据、建设与复测闭环。',
  },
  {
    name: 'AI认知增长建设',
    price: '69,800',
    body: '将同一方法扩展到更多产品、问题、平台和竞争场景。',
  },
  {
    name: '企业定制',
    price: '范围评估',
    body: '用于多品牌、多站点、多语言、强监管或复杂技术环境。',
  },
] as const

export function GeoAipPage() {
  return (
    <div className={styles.page} id="top">
      <Header page="methodology" />

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>GEO-AIP™ 方法</p>
              <h1>让建设有依据，让结果能复核</h1>
              <p>从认知基线到复测验收，把企业事实组织成可维护的数字证据。</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#workflow">查看工作路径</a>
                <a className={styles.secondaryButton} href="./services.html">查看服务方案</a>
              </div>
            </div>

            <figure className={styles.heroVisual}>
              <img
                alt="四层透明证据结构通过连续路径连接到核验镜头"
                decoding="async"
                fetchPriority="high"
                src={methodHero}
              />
            </figure>
          </div>
        </section>

        <section className={styles.charterSection}>
          <div className={styles.charterInner}>
            <div className={styles.charterLead}>
              <h2>一套连接诊断、建设与验收的工作方法</h2>
              <p>GEO-AIP™ 处理企业能够控制的事实、证据、页面、技术实现与测量记录。</p>
            </div>

            <div className={styles.charterGrid}>
              <article className={styles.isPanel}>
                <h3>它是什么</h3>
                <p>用于组织范围、输入、工程动作、交付物和复测条件的方法体系。</p>
                <ul>
                  <li>以真实业务问题建立测试范围</li>
                  <li>以来源和有效日期管理企业事实</li>
                  <li>以可查记录完成实施和复测</li>
                </ul>
              </article>
              <article className={styles.notPanel}>
                <h3>它不是什么</h3>
                <p>它不控制第三方模型，也不把技术配置包装成结果保证。</p>
                <ul>
                  <li>不承诺固定排名或推荐率</li>
                  <li>不以批量文章替代企业证据</li>
                  <li>不以单次截图代替长期结论</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.workflowSection} id="workflow">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>四个动作，组成完整闭环</h2>
              <p>每个动作都规定输入和可核验产出，避免项目只有概念，没有验收依据。</p>
            </div>

            <div className={styles.stageList}>
              {stages.map((stage) => (
                <article key={stage.title}>
                  <div className={styles.stageStatement}>
                    <h3>{stage.title}</h3>
                    <p>{stage.statement}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>输入</dt>
                      <dd>{stage.input}</dd>
                    </div>
                    <div>
                      <dt>产出</dt>
                      <dd>{stage.output}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.measureSection}>
          <div className={styles.measureInner}>
            <div className={styles.measureCopy}>
              <h2>测量不是一个分数，而是一组可回看的记录</h2>
              <p>分数可以用于内部汇总，但不能代替原始回答、引用来源和事实核验。</p>
              <div className={styles.fieldGrid}>
                {measurementFields.map(([title, body]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
              </div>
            </div>

            <figure className={styles.measureVisual}>
              <img
                alt="企业事实、来源和有效日期组成的证据台账"
                decoding="async"
                loading="lazy"
                src={evidenceLedgerCover}
              />
            </figure>
          </div>
        </section>

        <section className={styles.acceptanceSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeadingCompact}>
              <h2>验收看这些，不看不可控承诺</h2>
              <p>项目是否完成，应由记录、事实、实施和复测共同判断。</p>
            </div>

            <div className={styles.acceptanceGrid}>
              {acceptanceGroups.map((group) => (
                <article key={group.title}>
                  <strong>{group.title}</strong>
                  <p>{group.body}</p>
                </article>
              ))}
            </div>

            <div className={styles.boundaryBand}>
              <strong>统一边界</strong>
              <p>不承诺操控第三方模型、固定排名、固定推荐率、固定收录时间或直接收入结果。</p>
            </div>
          </div>
        </section>

        <section className={styles.mappingSection}>
          <div className={styles.mappingInner}>
            <div className={styles.mappingIntro}>
              <h2>同一套方法，不同建设范围</h2>
              <p>两档标准服务的差别主要在覆盖广度、资产数量、实施深度和复测范围。</p>
              <a href="./services.html#plans">查看完整服务对比</a>
            </div>

            <div className={styles.mappingList}>
              {serviceMapping.map((service) => (
                <article key={service.name}>
                  <div>
                    <span>{service.price}</span>
                    <h3>{service.name}</h3>
                  </div>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closingSection}>
          <div className={styles.closingInner}>
            <div>
              <h2>先建立基线，再决定建设重点</h2>
              <p>提交一个业务方向，我们先确认问题范围、测试条件和是否值得进入建设。</p>
            </div>
            <a className={styles.primaryButton} href="./index.html#diagnostic">免费需求评估</a>
          </div>
        </section>
      </main>

      <Footer page="methodology" />
    </div>
  )
}
