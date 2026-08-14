import questionToClarity from '../assets/faq/question-to-clarity-generated.jpg'
import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'

const questions = [
  ['GEO 和 SEO 有什么关系？', 'SEO 主要改善搜索引擎中的发现与访问，GEO 更关注 AI 如何识别、解释、引用和推荐企业。两者共享一部分技术与内容基础，但测试问题和验收方式不同。'],
  ['AskLume 能保证品牌被 AI 推荐吗？', '不能。第三方模型和平台的最终回答不可被服务商固定控制。我们交付可控制、可复核的基线、事实、证据、页面和复测工作，不承诺固定排名或推荐率。'],
  ['你们会测试哪些平台？', '平台会根据目标市场和业务问题确定。启动前会约定平台、模型、问题集、时间和记录方式，避免把不同条件下的回答直接比较。'],
  ['39,800 元和 69,800 元服务档有什么区别？', '两档都包含建设工作，差别在于问题范围、证据深度、页面与场景复杂度、协作量和复测周期。最终范围以诊断后的工作单为准。'],
  ['出海和多语言服务放在哪里？', '品牌出海属于解决方案中的全球 AI 可发现性。单市场或多市场、多语言、当地来源和持续监测的复杂度不同，需要单独评估。'],
  ['你们会帮忙改官网吗？', '可以在约定范围内参与页面、结构化数据、可读取性和内容资产建设。技术权限、发布流程和后续维护责任会在项目开始前写清楚。'],
  ['项目需要客户提供什么？', '通常需要官网、核心产品或服务资料、目标市场、竞品或常见问题，以及能够确认企业事实和公开范围的负责人。材料不完整时会先列出缺口。'],
  ['如何衡量项目是否完成？', '以双方确认的验收项为准，例如事实准确性、证据覆盖、页面和技术动作、复测记录与交付资产，而不是单一的 AI 排名数字。'],
] as const

export function FaqPage() {
  return (
    <SupportPageFrame activeLabel="资源中心" description="把 GEO 服务中最容易被误解的问题说清楚，帮助团队判断是否适合开始。" eyebrow="常见问题" heroAlt="分散的问题节点逐步汇入清晰有序的路径" heroImage={questionToClarity} page="faq" primaryAction={{ href: './diagnostic.html', label: '申请免费需求评估' }} secondaryAction={{ href: './services.html', label: '查看服务范围' }} title="先理解边界，再决定投入" >
      <section className={`${styles.section} ${styles.sectionWhite}`}><div className={styles.inner}><div className={styles.sectionHeading}><p className={styles.eyebrow}>FAQ</p><h2>关于服务、结果与合作方式</h2></div><div className={styles.faqList}>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
      <section className={`${styles.section} ${styles.sectionDark}`}><div className={styles.inner}><div className={styles.callout}><div><p className={styles.eyebrow}>仍有具体问题</p><h2>把你的场景发给我们</h2><p>如果问题涉及目标市场、产品线或现有内容资产，直接描述现状会更有效。</p></div><a className={styles.primaryButton} href="./contact.html">联系专家团队</a></div></div></section>
    </SupportPageFrame>
  )
}
