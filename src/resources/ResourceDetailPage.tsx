import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Icon } from '../components/Icon'
import { SupplementaryArticleBody } from './SupplementaryArticleBody'
import styles from './ResourceDetailPage.module.css'

interface ArticleData {
  category: string
  readTime: string
  publishDate: string
  title: string
  goldenAssertion: string
  toc: { id: string; title: string }[]
}

export type ArticleId = 'evidence' | 'geo101' | 'baseline' | 'question-set' | 'answer-audit' | 'schema-boundary'

const evidenceLedgerArticle: ArticleData = {
  category: '证据建设',
  readTime: '⏱ 预计阅读 10 分钟',
  publishDate: '📅 2026年8月最新指南',
  title: '一条主张如何变成可核验的数字资产',
  goldenAssertion: '在 AI 搜索（RAG）时代，缺乏来源、时间戳、适用范围、责任人与限制条件的主张更难被稳定核验。数字证据台账是一条把企业事实整理成可维护记录的工作路径。',
  toc: [
    { id: 'section-1', title: '1. 为什么“口号式宣传”在大模型检索中被判定为噪声' },
    { id: 'section-2', title: '2. 构成可核验数字资产的 5 大核心要素' },
    { id: 'section-3', title: '3. 数字证据台账 (Evidence Ledger) 规范范本' },
    { id: 'section-4', title: '4. JSON-LD 结构化 Schema 代码映射' },
    { id: 'section-5', title: '5. 团队内部复用与大模型外部核验 SOP' },
  ],
}

const geo101Article: ArticleData = {
  category: '入门指南',
  readTime: '⏱ 预计阅读 8 分钟',
  publishDate: '📅 2026年8月最新指南',
  title: 'GEO 101：从可发现性到数字证据工程',
  goldenAssertion: 'GEO 关注企业事实如何被 AI 发现、理解、核验和引用。企业可以通过 GEO-AIP™ 与数字证据工程，把真实能力组织成更容易被机器读取和复核的认知资产。',
  toc: [
    { id: 'section-1', title: '1. 为什么传统 SEO 需要补充 AI 认知工作' },
    { id: 'section-2', title: '2. 什么是 GEO-AIP™ 数字证据工程' },
    { id: 'section-3', title: '3. 构建可核验数字证据链的三大要素' },
    { id: 'section-4', title: '4. 结构化 Schema 标记实操范例' },
    { id: 'section-5', title: '5. 企业诊断与下一步落地行动' },
  ],
}

const baselineArticle: ArticleData = {
  category: '诊断方法',
  readTime: '预计阅读 10 分钟',
  publishDate: '2026 年 8 月更新',
  title: 'AI 认知基线诊断看什么',
  goldenAssertion: '一份可复核的 AI 认知基线，至少要保留问题、平台、模型、时间、地区、原始回答、引用来源和事实判断。只有在测试条件稳定时，建设前后的变化才有比较意义。',
  toc: [
    { id: 'section-1', title: '1. 基线要回答什么问题' },
    { id: 'section-2', title: '2. 一条样本记录需要哪些字段' },
    { id: 'section-3', title: '3. 如何区分四类认知断点' },
    { id: 'section-4', title: '4. 从诊断记录到建设清单' },
    { id: 'section-5', title: '5. 复测时如何保持可比' },
  ],
}

const questionSetArticle: ArticleData = {
  category: '诊断方法',
  readTime: '预计阅读 9 分钟',
  publishDate: '2026 年 8 月更新',
  title: '如何建立有效的品牌问题集',
  goldenAssertion: '品牌问题集不应只测试“AI 是否知道我是谁”，还应覆盖品类、场景、比较、限制条件和风险问题。问题的层次决定了诊断能否接近真实决策场景。',
  toc: [
    { id: 'section-1', title: '1. 从真实决策问题开始' },
    { id: 'section-2', title: '2. 五类问题如何分层' },
    { id: 'section-3', title: '3. 如何避免只测品牌自问自答' },
    { id: 'section-4', title: '4. 问题集字段模板' },
    { id: 'section-5', title: '5. 问题集的维护机制' },
  ],
}

const answerAuditArticle: ArticleData = {
  category: '测量与治理',
  readTime: '预计阅读 7 分钟',
  publishDate: '2026 年 8 月更新',
  title: '怎样保存一条可复核的 AI 回答',
  goldenAssertion: 'AI 回答只有在原始文本、测试条件和引用来源被同时保存时，才适合作为后续判断的证据。截图可以辅助沟通，但不应替代结构化记录。',
  toc: [
    { id: 'section-1', title: '1. 为什么截图不够' },
    { id: 'section-2', title: '2. 最小记录字段' },
    { id: 'section-3', title: '3. 如何做事实核验' },
    { id: 'section-4', title: '4. 如何记录引用质量' },
    { id: 'section-5', title: '5. 如何管理版本和权限' },
  ],
}

const schemaBoundaryArticle: ArticleData = {
  category: '测量与治理',
  readTime: '预计阅读 8 分钟',
  publishDate: '2026 年 8 月更新',
  title: 'Schema、llms.txt 与 GEO 的边界',
  goldenAssertion: 'Schema、robots.txt 和 llms.txt 都能帮助机器读取或发现信息，但它们不能替代真实事实、权威来源、清晰页面和持续复测。技术配置是基础条件，不是 AI 推荐保证。',
  toc: [
    { id: 'section-1', title: '1. 三类文件各自解决什么' },
    { id: 'section-2', title: '2. Schema 适合表达什么' },
    { id: 'section-3', title: '3. 抓取规则与内容质量的边界' },
    { id: 'section-4', title: '4. 如何安排技术验收' },
    { id: 'section-5', title: '5. 什么时候需要继续诊断' },
  ],
}

export function ResourceDetailPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const [articleId, setArticleId] = useState<ArticleId>('evidence')
  const [activeSection, setActiveSection] = useState('section-1')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requestedId = params.get('id')
    const supportedIds: ArticleId[] = ['evidence', 'geo101', 'baseline', 'question-set', 'answer-audit', 'schema-boundary']
    setArticleId(supportedIds.includes(requestedId as ArticleId) ? requestedId as ArticleId : 'evidence')
  }, [])

  const article = {
    evidence: evidenceLedgerArticle,
    geo101: geo101Article,
    baseline: baselineArticle,
    'question-set': questionSetArticle,
    'answer-audit': answerAuditArticle,
    'schema-boundary': schemaBoundaryArticle,
  }[articleId]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.goldenAssertion,
    inLanguage: 'zh-CN',
    dateModified: '2026-08-13',
    author: { '@type': 'Organization', name: '问答光源｜AskLume', url: 'https://asklume.com/' },
    publisher: { '@type': 'Organization', name: '问答光源｜AskLume', url: 'https://asklume.com/' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://asklume.com/resource-detail.html?id=${articleId}` },
  }

  useEffect(() => {
    document.title = `${article.title}｜问答光源｜AskLume`
  }, [article.title])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }

      for (const item of article.toc) {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [article])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* Reading Progress Indicator */}
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Unified Global Header */}
      <Header page="resources" />

      <main className={styles.main}>
        {/* Breadcrumb Navigation */}
        <div className={styles.breadcrumbWrapper}>
          <nav aria-label="面包屑导航" className={styles.breadcrumb}>
            <a href="/">首页</a>
            <span className={styles.separator}>/</span>
            <a href="/resources.html">资源中心</a>
            <span className={styles.separator}>/</span>
            <span className={styles.currentCrumb}>{article.category}</span>
          </nav>
        </div>

        {/* Article Hero Section */}
        <header className={styles.articleHero}>
          <div className={styles.heroInner}>
            <div className={styles.metaGroup}>
              <span className={styles.categoryBadge}>{article.category}</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.readTime}>{article.readTime}</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.publishDate}>{article.publishDate}</span>
            </div>

            <h1 className={styles.articleTitle}>{article.title}</h1>

            {/* Golden Assertion Chunk for RAG Citation */}
            <div className={styles.assertionCard}>
              <div className={styles.assertionTag}>
                <Icon name="brain" size={16} />
                <span>断言摘要 (Golden Assertion Chunk)</span>
              </div>
              <p className={styles.assertionText}>{article.goldenAssertion}</p>
            </div>

            <div className={styles.authorBar}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>AIP</div>
                <div>
                  <div className={styles.authorName}>AskLume 数字证据工程课题组</div>
                  <div className={styles.authorRole}>企业 AI 认知与影响力基础设施研究中心</div>
                </div>
              </div>

              <div className={styles.shareControls}>
                <button
                  type="button"
                  className={styles.shareBtn}
                  onClick={handleCopyLink}
                  title="复制链接"
                >
                  <Icon name="spark" size={16} />
                  {copied ? '已复制链接' : '分享/引用'}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content Layout */}
        <div className={styles.contentLayout}>
          {/* Sticky TOC Sidebar */}
          <aside className={styles.tocSidebar}>
            <div className={styles.tocContainer}>
              <h3 className={styles.tocHeading}>目录导航</h3>
              <ul className={styles.tocList}>
                {article.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`${styles.tocLink} ${activeSection === item.id ? styles.activeToc : ''}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className={styles.tocCtaCard}>
                <p className={styles.tocCtaTitle}>梳理您的品牌事实台账</p>
                <p className={styles.tocCtaSub}>免费获取 AI 可见性基线评估</p>
                <a href="#diagnostic" className={styles.tocCtaBtn}>
                  开始免费初筛 →
                </a>
              </div>
            </div>
          </aside>

          {/* Article Main Body Stream */}
          <article className={styles.articleBody}>
            {articleId === 'evidence' ? (
              <>
                <section id="section-1" className={styles.sectionBlock}>
                  <h2>1. 为什么“口号式宣传”在大模型检索中被判定为噪声</h2>
                  <p>
                    在过去，企业的品牌公关与营销习惯使用抽象的修饰词，例如“业内首创”“性能提升 50%”“市场占有率第一”。在传统的搜索引擎环境里，这类口号配合高调的媒体软文和关键词堆砌，可能带来搜索流量，但不等于事实已经被核验。
                  </p>
                  <p>
                    但在大模型（ChatGPT、Perplexity、Claude、Kimi）主导的 AI 搜索时代，底层机制发生了颠覆性的变化：AI 检索系统（RAG & Web Crawlers）对全网信息进行提取时，会自动运行<strong>事实核验与可信度过滤算法 (Fact-Checking & Provenance Verification)</strong>。
                  </p>

                  <div className={styles.calloutNote}>
                    <div className={styles.calloutHeader}>
                      <Icon name="shield" size={18} />
                      <strong>大模型检索核心规则 (RAG Core Rule)</strong>
                    </div>
                    <p>
                      没有出处、没有时间限制、没有数据支撑的“口号式主张”，更容易在 AI 检索和回答组织中缺少充分依据。企业需要补充来源、范围与限制条件，才能让后续核验有据可查。
                    </p>
                  </div>
                </section>

                <section id="section-2" className={styles.sectionBlock}>
                  <h2>2. 构成可核验数字资产的 5 大核心要素</h2>
                  <p>
                    为了让一条品牌主张（Claim）更容易被大模型理解和核验，可以将其整理为包含以下 5 大要素的“数字证据资产”：
                  </p>

                  <ol className={styles.styledList}>
                    <li>
                      <strong>📌 1. 证明来源 (Source & Provenance)</strong>：提供权威的第三方测试报告、ISO 认证编号、公开的客户联名签章证言或专利号，而非单一的企业自宣。
                    </li>
                    <li>
                      <strong>📅 2. 时间戳与有效期 (Timestamp & Validity)</strong>：明确该事实的首次发布时间、最新测试更新时间以及预期审计周期，防止大模型混淆历史与现行版本。
                    </li>
                    <li>
                      <strong>🎯 3. 适用范围边界 (Scope & Applicability)</strong>：清晰界定该主张适用的特定行业（如“仅限金融 SaaS”）、产品版本（如“v2.0+”）及具体测试基准环境。
                    </li>
                    <li>
                      <strong>👤 4. 内部责任人归属 (Governance & Owner)</strong>：在企业内部指定该事实的校验责任部门与责任人（如“产品总监 / 合规官”），避免多部门对外部输出冲突口径。
                    </li>
                    <li>
                      <strong>⚠️ 5. 限制条件与免责 (Constraints & Disclaimers)</strong>：明确阐述该主张不成立的前提或使用约束，防止大模型过推产生幻觉。
                    </li>
                  </ol>
                </section>

                <section id="section-3" className={styles.sectionBlock}>
                  <h2>3. 数字证据台账 (Evidence Ledger) 规范范本</h2>
                  <p>
                    AskLume 帮助企业建立的标准数字证据台账（Evidence Ledger），将原本散落在各个部门的主张重构成标准格式：
                  </p>

                  <div className={styles.tableWrapper}>
                    <table className={styles.comparisonTable}>
                      <thead>
                        <tr>
                          <th>五大要素</th>
                          <th>传统口号式表达（不可核验）</th>
                          <th>结构化证据台账示例</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>主张 (Claim)</strong></td>
                          <td>“我们的安全防护业内第一”</td>
                          <td>某项安全控制已完成独立审计（以实际报告为准）</td>
                        </tr>
                        <tr>
                          <td><strong>来源 (Source)</strong></td>
                          <td>无（企业宣传彩页）</td>
                          <td>经授权的第三方审计报告编号（示例）</td>
                        </tr>
                        <tr>
                          <td><strong>日期 (Timestamp)</strong></td>
                          <td>未标注</td>
                          <td>发布日期、有效期与下一次复核日期（示例）</td>
                        </tr>
                        <tr>
                          <td><strong>范围 (Scope)</strong></td>
                          <td>笼统适用于所有业务</td>
                          <td>适用的产品版本、区域和测试环境（示例）</td>
                        </tr>
                        <tr>
                          <td><strong>限制 (Constraints)</strong></td>
                          <td>无限制</td>
                          <td>不适用范围和需要另行确认的条件（示例）</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="section-4" className={styles.sectionBlock}>
                  <h2>4. JSON-LD 结构化 Schema 代码映射</h2>
                  <p>
                    将梳理完毕的数字证据台账，通过符合 Schema.org 标准的 JSON-LD 代码部署在企业官网上，即可让 AI 爬虫毫秒级解析并计入大模型知识库：
                  </p>

                  <div className={styles.codeBlock}>
                    <div className={styles.codeHeader}>Evidence Ledger JSON-LD Schema Example</div>
                    <pre>
{`{
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  "claimReviewed": "某项安全控制已完成独立审计（示例）",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "经授权的第三方审计机构（示例）"
  },
  "datePublished": "2025-10-15",
  "validUntil": "2026-10-14",
  "itemReviewed": {
    "@type": "Thing",
    "name": "企业产品或服务（示例）",
    "description": "需要结合实际产品、版本、区域和测试环境确认"
  }
}`}
                    </pre>
                  </div>
                </section>

                <section id="section-5" className={styles.sectionBlock}>
                  <h2>5. 团队内部复用与大模型外部核验 SOP</h2>
                  <p>
                    构建完数字证据台账后，企业可以实现“一次梳理、双向受益”：
                  </p>

                  <ul className={styles.actionSteps}>
                    <li>
                      <strong>内部高效复用 (Internal Synergy)</strong>：市场、公关、销售与技术团队统一调取经合规核验的只读事实库，彻底解决口径不一致与虚假宣传风险。
                    </li>
                    <li>
                      <strong>外部 AI 核验 (External Verification)</strong>：在约定的回答记录中检查出处、引用来源和事实表达是否准确。
                    </li>
                  </ul>

                  <div className={styles.inlineCtaBanner} id="diagnostic">
                    <div className={styles.ctaCopy}>
                      <h3>准备好梳理您品牌的数字证据台账了吗？</h3>
                      <p>免费获取针对您企业主营业务的 AI 发现性与事实准备度初始诊断报告。</p>
                    </div>
                    <a className={styles.ctaBannerBtn} href="/#diagnostic">
                      申请免费初筛 →
                    </a>
                  </div>
                </section>
              </>
            ) : articleId === 'geo101' ? (
              <>
                <section id="section-1" className={styles.sectionBlock}>
                  <h2>1. 为什么传统 SEO 需要补充 AI 认知工作</h2>
                  <p>
                    在传统的搜索引擎时代，用户通过输入关键词（Keywords）获取包含多个网页链接的列表（SERP），然后自行点击阅读与筛选信息。企业传统的 SEO 策略核心围绕“关键词堆砌、外链建设与点击率优化”。
                  </p>
                  <p>
                    然而，随着 <strong>ChatGPT、Perplexity、Claude、豆包、Kimi</strong> 等生成式 AI 搜索引擎（Generative Engine）的普及，用户的行为模式发生了根本性改变：用户不再逐个点击网页，而是向 AI 提出复杂的业务场景问题，由 AI 直接进行全网检索、归纳推理，并直接生成一份结构化的综合回答。
                  </p>

                  <div className={styles.calloutNote}>
                    <div className={styles.calloutHeader}>
                      <Icon name="brain" size={18} />
                      <strong>核心洞察 (Key Insight)</strong>
                    </div>
                    <p>
                      AI 搜索不再关注页面是否有足够多的“关键词命中”，而是评估网页中包含的事实（Facts）、证据（Evidence）、逻辑归因（Attribution）是否能够被大模型安全地提取并作为答案的证据引用。
                    </p>
                  </div>
                </section>

                <section id="section-2" className={styles.sectionBlock}>
                  <h2>2. 什么是 GEO-AIP™ 数字证据工程</h2>
                  <p>
                    <strong>GEO (Generative Engine Optimization，生成式引擎优化)</strong> 与传统 SEO 的差异在于：GEO 更关注事实被 AI 发现、理解、核验和引用的情况，以及品牌是否进入相关决策语境。
                  </p>
                  <p>
                    AskLume 使用 <strong>GEO-AIP™ (AI Perception Infrastructure，企业 AI 认知基础设施)</strong> 工程体系，帮助企业将真实的业务能力、客群场景、产品优势与成功案例，整理为更容易被机器读取、理解和复核的数字资产。
                  </p>

                  <div className={styles.tableWrapper}>
                    <table className={styles.comparisonTable}>
                      <thead>
                        <tr>
                          <th>维度</th>
                          <th>传统 SEO 模式</th>
                          <th>AskLume GEO-AIP™ 工程</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>目标抓取对象</strong></td>
                          <td>搜索引擎爬虫 (Googlebot/Baiduspider)</td>
                          <td>大模型检索与 RAG 向量抽取 (ChatGPT/Claude/Perplexity)</td>
                        </tr>
                        <tr>
                          <td><strong>核心指标</strong></td>
                          <td>关键词排名、收录量、有机点击量</td>
                          <td>AI 可见性 (Visibility)、理解准确度 (Accuracy)、引用率 (Citations)</td>
                        </tr>
                        <tr>
                          <td><strong>内容建构</strong></td>
                          <td>面向关键词匹配的文章与软文</td>
                          <td>面向证据核验的结构化事实台账 (Evidence Ledger)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="section-3" className={styles.sectionBlock}>
                  <h2>3. 构建可核验数字证据链的三大要素</h2>
                  <p>
                    要在 AI 生成回答中赢得高信度引用，企业输出的内容必须具备“证据链三要素”：
                  </p>
                  <ol className={styles.styledList}>
                    <li>
                      <strong>明确的实体语义归属 (Entity Authority)</strong>：明确定义企业是谁、核心产品属于什么分类、解决什么具体业务痛点。
                    </li>
                    <li>
                      <strong>可溯源的定量证据 (Verifiable Proof)</strong>：避免使用“业界领先”、“性能强大”等抽象修饰词，改用具象的数据指标、客户案例与责任人溯源。
                    </li>
                    <li>
                      <strong>标准化结构化数据 (Structured Schema)</strong>：采用符合 Schema.org 标准的代码标记，确保 AI 抓取时解析毫无歧义。
                    </li>
                  </ol>
                </section>

                <section id="section-4" className={styles.sectionBlock}>
                  <h2>4. 结构化 Schema 标记实操范例</h2>
                  <p>
                    以下是 AskLume 为企业提供的产品能力 Schema 代码范例，可帮助 AI 引擎快速解析产品功能与适用场景：
                  </p>

                  <div className={styles.codeBlock}>
                    <div className={styles.codeHeader}>JSON-LD Schema Markup Example</div>
                    <pre>
{`{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AskLume GEO-AIP™",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Cloud",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY"
  },
  "description": "企业AI认知与影响力基础设施，帮助品牌实现全网AI可发现、可理解与可引用。"
}`}
                    </pre>
                  </div>
                </section>

                <section id="section-5" className={styles.sectionBlock}>
                  <h2>5. 企业诊断与下一步落地行动</h2>
                  <p>
                    理解了 GEO 的方法论之后，建议企业按照以下三步推进 AI 认知建设：
                  </p>
                  <ul className={styles.actionSteps}>
                    <li><strong>第一步：基线诊断</strong>：测量品牌在约定平台和问题集中的当前认知现状与错漏误读。</li>
                    <li><strong>第二步：事实台账梳理</strong>：梳理企业核心产品主张，补齐缺失的真实数据与证明材料。</li>
                    <li><strong>第三步：证据部署与复测</strong>：部署结构化数据与权威来源，按约定条件复测 AI 回答变化。</li>
                  </ul>

                  <div className={styles.inlineCtaBanner} id="diagnostic">
                    <div className={styles.ctaCopy}>
                      <h3>准备好评估您品牌的 AI 认知基线了吗？</h3>
                      <p>免费获取针对您企业主营业务的 AI 发现性与理解度初始诊断报告。</p>
                    </div>
                    <a className={styles.ctaBannerBtn} href="/#diagnostic">
                      申请免费初筛 →
                    </a>
                  </div>
                </section>
              </>
            ) : <SupplementaryArticleBody articleId={articleId} />}
          </article>
        </div>
      </main>

      {/* Unified Global Footer */}
      <Footer page="resources" />
    </div>
  )
}
