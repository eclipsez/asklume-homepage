import contactHero from '../assets/contact/conversation-path-generated.jpg'
import { SupportPageFrame, supportStyles as styles } from './SupportPageFrame'

export function ContactPage() {
  return (
    <SupportPageFrame description="告诉我们你的品牌、产品、目标市场和当前困惑，我们会先判断问题属于诊断、建设还是定制范围。" eyebrow="联系 AskLume" heroAlt="两条不同颜色的路径在安静的建筑空间中汇合" heroImage={contactHero} page="contact" primaryAction={{ href: 'mailto:hello@asklume.com?subject=咨询AskLume服务', label: '发送邮件咨询' }} secondaryAction={{ href: './diagnostic.html', label: '了解诊断流程' }} title="把问题交给专家团队" >
      <section className={`${styles.section} ${styles.sectionWhite}`} id="media"><div className={styles.inner}><div className={styles.contactGrid}><div className={styles.contactDetails}><p className={styles.eyebrow}>直接联系</p><h2>从一封有背景的邮件开始</h2><p>请尽量说明公司名称、官网、产品或服务、目标市场，以及你最希望 AI 改善的回答问题。</p><a className={styles.inlineLink} href="mailto:hello@asklume.com">hello@asklume.com →</a><p className={styles.legalNotice}>当前通过邮箱接收需求，正式表单会在服务流程确定后接入。</p></div><div className={styles.checkGrid}>{['公司与官网','核心产品或服务','目标市场与语言','常见 AI 问题或原始回答','已有页面和内容资产','希望解决的时间窗口'].map(item => <div className={styles.checkItem} key={item}><span>✓</span><p>{item}</p></div>)}</div></div></div></section>
      <section className={`${styles.section} ${styles.sectionSoft}`}><div className={styles.inner}><div className={styles.sectionHeading}><p className={styles.eyebrow}>媒体与合作</p><h2>需要采访、研究合作或公开案例？</h2><p>先查看可讨论主题、合作形式、引用规则和材料准备要求。</p><a className={styles.inlineLink} href="./media.html">查看媒体与研究合作 →</a></div></div></section>
    </SupportPageFrame>
  )
}
