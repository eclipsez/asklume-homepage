import { Icon } from '../components/Icon'
import type { ArticleId } from './ResourceDetailPage'
import styles from './ResourceDetailPage.module.css'

export function SupplementaryArticleBody({ articleId }: { articleId: Exclude<ArticleId, 'evidence' | 'geo101'> }) {
  if (articleId === 'baseline') return <BaselineArticle />
  if (articleId === 'question-set') return <QuestionSetArticle />
  if (articleId === 'answer-audit') return <AnswerAuditArticle />
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
