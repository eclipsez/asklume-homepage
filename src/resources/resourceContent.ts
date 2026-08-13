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
    id: 'geo101',
    category: '入门指南',
    title: 'GEO 101：先理解 AI 可发现性',
    summary: '从搜索、生成式答案与数字证据三个层面，建立一套不依赖效果承诺的 GEO 基础认知。',
    takeaway: '你将理解 GEO 与 SEO 的关系，以及哪些工作属于企业可控制的建设范围。',
    readingTime: '8 分钟',
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
    id: 'evidence',
    category: '证据建设',
    title: '企业证据台账最小字段',
    summary: '用来源、日期、适用范围、责任人和限制条件管理事实、资质、案例与关键主张。',
    takeaway: '你将能区分可发布事实、待补证主张、方法演示与禁止对外使用的材料。',
    readingTime: '6 分钟',
    format: '清单',
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
    summary: '说明结构化数据、抓取规则与内容质量各自能解决什么，以及它们不能保证什么。',
    takeaway: '你将避免把技术配置误当成推荐保证，并能确定更合理的验收方式。',
    readingTime: '8 分钟',
    format: '方法说明',
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
    question: 'GEO 是否可以保证品牌被 AI 推荐？',
    answer: '不能。可控制的工作包括事实治理、证据结构、内容资产、技术可访问性、平台采样与持续复测，不包括控制模型输出。',
  },
] as const
