const siteUrl = 'https://asklume.com'

const organization = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: '问答光源｜AskLume',
  url: `${siteUrl}/`,
  email: 'hello@asklume.com',
  description: '企业 AI 认知与影响力基础设施服务商，通过 GEO-AIP™ 与数字证据工程帮助企业建设可复核的 AI 认知资产。',
}

const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: '问答光源｜AskLume',
  url: `${siteUrl}/`,
  inLanguage: 'zh-CN',
  publisher: { '@id': `${siteUrl}/#organization` },
}

const page = (name: string, url: string, type = 'WebPage') => ({
  '@type': type,
  name,
  url: `${siteUrl}${url}`,
  inLanguage: 'zh-CN',
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#organization` },
})

const service = (name: string, url: string, description: string) => ({
  '@type': 'Service',
  name,
  url: `${siteUrl}${url}`,
  description,
  provider: { '@id': `${siteUrl}/#organization` },
  areaServed: '全球',
  serviceType: 'GEO 与企业 AI 认知建设',
})

const resourceItems = [
  ['GEO 101：从可发现性到数字证据工程', 'geo101'],
  ['一条主张如何变成可核验的数字资产', 'evidence'],
  ['AI 认知基线诊断看什么', 'baseline'],
  ['如何建立有效的品牌问题集', 'question-set'],
  ['怎样保存一条可复核的 AI 回答', 'answer-audit'],
  ['Schema、llms.txt 与 GEO 的边界', 'schema-boundary'],
].map(([name, id], index) => ({
  '@type': 'ListItem',
  position: index + 1,
  item: page(name, `/resource-detail.html?id=${id}`, 'Article'),
}))

const faqQuestions = [
  ['GEO 和 SEO 有什么关系？', 'SEO 主要改善搜索引擎中的发现与访问，GEO 更关注 AI 如何识别、解释、引用和推荐企业。两者共享一部分技术与内容基础，但测试问题和验收方式不同。'],
  ['AskLume 能保证品牌被 AI 推荐吗？', '不能。第三方模型和平台的最终回答不可被服务商固定控制。我们交付可控制、可复核的基线、事实、证据、页面和复测工作，不承诺固定排名或推荐率。'],
  ['你们会测试哪些平台？', '平台会根据目标市场和业务问题确定。启动前会约定平台、模型、问题集、时间和记录方式，避免把不同条件下的回答直接比较。'],
  ['39,800 元和 69,800 元服务档有什么区别？', '两档都包含建设工作，差别在于问题范围、证据深度、页面与场景复杂度、协作量和复测周期。最终范围以诊断后的工作单为准。'],
  ['出海和多语言服务放在哪里？', '品牌出海属于解决方案中的全球 AI 可发现性。单市场或多市场、多语言、当地来源和持续监测的复杂度不同，需要单独评估。'],
  ['你们会帮忙改官网吗？', '可以在约定范围内参与页面、结构化数据、可读取性和内容资产建设。技术权限、发布流程和后续维护责任会在项目开始前写清楚。'],
  ['项目需要客户提供什么？', '通常需要官网、核心产品或服务资料、目标市场、竞品或常见问题，以及能够确认企业事实和公开范围的负责人。材料不完整时会先列出缺口。'],
  ['如何衡量项目是否完成？', '以双方确认的验收项为准，例如事实准确性、证据覆盖、页面和技术动作、复测记录与交付资产，而不是单一的 AI 排名数字。'],
].map(([question, answer]) => ({
  '@type': 'Question',
  name: question,
  acceptedAnswer: { '@type': 'Answer', text: answer },
}))

export const pageSchemas: Record<string, unknown> = {
  'index.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('问答光源｜AskLume', '/', 'WebPage')] },
  'services.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('产品与服务', '/services.html'), service('企业 AI 认知与 GEO 建设服务', '/services.html', '按企业问题、证据范围和复测要求提供 GEO 建设服务。')] },
  'solutions.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('解决方案', '/solutions.html', 'CollectionPage'), ...['AI 可发现性建设', 'AI 认知纠偏', '复杂业务与决策内容', '品牌出海与全球 AI 可发现性'].map((name) => ({ '@type': 'DefinedTerm', name, inDefinedTermSet: `${siteUrl}/solutions.html` }))] },
  'global-geo.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('品牌出海与全球 AI 可发现性', '/global-geo.html'), service('品牌出海与全球 AI 可发现性', '/global-geo.html', '面向目标市场、语言和可信来源的全球 GEO 解决方案。')] },
  'geo-aip.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('GEO-AIP™ 方法', '/geo-aip.html', 'TechArticle')] },
  'resources.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('资源中心', '/resources.html', 'CollectionPage'), { '@type': 'ItemList', name: 'AskLume GEO 资源', itemListElement: resourceItems }] },
  'resource-detail.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('AskLume GEO 资源详情', '/resource-detail.html')] },
  'about.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('关于我们', '/about.html', 'AboutPage')] },
  'diagnostic.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('AI 认知基线诊断', '/diagnostic.html'), service('AI 认知基线诊断', '/diagnostic.html', '记录 AI 如何理解品牌，判断事实、证据和技术断点，并形成建设依据。')] },
  'deliverables.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('交付物与验收', '/deliverables.html')] },
  'cases.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('案例与证据', '/cases.html', 'CollectionPage')] },
  'faq.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('常见问题', '/faq.html', 'FAQPage'), { '@type': 'FAQPage', mainEntity: faqQuestions }] },
  'contact.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('联系专家团队', '/contact.html', 'ContactPage')] },
  'privacy.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('隐私政策', '/privacy.html')] },
  'terms.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('服务条款', '/terms.html')] },
  '404.html': { '@context': 'https://schema.org', '@graph': [organization, website, page('页面未找到', '/404.html')] },
}
