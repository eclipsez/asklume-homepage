import { useMemo, useState } from 'react'
import { Header } from '../components/Header'
import { Brand } from '../components/Brand'
import evidenceLedgerCover from '../assets/resources/evidence-ledger-cover.jpg'
import queryMapCover from '../assets/resources/query-map-cover.jpg'
import resourceHero from '../assets/resources/resource-hero.jpg'
import {
  faqItems,
  resourceCategories,
  resources,
  type ResourceFilter,
} from './resourceContent'
import styles from './ResourcesPage.module.css'

function ResourceLibrary() {
  const [filter, setFilter] = useState<ResourceFilter>('全部')
  const [query, setQuery] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const visibleResources = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('zh-CN')

    return resources.filter((resource) => {
      const matchesFilter = filter === '全部' || resource.category === filter
      const haystack = [
        resource.title,
        resource.summary,
        resource.takeaway,
        resource.category,
        resource.format,
      ]
        .join(' ')
        .toLocaleLowerCase('zh-CN')

      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery))
    })
  }, [filter, query])

  return (
    <section className={styles.librarySection} id="resource-library">
      <div className={styles.sectionInner}>
        <div className={styles.libraryHeading}>
          <p className={styles.eyebrow}>按任务查找</p>
          <h2>带着问题来，带着方法走</h2>
          <p>内容按企业实际工作拆分，每份资源都说明适用范围和不能替代的判断。</p>
        </div>

        <div className={styles.libraryControls}>
          <label className={styles.searchField}>
            <span>搜索资源</span>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="例如：问题集、证据、Schema"
              type="search"
              value={query}
            />
          </label>

          <div aria-label="资源分类" className={styles.filters} role="group">
            {resourceCategories.map((category) => (
              <button
                aria-pressed={filter === category}
                className={filter === category ? styles.activeFilter : styles.filterButton}
                key={category}
                onClick={() => setFilter(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite" className={styles.resultCount}>
          找到 {visibleResources.length} 份资源
        </div>

        {visibleResources.length > 0 ? (
          <div className={styles.resourceGrid}>
            {visibleResources.map((resource) => {
              const isExpanded = expandedId === resource.id

              return (
                <article className={styles.resourceCard} id={resource.id} key={resource.id}>
                  <div className={styles.resourceMeta}>
                    <span>{resource.category}</span>
                    <span>{resource.format}</span>
                    <span>{resource.readingTime}</span>
                  </div>
                  <h3>
                    <a href="/resource-detail.html" style={{ color: 'inherit', textDecoration: 'none' }}>
                      {resource.title}
                    </a>
                  </h3>
                  <p>{resource.summary}</p>
                  <div
                    className={styles.takeaway}
                    hidden={!isExpanded}
                    id={`${resource.id}-summary`}
                  >
                    <strong>读完可以获得</strong>
                    <span>{resource.takeaway}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '12px' }}>
                    <a
                      href="/resource-detail.html"
                      className={styles.textButton}
                      style={{ textDecoration: 'none', fontWeight: 750, color: '#6857f2' }}
                    >
                      阅读全文 →
                    </a>
                    <button
                      aria-controls={`${resource.id}-summary`}
                      aria-expanded={isExpanded}
                      className={styles.textButton}
                      onClick={() => setExpandedId(isExpanded ? null : resource.id)}
                      type="button"
                    >
                      {isExpanded ? '收起摘要' : '快速摘要'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>暂时没有匹配资源</h3>
            <p>换一个关键词，或查看全部分类。</p>
            <button
              onClick={() => {
                setFilter('全部')
                setQuery('')
              }}
              type="button"
            >
              清除筛选
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export function ResourcesPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <section className={styles.hero} id="top">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>AskLume 资源中心</p>
              <h1>用证据理解 AI 如何理解品牌</h1>
              <p className={styles.heroSummary}>
                指南、方法与清单，帮助团队建立可复核的 AI 可发现性工作基础。
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#resource-library">
                  浏览资源
                </a>
                <a className={styles.secondaryButton} href="/resource-detail.html">
                  阅读推荐指南
                </a>
              </div>
            </div>

            <figure className={styles.heroVisual}>
              <img
                alt="由纸张、透明材料与路径构成的数字证据视觉"
                decoding="async"
                fetchPriority="high"
                src={resourceHero}
              />
            </figure>
          </div>
        </section>

        <section className={styles.featuredSection} id="featured">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>先读这两篇</h2>
              <p>先建立判断框架，再决定是否需要诊断或建设。</p>
            </div>

            <div className={styles.featuredGrid}>
              <article className={styles.featuredPrimary}>
                <img
                  alt="以问题路径为主题的抽象编辑视觉"
                  decoding="async"
                  loading="lazy"
                  src={queryMapCover}
                />
                <div className={styles.featuredCopy}>
                  <span>入门指南</span>
                  <h3>GEO 101：从可发现性到数字证据工程</h3>
                  <p>理解 GEO 能解决什么、不能保证什么，以及它为什么必须建立在真实业务与证据之上。</p>
                  <a href="/resource-detail.html">阅读全文 →</a>
                </div>
              </article>

              <article className={styles.featuredSecondary}>
                <img
                  alt="以证据台账和核验工具为主题的编辑视觉"
                  decoding="async"
                  loading="lazy"
                  src={evidenceLedgerCover}
                />
                <div className={styles.featuredCopy}>
                  <span>证据建设</span>
                  <h3>一条主张如何变成可核验的数字资产</h3>
                  <p>用来源、日期、范围、责任人与限制条件，让品牌事实可以被团队复用和外部核验。</p>
                  <a href="/resource-detail.html">阅读全文 →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <ResourceLibrary />

        <section className={styles.actionSection}>
          <div className={styles.sectionInner}>
            <div className={styles.actionPanel}>
              <div className={styles.actionIntro}>
                <h2>阅读之后，下一步是什么</h2>
                <p>从低成本确认问题开始。诊断结果决定是否进入后续建设，不预设项目规模。</p>
                <a className={styles.textButton} href="/geo-aip.html">阅读 GEO-AIP™ 方法</a>
              </div>
              <ol className={styles.pathList}>
                <li>
                  <strong>免费初筛</strong>
                  <span>确认业务方向、问题范围与是否值得继续诊断。</span>
                </li>
                <li>
                  <strong>AI 认知基线诊断</strong>
                  <span>保留原始回答、引用来源、事实状态与竞品参照。</span>
                </li>
                <li>
                  <strong>按诊断结果建设</strong>
                  <span>补齐事实、证据、页面、结构化数据与责任机制。</span>
                </li>
                <li>
                  <strong>持续复测</strong>
                  <span>在明确的平台、问题集、时间和地区条件下观察变化。</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.narrowInner}>
            <h2>先把边界说清楚</h2>
            <div className={styles.faqList}>
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closingSection}>
          <div className={styles.closingInner}>
            <div>
              <h2>不确定该从哪份资源开始？</h2>
              <p>提交一个业务方向，我们先帮你判断当前问题更像内容缺口、证据缺口，还是测量缺口。</p>
            </div>
            <a className={styles.primaryButton} href="/#diagnostic">
              申请免费初筛
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a aria-label="问答光源首页" href="/#top">
            <Brand />
          </a>
          <nav aria-label="资源中心页脚导航">
            <a href="/#capabilities">产品与服务</a>
            <a href="/resources.html">资源中心</a>
            <a href="mailto:hello@asklume.com">邮箱联系</a>
          </nav>
          <p>© 2026 问答光源｜AskLume</p>
        </div>
      </footer>
    </div>
  )
}
