import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'

type LegalKind = 'privacy' | 'terms'

interface LegalPageProps { kind: LegalKind }

export function LegalPage({ kind }: LegalPageProps) {
  const isPrivacy = kind === 'privacy'
  return (
    <SupportPageFrame description={isPrivacy ? '说明我们如何处理通过本网站主动提交的联系信息，以及上线前需要进一步确认的隐私事项。' : '说明网站内容、服务边界、交付约定与第三方平台结果之间的责任边界。'} eyebrow="网站政策" page={kind} secondaryAction={{ href: './contact.html', label: '联系 AskLume' }} title={isPrivacy ? '隐私政策' : '服务条款'}>
      <article className={`${styles.section} ${styles.sectionWhite}`}><div className={`${styles.inner} ${styles.legalContent}`}><p className={styles.legalNotice}>本页面为网站上线前草案。正式发布前，请由实际经营主体确认公司名称、联系地址、数据处理方式和适用法律，并完成必要的法务审核。</p>{isPrivacy ? <PrivacyBody /> : <TermsBody />}</div></article>
    </SupportPageFrame>
  )
}

function PrivacyBody() {
  return <>
    <h2>隐私政策</h2><p>问答光源｜AskLume 尊重个人信息。本文说明当你通过本网站发送邮件、提交资料或主动联系我们时，我们可能如何处理相关信息。</p>
    <h3>1. 我们可能接收的信息</h3><p>包括姓名、公司、职位、邮箱、官网、项目需求以及你在邮件中主动提供的材料。请不要发送与项目无关的敏感个人信息。</p>
    <h3>2. 使用目的</h3><p>我们可能使用这些信息来回复咨询、评估服务范围、准备项目沟通、提供约定服务，以及处理与服务相关的必要联系。</p>
    <h3>3. 信息共享</h3><p>我们不会把联系信息用于与咨询无关的出售或出租。只有在提供服务所需、获得你的授权或法律要求时，才可能向相关人员或服务方提供必要信息。</p>
    <h3 id="cookies">4. Cookie 与分析工具</h3><p>Cookie 和分析工具以实际部署版本为准。如果上线非必要分析、广告或第三方追踪工具，应在正式发布前补充说明、选择机制和管理入口。</p>
    <h3>5. 保存与请求</h3><p>我们会根据沟通和服务需要保存信息，并在不再需要时按适用流程删除或匿名化。你可以通过 hello@asklume.com 联系我们，询问信息处理或提出更正、删除请求。</p>
    <h3>6. 政策更新</h3><p>实际业务、网站功能或适用法规发生变化时，本政策需要同步更新，并在正式页面标注生效日期。</p>
  </>
}

function TermsBody() {
  return <>
    <h2>服务条款</h2><p>访问本网站或与问答光源｜AskLume 联系，即表示你理解以下网站内容和服务边界。具体项目以双方确认的书面范围、工作单或合同为准。</p>
    <h3>1. 服务范围</h3><p>我们提供 AI 认知诊断、数字证据工程、内容与技术建设、复测及相关咨询。不同项目的交付物、周期、权限和验收标准需要单独确认。</p>
    <h3>2. 结果边界</h3><p>第三方 AI 平台、搜索系统和模型的回答受外部数据、算法、时间和平台规则影响。我们不承诺固定排名、固定推荐率、固定引用量或任何不可控的商业结果。</p>
    <h3>3. 客户责任</h3><p>客户应提供真实、准确并有权使用的资料，指定能够确认企业事实和公开范围的负责人，并按约定完成反馈、授权和发布配合。</p>
    <h3>4. 内容与知识产权</h3><p>双方的原有资料、商标和知识产权归原权利人所有。项目成果的使用范围、源文件、第三方素材和授权方式以合同约定为准。</p>
    <h3>5. 外部链接与资料</h3><p>网站可能引用第三方平台或公开资料。外部页面的可用性、内容和规则由其运营方负责，用户应自行判断是否访问或使用。</p>
    <h3>6. 联系与更新</h3><p>如需确认服务范围或提出条款问题，请联系 hello@asklume.com。正式条款应由实际经营主体补充生效日期、适用法律和争议解决方式。</p>
  </>
}
