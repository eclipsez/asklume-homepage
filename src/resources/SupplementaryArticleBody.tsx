import { Icon } from '../components/Icon'
import type { ArticleId } from './ResourceDetailPage'
import styles from './ResourceDetailPage.module.css'

export function SupplementaryArticleBody({ articleId }: { articleId: Exclude<ArticleId, 'evidence' | 'geo101'> }) {
  if (articleId === 'baseline') return <BaselineArticle />
  if (articleId === 'question-set') return <QuestionSetArticle />
  if (articleId === 'answer-audit') return <AnswerAuditArticle />
  if (articleId === 'geo-vs-seo') return <GeoVsSeoArticle />
  if (articleId === 'domestic-ai-engines') return <DomesticAiEnginesArticle />
  if (articleId === 'geo-glossary') return <GeoGlossaryArticle />
  if (articleId === 'b2b-geo-guide') return <B2bGeoGuideArticle />
  if (articleId === 'entity-building') return <EntityBuildingArticle />
  if (articleId === 'self-check-20') return <SelfCheck20Article />
  return <SchemaBoundaryArticle />
}

function BaselineArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}><h2>1. 基线要回答什么问题</h2><p>基线不是给企业贴一个永久分数，而是记录在明确条件下，AI 如何识别企业、如何描述能力，以及哪些关键事实没有被准确表达。</p><p>一份好的基线应该让团队知道下一步先补事实、补证据、修页面，还是先解决技术可读取性。</p></section>
    <section id="section-2" className={styles.sectionBlock}><h2>2. 一条样本记录需要哪些字段</h2><p>建议把每条回答拆成可以筛选和复测的字段，避免只把结果留在截图或聊天记录里。</p><ol className={styles.styledList}><li><strong>问题与意图</strong>：记录原始问题、问题类型和对应的业务决策场景。</li><li><strong>平台与条件</strong>：记录平台、模型、时间、地区、语言和是否开启联网搜索。</li><li><strong>回答与引用</strong>：保存原始回答、引用链接、引用位置和页面状态。</li><li><strong>事实判断</strong>：标记准确、缺失、混淆、过时或暂无法判断。</li></ol></section>
    <section id="section-3" className={styles.sectionBlock}><h2>3. 如何区分四类认知断点</h2><div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>断点</th><th>典型表现</th><th>优先动作</th></tr></thead><tbody><tr><td>被看见</td><td>相关问题中没有稳定出现品牌</td><td>检查实体、页面可读取性和问题覆盖</td></tr><tr><td>被理解</td><td>品牌出现，但能力、边界或对象描述错误</td><td>统一核心事实与权威来源</td></tr><tr><td>被核验</td><td>回答提到主张，但没有充分引用</td><td>补齐证据页面和来源关系</td></tr><tr><td>被选择</td><td>进入比较场景，却无法说明适配条件</td><td>建设场景、对比和决策型内容</td></tr></tbody></table></div></section>
    <section id="section-4" className={styles.sectionBlock}><h2>4. 从诊断记录到建设清单</h2><p>每个发现都要转换成动作、负责人和验收条件。例如，回答把产品用途说错时，建设清单不能只写“优化内容”，而应明确事实源、目标页面、需要补充的证据和复测问题。</p><div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="shield" size={18} /><strong>建议的最小闭环</strong></div><p>问题记录 → 事实判断 → 建设动作 → 页面或技术产出 → 按原条件复测。</p></div></section>
    <section id="section-5" className={styles.sectionBlock}><h2>5. 复测时如何保持可比</h2><p>复测尽量沿用相同的问题、平台、模型、语言、地区和时间记录方式。如果条件发生变化，应在结果中注明，不能把不同条件下的回答直接当成趋势。</p><div className={styles.inlineCtaBanner} id="diagnostic"><div className={styles.ctaCopy}><h3>想知道你的品牌当前被 AI 如何理解？</h3><p>从一组真实业务问题开始，建立可继续使用的基线。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">了解诊断流程 →</a></div></section>
  </>
}

function QuestionSetArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}><h2>1. 从真实决策问题开始</h2><p>问题集应来自客户、销售、客服、产品和内部决策，而不是只从关键词工具导出。真实问题更接近用户向 AI 提问时的语言和上下文。</p><p>先收集原始问题，再按品牌、品类、场景、比较和风险整理，不要过早改写成营销口号。</p></section>
    <section id="section-2" className={styles.sectionBlock}><h2>2. 五类问题如何分层</h2><ol className={styles.styledList}><li><strong>品牌识别</strong>：企业是谁、提供什么、服务哪些对象。</li><li><strong>品类理解</strong>：某类产品或服务有哪些选择，判断标准是什么。</li><li><strong>场景适配</strong>：在具体预算、行业、地区或使用条件下谁更适合。</li><li><strong>比较决策</strong>：不同方案之间如何比较，企业的边界和差异是什么。</li><li><strong>风险核验</strong>：资质、限制、售后、合规和不适用情况如何确认。</li></ol></section>
    <section id="section-3" className={styles.sectionBlock}><h2>3. 如何避免只测品牌自问自答</h2><p>如果所有问题都包含品牌名，测试很容易只验证品牌页面能否回答自己，无法判断企业能否进入未点名的品类和比较语境。</p><div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>问题类型</th><th>弱问题</th><th>更接近决策的问题</th></tr></thead><tbody><tr><td>品类</td><td>AskLume 是什么？</td><td>企业如何开始建设 AI 可发现性？</td></tr><tr><td>场景</td><td>AskLume 有哪些服务？</td><td>B2B 专业服务品牌出海前应先检查什么？</td></tr><tr><td>比较</td><td>AskLume 好不好？</td><td>如何比较不同 GEO 服务商的交付和验收方式？</td></tr></tbody></table></div></section>
    <section id="section-4" className={styles.sectionBlock}><h2>4. 问题集字段模板</h2><p>建议至少保留问题原文、问题类别、业务意图、目标市场、语言、平台、优先级、负责人和最近复测日期。这样问题集才是一个持续维护的业务资产，而不是一次性测试清单。</p><div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="brain" size={18} /><strong>字段原则</strong></div><p>每个问题都应能说明为什么测试、由谁维护，以及结果将如何影响下一步动作。</p></div></section>
    <section id="section-5" className={styles.sectionBlock}><h2>5. 问题集的维护机制</h2><p>业务、产品、市场和合规信息变化时，应同步检查问题集。每次新增问题都要说明来源和用途，每次删除问题也要保留原因，避免测试范围悄悄变化。</p><div className={styles.inlineCtaBanner} id="diagnostic"><div className={styles.ctaCopy}><h3>先找到最值得验证的问题</h3><p>把客户真实提问带来，我们可以一起判断问题范围。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">提交需求 →</a></div></section>
  </>
}

function AnswerAuditArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}><h2>1. 为什么截图不够</h2><p>截图适合快速沟通，但它通常缺少完整问题、模型条件、引用链接和采样时间。没有这些信息，团队很难判断回答变化来自建设、平台变化，还是测试条件变化。</p><div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="shield" size={18} /><strong>记录优先于结论</strong></div><p>先保存原始回答和条件，再讨论它是好是坏。不要先截图结论，再回头寻找证据。</p></div></section>
    <section id="section-2" className={styles.sectionBlock}><h2>2. 最小记录字段</h2><ol className={styles.styledList}><li><strong>采样条件</strong>：平台、模型、时间、地区、语言、联网状态。</li><li><strong>输入内容</strong>：完整问题、上下文和必要的系统条件。</li><li><strong>输出内容</strong>：完整回答、截断位置和是否发生工具调用。</li><li><strong>来源信息</strong>：引用页面、链接状态、页面发布日期和来源类型。</li><li><strong>复核结果</strong>：事实准确性、证据充分性、需要人工确认的事项。</li></ol></section>
    <section id="section-3" className={styles.sectionBlock}><h2>3. 如何做事实核验</h2><p>把回答拆成可以验证的主张，逐条对照企业已批准的事实源。事实源应说明来源、有效日期、适用范围、责任人和限制条件。</p><p>如果公开页面与内部资料冲突，不要直接选择对品牌更有利的版本。先标记冲突，交给事实负责人确认后再发布或复测。</p></section>
    <section id="section-4" className={styles.sectionBlock}><h2>4. 如何记录引用质量</h2><div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>检查项</th><th>需要记录的内容</th></tr></thead><tbody><tr><td>是否引用</td><td>回答是否给出来源，来源是否指向具体页面。</td></tr><tr><td>是否相关</td><td>引用内容是否真的支持对应主张。</td></tr><tr><td>是否稳定</td><td>链接是否可访问，页面是否有明确更新时间和责任主体。</td></tr><tr><td>是否完整</td><td>关键限制条件是否也被来源覆盖。</td></tr></tbody></table></div></section>
    <section id="section-5" className={styles.sectionBlock}><h2>5. 如何管理版本和权限</h2><p>原始回答应只读保存，复核意见和建设动作分开记录。不同项目或市场使用不同问题集时，应保留版本号和范围说明，避免把多个市场的结果混在一起。</p><div className={styles.inlineCtaBanner} id="diagnostic"><div className={styles.ctaCopy}><h3>把一次回答变成可复用记录</h3><p>诊断和持续监测都需要一套稳定的记录协议。</p></div><a className={styles.ctaBannerBtn} href="./services.html#monitoring">查看持续监测 →</a></div></section>
  </>
}

function SchemaBoundaryArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}><h2>1. 三类文件各自解决什么</h2><div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>文件</th><th>主要作用</th><th>不能替代什么</th></tr></thead><tbody><tr><td>Schema</td><td>用结构化字段表达组织、服务、文章和页面关系。</td><td>不能替代真实事实和权威来源。</td></tr><tr><td>robots.txt</td><td>说明抓取规则和站点地图位置。</td><td>不能保证被抓取、收录或引用。</td></tr><tr><td>llms.txt</td><td>为 AI 阅读者提供站点重点内容和入口索引。</td><td>不能控制模型训练或回答。</td></tr></tbody></table></div></section>
    <section id="section-2" className={styles.sectionBlock}><h2>2. Schema 适合表达什么</h2><p>Schema 适合表达相对稳定且有明确页面承载的事实，例如组织名称、服务类型、文章标题、发布日期、FAQ 问答和页面之间的层级关系。</p><ol className={styles.styledList}><li><strong>Organization</strong>：说明企业主体和品牌关系。</li><li><strong>Service</strong>：说明服务类型、提供方和服务页面。</li><li><strong>Article</strong>：说明资源标题、作者、发布日期和正文页面。</li><li><strong>FAQPage</strong>：只标记页面上真实展示的问答。</li></ol></section>
    <section id="section-3" className={styles.sectionBlock}><h2>3. 抓取规则与内容质量的边界</h2><p>允许抓取不等于内容会被理解或引用。技术文件应当与可访问页面、清晰标题、稳定链接、来源说明和真实内容一起建设。</p><div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="brain" size={18} /><strong>技术配置是基础条件</strong></div><p>不要把 robots.txt、Schema 或 llms.txt 的存在写成排名、推荐或引用保证。</p></div></section>
    <section id="section-4" className={styles.sectionBlock}><h2>4. 如何安排技术验收</h2><ul className={styles.actionSteps}><li><strong>可访问</strong>：文件返回正确状态码，页面和资源链接不依赖错误的根路径。</li><li><strong>可解析</strong>：JSON-LD 为合法 JSON，字段与页面可见内容一致。</li><li><strong>可追踪</strong>：站点地图包含正式页面，内部链接指向对应的清晰 URL。</li><li><strong>可复测</strong>：发布后重新检查抓取、渲染、页面状态和结构化数据。</li></ul></section>
    <section id="section-5" className={styles.sectionBlock}><h2>5. 什么时候需要继续诊断</h2><p>当企业已经完成基础技术配置，但 AI 仍然混淆主体、产品、场景或引用来源时，下一步通常不是继续堆配置，而是回到问题集、事实源和证据页面，重新判断断点。</p><div className={styles.inlineCtaBanner} id="diagnostic"><div className={styles.ctaCopy}><h3>让技术检查回到真实业务问题</h3><p>先确认 AI 如何理解企业，再决定技术和内容动作。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">了解基线诊断 →</a></div></section>
  </>
}

function GeoVsSeoArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}>
      <h2>1. 目标与工作对象的差异</h2>
      <p>传统 SEO 的核心目标是提升网页在搜索引擎结果页（SERP）中的排名，让更多用户点击进入网站。工作对象是搜索引擎的爬虫算法：关键词密度、外链权重、页面速度和移动适配性。</p>
      <p>GEO 的核心目标是让企业事实在 AI 生成答案时被准确理解、核验和引用。工作对象是生成式 AI 的 RAG（检索增强生成）机制：企业实体的清晰度、事实的可核验性、引用来源的权威性和证据的覆盖完整度。</p>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>维度</th><th>传统 SEO</th><th>GEO</th></tr></thead><tbody><tr><td>优化目标</td><td>搜索排名与点击量</td><td>AI 答案中的引用与推荐</td></tr><tr><td>核心受众</td><td>搜索引擎算法</td><td>大模型 RAG 检索机制</td></tr><tr><td>内容形式偏好</td><td>关键词密度、标题层级</td><td>事实清晰度、引用来源权威性</td></tr><tr><td>可控程度</td><td>相对可控（排名变化较稳定）</td><td>不可控模型输出，只能优化输入</td></tr></tbody></table></div>
    </section>
    <section id="section-2" className={styles.sectionBlock}>
      <h2>2. 可控范围对比</h2>
      <p>SEO 有相对稳定的排名算法可以针对性优化，效果验证路径较清晰。GEO 面对的是不完全公开的大模型推理过程，企业只能控制"输入侧"：事实的质量、来源的权威性和证据的覆盖范围，而无法控制模型生成的最终答案。</p>
      <div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="shield" size={18} /><strong>GEO 的边界声明</strong></div><p>GEO 不能操控大模型输出。可以控制的是企业事实是否准确、来源是否权威、证据是否完整——这些是 AI 引用的前提条件，但不是充分条件。</p></div>
    </section>
    <section id="section-3" className={styles.sectionBlock}>
      <h2>3. 测量指标与验收方式</h2>
      <p>SEO 有成熟的量化指标：关键词排名、自然流量、点击率、跳出率等，数据来源清晰，可对比。</p>
      <p>GEO 的测量更依赖定性记录：AI 在约定问题集和平台条件下如何描述企业、引用了哪些来源、事实是否准确。可以用答案变化率、引用来源覆盖率、事实准确性比率等维度辅助判断，但核心验收依据是原始记录，不是单一分数。</p>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>指标类型</th><th>SEO 常用指标</th><th>GEO 测量维度</th></tr></thead><tbody><tr><td>可见性</td><td>关键词排名、SERP 出现频次</td><td>AI 答案中的品牌出现频率</td></tr><tr><td>准确性</td><td>（通常不纳入 SEO 验收）</td><td>AI 引用事实与企业核实事实的一致性</td></tr><tr><td>来源质量</td><td>外链权重、Domain Authority</td><td>AI 引用来源的可信度与覆盖范围</td></tr><tr><td>时效性</td><td>内容更新频率</td><td>AI 引用来源的发布时间与有效期</td></tr></tbody></table></div>
    </section>
    <section id="section-4" className={styles.sectionBlock}>
      <h2>4. 工具与方法论的表面相似与本质差异</h2>
      <p>SEO 和 GEO 在某些工具上有交叉：结构化数据（Schema）、页面可访问性、内容质量都对两者有益。但目的不同：SEO 用 Schema 帮助搜索引擎理解页面类型，GEO 用 Schema 帮助 AI 识别企业实体关系。</p>
      <ol className={styles.styledList}>
        <li><strong>关键词研究 vs 问题集建设：</strong>SEO 从搜索词出发，GEO 从用户向 AI 提问的自然语言问题出发。</li>
        <li><strong>外链建设 vs 信源权威性建设：</strong>SEO 追求权威网站的链接，GEO 追求 AI 能稳定引用的可信内容来源（公众号、知乎、百科等）。</li>
        <li><strong>内容优化 vs 事实组织：</strong>SEO 优化可读性和关键词分布，GEO 优化事实的可核验性和来源的完整性。</li>
      </ol>
    </section>
    <section id="section-5" className={styles.sectionBlock}>
      <h2>5. 预算和团队的协作方式</h2>
      <p>SEO 和 GEO 可以共用部分内容和技术资源，但需要明确各自的工作边界，避免把 SEO 流量指标直接套用到 GEO 项目验收上。</p>
      <p>建议的协作方式：SEO 团队负责页面技术可达性和基础内容质量；GEO 专项负责企业事实梳理、外部信源布局和 AI 回答质量监测；两者共享 Schema 实施和内容发布计划。</p>
      <div className={styles.inlineCtaBanner}><div className={styles.ctaCopy}><h3>想了解你的品牌当前在 AI 中的状态？</h3><p>从问题集开始，建立可继续使用的认知基线。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">申请免费需求评估 →</a></div>
    </section>
  </>
}

function DomesticAiEnginesArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}>
      <h2>1. 国内 AI 引擎与海外的核心差异</h2>
      <p>国内主流大模型在检索外部信息时，受到两个关键约束：一是国内互联网的内容生态与海外完全不同；二是国内合规要求（广告法、网络安全法）导致模型对部分内容类型有更严格的过滤机制。</p>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>差异维度</th><th>海外 AI（ChatGPT/Claude/Perplexity）</th><th>国内 AI（Kimi/豆包/文心/元宝）</th></tr></thead><tbody><tr><td>偏好信源</td><td>Wikipedia、Reddit、权威英文媒体</td><td>微信公众号、知乎、百度百科、爱企查</td></tr><tr><td>合规过滤</td><td>相对宽松</td><td>广告法极端词过滤较严格</td></tr><tr><td>实体认证</td><td>依赖 Wikidata/官网</td><td>依赖百科词条+工商登记+官网三者一致</td></tr><tr><td>内容时效</td><td>实时联网为主</td><td>部分依赖训练数据+实时联网混合</td></tr></tbody></table></div>
    </section>
    <section id="section-2" className={styles.sectionBlock}>
      <h2>2. Kimi（月之暗面）：长文本与中文权威内容</h2>
      <p>Kimi 的核心优势是长文本理解能力。在联网检索时，Kimi 对以下类型的内容来源有明显偏好：</p>
      <ol className={styles.styledList}>
        <li><strong>微信公众号长文：</strong>尤其是有清晰结构、标题层级和具体数据的深度分析文章。</li>
        <li><strong>知乎长回答：</strong>被点赞数量高、有来源引用、逻辑结构清晰的专业问答。</li>
        <li><strong>行业媒体报道：</strong>36氪、钛媒体、虎嗅等科技商业媒体的分析文章。</li>
      </ol>
      <div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="brain" size={18} /><strong>针对 Kimi 的建设建议</strong></div><p>将官网核心方法论文章（如 GEO-AIP™ 介绍）同步发布到公众号，文章内包含明确的事实定义、适用范围说明和官网引用链接。</p></div>
    </section>
    <section id="section-3" className={styles.sectionBlock}>
      <h2>3. 豆包（字节跳动）：头条生态与知乎深度科普</h2>
      <p>豆包依托字节跳动的头条系内容生态，对以下信源权重较高：今日头条优质文章、知乎专业问答、抖音知识类视频的文字摘要。豆包对"科普型"内容（通俗解释概念）和"对比型"内容（如何选择）有较强的引用倾向。</p>
      <p>在回答"怎么做""如何选择""有什么区别"等问题时，豆包优先引用知乎有高赞的结构化对比回答。建议在知乎针对"GEO 与 SEO 的区别""企业如何开始做 AI 可发现性"等核心问题提供完整的专业长文回答。</p>
    </section>
    <section id="section-4" className={styles.sectionBlock}>
      <h2>4. 文心一言（百度）：百科、爱企查与百家号生态</h2>
      <p>文心一言作为百度系的大模型，与百度自有生态深度整合。在企业实体认知方面，文心一言高度依赖百度百科中的词条信息作为"权威事实源"。对于企业主体的认证，爱企查的工商登记信息与官网信息的一致性也是重要判断依据。</p>
      <ol className={styles.styledList}>
        <li><strong>百度百科词条：</strong>建立或更新品牌词条，确保与官网信息完全一致。</li>
        <li><strong>百家号机构号：</strong>认证企业官方账号，发布与官网一致的品牌介绍内容。</li>
        <li><strong>爱企查信息：</strong>确保企业名称、法人、经营范围与官网 About 页面描述一致。</li>
      </ol>
    </section>
    <section id="section-5" className={styles.sectionBlock}>
      <h2>5. 腾讯元宝 & 通义千问：公众号与阿里生态信源</h2>
      <p>腾讯元宝深度整合微信生态，微信公众号文章是其外部信源中权重最高的类型之一。企业如果有活跃的专业公众号，内容质量会直接影响元宝对企业的认知质量。</p>
      <p>通义千问则倾向引用阿里系生态内容（天猫/阿里云官方文档、钉钉知识库等），同时也重视行业标准文件、学术研究摘要和权威机构白皮书。</p>
      <div className={styles.inlineCtaBanner}><div className={styles.ctaCopy}><h3>想系统建设国内信源矩阵？</h3><p>从基线诊断开始，明确哪些平台的认知断点最需要优先修复。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">申请免费需求评估 →</a></div>
    </section>
  </>
}

function GeoGlossaryArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}>
      <h2>1. GEO 核心概念：可发现性与认知资产</h2>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>术语</th><th>标准定义</th></tr></thead><tbody>
        <tr><td><strong>GEO（生成式引擎优化）</strong></td><td>Generative Engine Optimization，优化企业事实、内容与技术结构，使其更容易被大模型检索、理解、核验和引用的工程方法体系。</td></tr>
        <tr><td><strong>AI 可发现性</strong></td><td>企业品牌、产品与服务在大模型生成答案时被稳定识别、准确描述和引用的程度。区分为可见性（是否出现）、准确性（是否正确）和引用性（来源是否被标注）三个层次。</td></tr>
        <tr><td><strong>AI 认知资产</strong></td><td>企业经过整理、核验、结构化表达后，能够被 AI 引擎稳定读取和引用的数字化事实、证据与内容资产的总称。</td></tr>
        <tr><td><strong>GEO-AIP™</strong></td><td>问答光源原创方法体系，全称 AI Presence Engineering（AI 存在感工程），通过"建立基线 → 整理证据 → 建设资产 → 同标复测"四步闭环，系统性提升企业 AI 认知质量。</td></tr>
        <tr><td><strong>数字证据工程</strong></td><td>将企业口号式宣传升级为带有权威来源、时间戳、适用范围与边界条件的结构化事实源与证据台账的工程过程。</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-2" className={styles.sectionBlock}>
      <h2>2. 证据与事实类术语</h2>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>术语</th><th>标准定义</th></tr></thead><tbody>
        <tr><td><strong>企业事实源（Fact Source）</strong></td><td>企业内部经过确认、有责任人和有效期的核心事实记录单元，包含：事实内容、来源、发布时间、适用范围、负责人和限制条件。</td></tr>
        <tr><td><strong>数字证据台账（Evidence Ledger）</strong></td><td>以结构化字段（来源、时间戳、适用范围、责任人、限制）管理企业事实、资质、案例与关键主张的可维护记录系统。</td></tr>
        <tr><td><strong>事实冲突（Fact Conflict）</strong></td><td>企业在不同公开来源（官网、百科、公众号、爱企查）中对同一事实的描述存在不一致，导致 AI 引用时降低置信度或产生误描述。</td></tr>
        <tr><td><strong>引用来源权威性（Citation Authority）</strong></td><td>AI 在引用某条信息时对该来源可信度的评估维度，通常与来源的发布机构可信度、内容时效性、与核心主张的匹配度相关。</td></tr>
        <tr><td><strong>证据覆盖率（Evidence Coverage）</strong></td><td>企业核心业务主张被可核验证据（权威来源、有效时间、适用范围）覆盖的比例，是 GEO 建设完整度的评估维度之一。</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-3" className={styles.sectionBlock}>
      <h2>3. 诊断与测量类术语</h2>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>术语</th><th>标准定义</th></tr></thead><tbody>
        <tr><td><strong>AI 认知基线（AI Cognitive Baseline）</strong></td><td>在特定时间、平台、模型及测试问题集条件下，记录 AI 对企业品牌、产品与服务的原始回答与引用来源，作为衡量后续建设效果的定量基准。</td></tr>
        <tr><td><strong>认知断点（Cognitive Gap）</strong></td><td>AI 在理解企业时出现的系统性偏差，分为四类：可见性断点（不出现）、理解断点（描述错误）、证据断点（无来源支撑）和选择断点（无法说明适配性）。</td></tr>
        <tr><td><strong>同标复测（Baseline-Aligned Retest）</strong></td><td>在与初始基线相同的问题集、平台、模型和采样条件下，对 AI 回答进行再次记录，用于评估建设前后的变化。</td></tr>
        <tr><td><strong>品牌问题集（Brand Query Set）</strong></td><td>企业用于 GEO 测试和监测的结构化问题集合，覆盖品牌识别、品类理解、场景适配、比较决策和风险核验五类问题类型。</td></tr>
        <tr><td><strong>事实准确性核验（Fact Accuracy Audit）</strong></td><td>逐条对比 AI 回答中的主张与企业已核实事实源，判断描述是否准确、有来源支撑和无明显边界错误的核验过程。</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-4" className={styles.sectionBlock}>
      <h2>4. 国内 AI 生态与技术类术语</h2>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>术语</th><th>标准定义</th></tr></thead><tbody>
        <tr><td><strong>RAG（检索增强生成）</strong></td><td>Retrieval-Augmented Generation，大模型在生成回答前先从外部知识源检索相关内容，再结合检索结果生成答案的技术架构，是 GEO 优化的核心作用机制。</td></tr>
        <tr><td><strong>企业实体（Brand Entity）</strong></td><td>大模型知识图谱中对一个组织的结构化理解，包含名称、主体、关系、产品、服务和业务边界等属性，各信源一致性越高，实体表达越稳定。</td></tr>
        <tr><td><strong>E-E-A-T（经验、专业、权威、可信）</strong></td><td>Google 原创的内容质量评估框架（Experience, Expertise, Authoritativeness, Trustworthiness），国内大模型在判断引用来源质量时也有类似逻辑，尤其重视"可信度"维度。</td></tr>
        <tr><td><strong>ICP 备案 E-E-A-T 锚点</strong></td><td>在国内 GEO 语境下，网站工信部 ICP 备案号与企业工商登记全称的一致性，是大模型判断来源合规可信度的基础门槛之一。</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-5" className={styles.sectionBlock}>
      <h2>5. 天然语言与吸引力类术语</h2>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>术语</th><th>标准定义</th></tr></thead><tbody>
        <tr><td><strong>黄金论断（Golden Assertion）</strong></td><td>页面或文章中结构最清晰、定义最精准、最容易被 AI RAG 引擎直接摘录为答案的核心陈述段落，通常 80–120 字，置于文章开头或关键章节顶部。</td></tr>
        <tr><td><strong>决策内容（Decision Content）</strong></td><td>专门应对用户在选择和购买阶段提问的内容类型，包含比较型（A vs B）、场景适配型（什么情况下用哪个）和风险核验型（有哪些限制）内容。</td></tr>
        <tr><td><strong>信源矩阵（Evidence Source Matrix）</strong></td><td>以官网为核心，配合公众号、知乎、百科、行业媒体等外部信源形成的多层次证据生态，提升 AI 从多渠道一致引用企业信息的概率。</td></tr>
        <tr><td><strong>口号式噪声（Slogan Noise）</strong></td><td>营销极限词（如"国内领先"、"行业认证"等未被具体事实支撑的夸张宣传）在 AI 检索时被安全过滤机制降权的内容类型，是 GEO 建设中需要清理的主要障碍之一。</td></tr>
      </tbody></table></div>
      <div className={styles.inlineCtaBanner}><div className={styles.ctaCopy}><h3>团队已有共同语言，接下来呢？</h3><p>用标准术语描述你的业务场景，我们帮你判断 GEO 诊断的优先级。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">申请免费需求评估 →</a></div>
    </section>
  </>
}

function B2bGeoGuideArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}>
      <h2>1. 为什么 B2B GEO 必须区别于消费品逻辑</h2>
      <p>消费品 GEO 关注的是"品牌在 AI 推荐列表中出现"；B2B GEO 关注的是"当采购方在 AI 中询问专业选型问题时，我们能否被准确引用"。</p>
      <p>B2B 采购的特点决定了 GEO 的策略差异：决策周期长（数周到数月）、参与决策人多（技术、采购、法务、业务）、需要专业验证（资质、案例、对比），这意味着 AI 问答中的每个环节都有不同类型的信息需求。</p>
      <div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="brain" size={18} /><strong>B2B GEO 的核心命题</strong></div><p>不是让 AI 知道你是谁，而是让 AI 在专业选型对比中能够准确说出你的差异化能力、适用条件和验证依据。</p></div>
    </section>
    <section id="section-2" className={styles.sectionBlock}>
      <h2>2. B2B 决策问题的四个层次</h2>
      <p>B2B 采购方在 AI 中的提问通常经历四个阶段，每个阶段需要不同类型的内容应对：</p>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>阶段</th><th>典型问题</th><th>需要的证据类型</th></tr></thead><tbody>
        <tr><td>认知阶段</td><td>什么是 GEO？有哪些服务商提供这类服务？</td><td>品类定义、企业简介、服务范围说明</td></tr>
        <tr><td>比较阶段</td><td>A 和 B 有什么区别？各自的优缺点是什么？</td><td>对比表格、差异化能力描述、适用场景边界</td></tr>
        <tr><td>验证阶段</td><td>这家公司有案例吗？方法论是否经过验证？</td><td>脱敏项目记录、交付物样本、复测记录</td></tr>
        <tr><td>风险核验阶段</td><td>合同有什么限制？不适合什么情况？</td><td>服务边界声明、不承诺条款、合规说明</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-3" className={styles.sectionBlock}>
      <h2>3. AI 选型词拦截：让 AI 在专业对比场景中提及你</h2>
      <p>B2B 采购方最常用的一类问题是"在 [具体条件] 下，[类别] 产品怎么选？"。要让 AI 在这类问题中准确提及品牌，需要在网站中建立针对不同业务条件和选型标准的专项内容。</p>
      <ol className={styles.styledList}>
        <li><strong>场景适配页面：</strong>分别建立"适合什么类型企业"、"不适合什么情况"的清晰说明页面。</li>
        <li><strong>对比决策内容：</strong>提供"GEO 基础建设 vs 增长建设如何选择"、"自建 vs 外包 GEO 的决策标准"等对比内容。</li>
        <li><strong>行业专项指引：</strong>为不同行业（制造业、企服、出海）提供专项内容，使 AI 在行业专项问题中更容易引用到相关内容。</li>
      </ol>
    </section>
    <section id="section-4" className={styles.sectionBlock}>
      <h2>4. 多决策人证据组织：如何应对不同评审者的问题</h2>
      <p>B2B 采购中，技术评估者、业务负责人和财务/法务各自关注不同维度。GEO 建设需要确保在每类评审者的问题视角下，AI 都能给出有据可查的回答。</p>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>评审者类型</th><th>关注的核心问题</th><th>需要的证据资产</th></tr></thead><tbody>
        <tr><td>业务负责人</td><td>这个方法能解决我的业务问题吗？</td><td>解决方案页、业务场景对应关系</td></tr>
        <tr><td>技术评估者</td><td>方法论是否可复核？交付物是什么？</td><td>GEO-AIP™ 方法页、交付物清单</td></tr>
        <tr><td>财务/采购</td><td>价格是多少？包含哪些内容？</td><td>透明定价页、服务范围对比表</td></tr>
        <tr><td>法务/合规</td><td>承诺了什么？有哪些限制？</td><td>服务条款、边界声明、不承诺条款</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-5" className={styles.sectionBlock}>
      <h2>5. 验收和复测：B2B GEO 项目中的闭环设计</h2>
      <p>B2B GEO 项目的验收不能只看"AI 有没有提到我们"，需要验证 AI 是否在专业选型场景中准确描述了核心能力、适用条件和差异化优势。</p>
      <p>建议的复测问题类型包括：品类对比型（"GEO 服务怎么选"）、场景适配型（"B2B 企业适合什么阶段开始做 GEO"）、风险核验型（"GEO 服务商能保证什么、不能保证什么"）。</p>
      <div className={styles.inlineCtaBanner}><div className={styles.ctaCopy}><h3>了解 B2B 场景的评估入口</h3><p>描述你的业务方向和决策链，我们先判断诊断范围。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html?intent=b2b">申请免费需求评估 →</a></div>
    </section>
  </>
}

function EntityBuildingArticle() {
  return <>
    <section id="section-1" className={styles.sectionBlock}>
      <h2>1. 大模型如何构建对企业的理解</h2>
      <p>国内大模型不是单纯读取你的官网，而是将多个来源的信息汇通后构建对一个"企业实体"的综合理解：官方网站、百科词条、工商登记信息（爱企查/企查查）、公众号简介、新闻报道，以及用户在知乎等平台对该企业的讨论。</p>
      <p>当这些来源的信息一致时，模型对企业的理解会更稳定、回答更准确。当来源之间存在冲突（如名称不一致、业务范围描述不同），模型会降低置信度，回答趋于模糊或产生错误描述。</p>
      <div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="shield" size={18} /><strong>实体一致性原则</strong></div><p>企业实体建设的核心不是"内容量"，而是"各信源的一致性"。矛盾的信息比没有信息危害更大。</p></div>
    </section>
    <section id="section-2" className={styles.sectionBlock}>
      <h2>2. 实体信息的四个层次</h2>
      <ol className={styles.styledList}>
        <li><strong>主体层（Legal Entity）：</strong>企业法定全称、注册地址、统一社会信用代码、法定代表人。这些信息需要与工商登记完全一致，是国内 AI 核验企业真实性的基础。</li>
        <li><strong>品牌层（Brand Identity）：</strong>品牌名称（中英文）、品牌定位描述、核心产品与服务名称。需要在官网、公众号简介和百科词条中保持完全一致的表述。</li>
        <li><strong>能力层（Capability Claims）：</strong>企业核心能力、服务范围、技术方法、资质认证。每条能力主张需要有可核验的来源支撑。</li>
        <li><strong>关系层（Entity Relations）：</strong>企业与合作伙伴、行业协会、媒体报道的关联关系，以及产品线之间的从属关系。</li>
      </ol>
    </section>
    <section id="section-3" className={styles.sectionBlock}>
      <h2>3. 实体信息冲突的三种常见场景与处理方式</h2>
      <div className={styles.tableWrapper}><table className={styles.comparisonTable}><thead><tr><th>冲突类型</th><th>典型表现</th><th>处理方式</th></tr></thead><tbody>
        <tr><td>名称冲突</td><td>官网用"AskLume"，公众号用"问答光源"，百科词条用"问答光源科技"</td><td>统一确认主品牌和法律主体名称，各平台同步更新</td></tr>
        <tr><td>业务范围冲突</td><td>官网说"服务中国企业"，某媒体报道说"专注出海企业"</td><td>在官网增加明确的业务范围说明，并建立反向链接到权威来源</td></tr>
        <tr><td>事实时效冲突</td><td>百科词条的服务价格是两年前的旧价格</td><td>更新词条内容，在官网服务页面标注"最新价格以官网为准"</td></tr>
      </tbody></table></div>
    </section>
    <section id="section-4" className={styles.sectionBlock}>
      <h2>4. 国内实体建设的优先序列</h2>
      <p>建议按以下优先级建设国内企业实体信息：</p>
      <ol className={styles.styledList}>
        <li><strong>第一优先：官网 About 页面</strong>——用清晰的企业全称、品牌、服务范围和联系方式建立"信息锚点"。确保 ICP 备案号与工商登记一致。</li>
        <li><strong>第二优先：百度百科词条</strong>——建立或更新品牌/产品词条，与官网 About 页面信息完全对齐，添加官网作为参考来源。</li>
        <li><strong>第三优先：爱企查/企查查信息核实</strong>——确认工商登记信息是最新状态，经营范围描述能反映当前实际业务。</li>
        <li><strong>第四优先：微信公众号简介</strong>——公众号简介中的品牌名称、业务描述与官网保持一致，并在文章中定期引用官网权威内容。</li>
        <li><strong>第五优先：知乎账号与问答</strong>——建立企业官方知乎账号，在相关问题下提供权威、有来源的专业回答。</li>
      </ol>
    </section>
    <section id="section-5" className={styles.sectionBlock}>
      <h2>5. 如何验收实体信息的一致性</h2>
      <p>实体建设完成后，建议用以下方式验收信息一致性：</p>
      <ol className={styles.styledList}>
        <li>分别在 Kimi、豆包、文心一言中询问"[企业名称] 是什么公司，主要做什么？"，对比各平台回答的准确性和来源引用。</li>
        <li>检查回答中引用的来源链接是否可访问、内容是否与当前企业实际情况一致。</li>
        <li>记录各平台回答的具体描述，标记与事实不符的部分，制定针对性修复计划。</li>
      </ol>
      <div className={styles.inlineCtaBanner}><div className={styles.ctaCopy}><h3>想了解你的企业实体在国内 AI 中的状态？</h3><p>系统记录 AI 当前如何理解你的品牌，建立修复依据。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">申请免费需求评估 →</a></div>
    </section>
  </>
}

function SelfCheck20Article() {
  return <>
    <section id="section-1" className={styles.sectionBlock}>
      <h2>1. 如何使用这份清单</h2>
      <p>这份自测清单不需要任何专业工具。你只需要打开 Kimi、豆包或文心一言中的任意一个，用对话框提问，然后根据实际回答结果对每个问题做出判断。</p>
      <p>评分规则：每个问题给出"是 / 部分是 / 否"三种评估。20 道题分为四类，每类 5 题，对应四个认知断点层次。在某类中"否"的答案越多，说明该类断点越需要优先建设。</p>
      <div className={styles.calloutNote}><div className={styles.calloutHeader}><Icon name="brain" size={18} /><strong>使用注意事项</strong></div><p>每次测试要记录平台名称、模型版本和测试时间。不同平台、不同时间的结果不能直接对比。自测结果仅供内部判断参考，不能替代系统化的基线诊断报告。</p></div>
    </section>
    <section id="section-2" className={styles.sectionBlock}>
      <h2>2. 第一类：可见性断点评估（问题 1–5）</h2>
      <p>这类问题测试品牌在 AI 中的基本出现状态。如果在非点名问题中品牌完全不出现，说明存在可见性断点，需要优先建设实体信息和外部信源覆盖。</p>
      <ol className={styles.styledList}>
        <li>在 AI 中搜索你的品牌名称，AI 能给出完整且基本准确的介绍吗？</li>
        <li>在 AI 中提问"[你的核心业务类别] 有哪些专业服务商"，你的品牌出现了吗？</li>
        <li>在 AI 中询问"[你的目标客户类型] 应该找什么类型的公司解决 [核心问题]"，你的品牌或类别被提及了吗？</li>
        <li>当 AI 提到你的品牌时，引用的来源链接是否可以正常访问？</li>
        <li>AI 回答中描述你们提供的服务类型，是否与你们实际提供的主要服务一致？</li>
      </ol>
    </section>
    <section id="section-3" className={styles.sectionBlock}>
      <h2>3. 第二类：理解准确性断点评估（问题 6–10）</h2>
      <p>这类问题测试 AI 是否能准确描述企业的核心能力、适用范围和业务边界。如果品牌能出现但描述不准确，说明存在理解断点，需要优先建设核心事实源和纠偏内容。</p>
      <ol className={styles.styledList}>
        <li>AI 描述你们的主要服务时，是否包含了正确的服务类型和典型客户群？</li>
        <li>AI 是否曾经把你们的产品或服务与竞争对手的产品混淆，或描述了你们没有提供的服务？</li>
        <li>AI 对你们服务价格或价格区间的描述是否准确（如果你们公开了定价）？</li>
        <li>AI 描述你们的地域覆盖范围（如"主要服务中国市场"），是否与实际情况一致？</li>
        <li>AI 提到你们的方法论或工作流程时，描述是否基本准确（而不是随意发明的）？</li>
      </ol>
    </section>
    <section id="section-4" className={styles.sectionBlock}>
      <h2>4. 第三类：证据充分性断点评估（问题 11–15）</h2>
      <p>这类问题测试 AI 在回答中引用的信源是否充分、权威。如果回答准确但没有来源支撑，说明存在证据断点，需要优先建设外部权威信源和可引用证据资产。</p>
      <ol className={styles.styledList}>
        <li>AI 在提到你的品牌时，是否引用了可访问的具体来源链接？</li>
        <li>AI 引用的来源是否属于权威渠道（官网、行业媒体、知乎高赞回答、百科词条等）？</li>
        <li>如果你提问"[你的品牌] 的方法论有哪些公开资料"，AI 是否能指向至少 2 个具体资源？</li>
        <li>AI 在描述你们的服务时，是否能引用具体的交付物或案例说明（哪怕是脱敏的）？</li>
        <li>你的品牌在知乎、公众号或百科等平台是否有权威且与官网一致的内容可供 AI 引用？</li>
      </ol>
    </section>
    <section id="section-5" className={styles.sectionBlock}>
      <h2>5. 第四类：决策场景适配性断点评估（问题 16–20）</h2>
      <p>这类问题测试 AI 在用户面临实际选型决策时，是否能准确说明你们的适配条件和差异化优势。如果前三类都通过但这类失败，说明存在选择断点，需要优先建设对比型和场景型内容。</p>
      <ol className={styles.styledList}>
        <li>在"[具体条件] 下，[服务类别] 应该怎么选"的场景问题中，AI 能提及你们吗？</li>
        <li>AI 是否能说明你们的服务适合哪类企业、不适合哪类企业（边界清晰）？</li>
        <li>在专业对比问题中（如"A 和 B 有什么区别"），AI 对你们的差异化描述是否准确？</li>
        <li>AI 能否说明你们的验收和复测方式，以区别于只承诺结果的同类服务？</li>
        <li>AI 在回答"这类服务通常需要多少预算"时，能否准确反映你们的公开定价和包含范围？</li>
      </ol>
      <div className={styles.inlineCtaBanner}><div className={styles.ctaCopy}><h3>自测发现了明显断点？</h3><p>把自测结果和业务方向一起带来，我们帮你判断诊断范围和建设优先级。</p></div><a className={styles.ctaBannerBtn} href="./diagnostic.html">申请免费需求评估 →</a></div>
    </section>
  </>
}
