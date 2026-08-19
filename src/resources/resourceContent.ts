export type ResourceCategory = '入门指南' | '诊断方法' | '证据建设' | '测量与治理'

export interface ResourceItem {
  id: string
  category: ResourceCategory
  title: string
  summary: string
  takeaway: string
  readingTime: string
  format: '指南' | '清单' | '方法说明'
}

export const resourceCategories = [
  '全部',
  '入门指南',
  '诊断方法',
  '证据建设',
  '测量与治理',
] as const

export type ResourceFilter = (typeof resourceCategories)[number]

export const resources: readonly ResourceItem[] = [
  {
    id: 'geo-zero-to-one',
    category: '入门指南',
    title: '从 0 到 1 读懂 GEO：非技术人也能看懂的生成式引擎优化指南',
    summary: '用最通俗的语言厘清 GEO 本质：当客户从“搜关键词”变成“直接问 AI”，企业如何被说对、被证明、被纳入考虑。剥离所有术语包装，讲透真实逻辑与避坑要点。',
    takeaway: '你将掌握判断企业是否需要做 GEO 的 5 个核心问题、常见 6 大认知误区，以及为什么真实证据永远比发稿数量更重要。',
    readingTime: '12 分钟',
    format: '指南',
  },
  {
    id: 'geo101',
    category: '入门指南',
    title: 'GEO 101：先理解 AI 可发现性',
    summary: '从搜索、生成式答案与数字证据三个层面，建立一套不依赖效果承诺的 GEO 基础认知。',
    takeaway: '你将理解 GEO 与 SEO 的关系，以及哪些工作属于企业可控制的建设范围。',
    readingTime: '8 分钟',
    format: '指南',
  },
  {
    id: 'geo-vs-seo',
    category: '入门指南',
    title: 'GEO 与传统 SEO：8 个核心维度对比',
    summary: '系统对比两者在工作目标、可控范围、验收标准与工具方法上的本质差异，厘清协作边界。',
    takeaway: '你将清楚地向团队和管理层解释为什么 GEO 是对 SEO 的补充而非替代，以及各自的预算逻辑。',
    readingTime: '10 分钟',
    format: '指南',
  },
  {
    id: 'domestic-ai-engines',
    category: '入门指南',
    title: '国内主流大模型检索机制与信源偏好',
    summary: '拆解 Kimi、豆包、文心一言、腾讯元宝、通义千问的抓取逻辑与各自偏好的内容来源，指导国内 GEO 信源布局。',
    takeaway: '你将掌握五大国内 AI 引擎的信源优先级，能够针对性地建设公众号、知乎、百科等外部证据阵地。',
    readingTime: '12 分钟',
    format: '方法说明',
  },
  {
    id: 'geo-glossary',
    category: '入门指南',
    title: 'GEO 核心术语标准定义百科',
    summary: '收录 20 个 GEO 与数字证据工程领域的核心概念标准定义，统一团队内外沟通语言，可直接引用。',
    takeaway: '你将获得一份可在提案、汇报与团队培训中直接使用的权威术语卡片集。',
    readingTime: '15 分钟',
    format: '指南',
  },
  {
    id: 'baseline',
    category: '诊断方法',
    title: 'AI 认知基线诊断看什么',
    summary: '拆解问题集、平台样本、原始回答、引用来源、事实准确性与竞品参照的基本结构。',
    takeaway: '你将知道一份可复核的基线诊断应该保留哪些原始记录和边界说明。',
    readingTime: '10 分钟',
    format: '方法说明',
  },
  {
    id: 'question-set',
    category: '诊断方法',
    title: '如何建立有效的品牌问题集',
    summary: '把业务方向转成品牌、品类、场景、比较与风险问题，避免只测试品牌自问自答。',
    takeaway: '你将获得问题分层思路，并能判断样本是否覆盖真实决策意图。',
    readingTime: '9 分钟',
    format: '指南',
  },
  {
    id: 'b2b-geo-guide',
    category: '诊断方法',
    title: 'B2B 企业 GEO 实操：从问题集到证据链',
    summary: '针对决策链长、产品复杂、客户专业度高的 B2B 场景，梳理 AI 选型词拦截、比较内容建设与多决策人证据组织方法。',
    takeaway: '你将获得一套 B2B 语境下专属的 GEO 问题分层与证据优先级建设路径，而不是通用的流量思维。',
    readingTime: '11 分钟',
    format: '指南',
  },
  {
    id: 'manufacturing-geo-guide',
    category: '诊断方法',
    title: '高端制造与工业品 GEO 实操：复杂参数与资质证据链',
    summary: '针对参数繁多、资质要求高、选型决策链长的制造业场景，拆解如何将检测报告、专利资质与工程参数转化为 AI 认可的权威数字证据。',
    takeaway: '你将理解高端制造在 AI 时代的核心认知风险，以及如何将分散的技术文档与合规资产重构成 AI 选型时的高权重证据链。',
    readingTime: '13 分钟',
    format: '指南',
  },
  {
    id: 'global-geo-guide',
    category: '诊断方法',
    title: '跨境出海品牌多语言 GEO 实操：跨生态事实一致性',
    summary: '针对海外 ChatGPT、Perplexity、Claude 与国内生态的分野，梳理跨语言实体对齐、海外本地权威信源（Wikidata、行业媒体、测评平台）布局与跨国认知基线治理。',
    takeaway: '你将掌握出海企业在多语种、多模型环境下防止品牌被误解与信息脱节的系统化工程路径。',
    readingTime: '14 分钟',
    format: '指南',
  },
  {
    id: 'evidence',
    category: '证据建设',
    title: '企业证据台账最小字段',
    summary: '用来源、日期、适用范围、责任人和限制条件管理事实、资质、案例与关键主张。',
    takeaway: '你将能区分可发布事实、待补证主张、方法演示与禁止对外使用的材料。',
    readingTime: '6 分钟',
    format: '清单',
  },
  {
    id: 'entity-building',
    category: '证据建设',
    title: '企业实体建设：让大模型稳定识别你是谁',
    summary: '用一致的名称、主体、关系、资质与业务边界，在国内各大模型的知识图谱中建立稳定的企业实体表达。',
    takeaway: '你将理解为什么官网之外还需要百科词条、爱企查信息和公众号简介的一致性，以及如何分阶段落地。',
    readingTime: '9 分钟',
    format: '方法说明',
  },
  {
    id: 'answer-audit',
    category: '测量与治理',
    title: '怎样保存一条可复核的 AI 回答',
    summary: '记录提示词、意图、平台与模型、时间、地区、原始回答、引用链接和事实核验结果。',
    takeaway: '你将获得一条 AI 回答从采样到复核所需的完整记录结构。',
    readingTime: '7 分钟',
    format: '清单',
  },
  {
    id: 'schema-boundary',
    category: '测量与治理',
    title: 'Schema、llms.txt 与 GEO 的边界',
    summary: '说明结构化数据、抓取规则与内容质量各自能解决什么，以及它们不能替代什么。',
    takeaway: '你将避免把技术配置误当成推荐依据，并能确定更合理的验收方式。',
    readingTime: '8 分钟',
    format: '方法说明',
  },
  {
    id: 'self-check-20',
    category: '测量与治理',
    title: '国内 AI 认知自测清单：20 个判断问题',
    summary: '不需要专业工具，团队自行用 20 个结构化问题评估当前 AI 认知状态，识别四类认知断点的优先级。',
    takeaway: '你将能在 30 分钟内完成初步自测，判断品牌处于"不可见、被误解、无来源、无法被选择"中的哪个阶段。',
    readingTime: '6 分钟',
    format: '清单',
  },
] as const

export const faqItems = [
  {
    question: '资源中心会提供即时 GEO 分数吗？',
    answer: '不会。脱离真实平台采样、问题集与原始回答的即时分数容易造成误导。页面提供的是可复核的方法、字段与判断标准。',
  },
  {
    question: '这些方法可以代替正式诊断吗？',
    answer: '不能。资源用于团队自查和建立共同语言。正式基线诊断还需要明确业务方向、测试范围、平台样本、时间和地区。',
  },
  {
    question: 'GEO 是否可以替代品牌被 AI 推荐？',
    answer: '不能。可控制的工作包括事实治理、证据结构、内容资产、技术可访问性、平台采样与持续复测，不包括控制模型输出。',
  },
  {
    question: '国内大模型与海外 AI 的 GEO 优化逻辑有什么不同？',
    answer: '国内大模型（Kimi、豆包、文心一言等）更依赖微信公众号、知乎、百度百科等中文生态信源，且对广告法极端词有更严格的安全过滤机制。ICP 备案与企业全称的 E-E-A-T 一致性在国内环境中权重更高。',
  },
  {
    question: '企业团队自己能做 GEO 吗？',
    answer: '基础的自测、问题集梳理与证据台账整理，有内容与技术能力的团队可以自行推进。需要服务商的场景通常是：缺少系统化基线方法、多品牌多市场复杂度高，或需要第三方独立核验。',
  },
] as const
