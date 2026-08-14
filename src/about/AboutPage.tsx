import aboutHero from '../assets/about/about-hero.jpg'
import clarityPrinciple from '../assets/about/clarity-principle.jpg'
import evidenceWorkflow from '../assets/about/evidence-workflow.jpg'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './AboutPage.module.css'

const methodSteps = [
  {
    title: '诊断现状',
    body: '用约定的问题、平台与测试条件，建立可以复核的 AI 认知基线。',
  },
  {
    title: '整理证据',
    body: '梳理企业事实、来源、日期、责任人与限制条件，减少冲突和过时信息。',
  },
  {
    title: '建设资产',
    body: '把事实转化为页面、语义结构、结构化数据和可持续维护的内容资产。',
  },
  {
    title: '持续复测',
    body: '沿用同一测试协议记录变化、无变化与不确定性，为下一轮决策提供依据。',
  },
] as const

const principles = [
  {
    title: '真实先于表达',
    body: '不制造事实，也不把包装当作证据。所有建设从企业真实能力开始。',
  },
  {
    title: '基线先于方案',
    body: '先确认问题在哪里，再决定是否建设、建设什么，以及由谁实施。',
  },
  {
    title: '记录先于结论',
    body: '保留问题、平台、时间、原始回答和引用来源，让判断可以被复核。',
  },
  {
    title: '边界也是可信度',
    body: '如实说明可控制的工作与不可控制的模型输出，不承诺固定排名或推荐。',
  },
] as const

export function AboutPage() {
  return (
    <div className={styles.page} id="top">
      <Header activeLabel="关于我们" page="about" />

      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>关于问答光源</p>
              <h1>让真实能力进入 AI 答案</h1>
              <p className={styles.heroSummary}>
                我们把分散事实、专业能力与可信证据，建设成可发现、可核验的数字资产。
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#method">
                  了解工作方式
                </a>
                <a className={styles.secondaryButton} href="./diagnostic.html?intent=general#intake">
                  申请免费需求评估
                </a>
              </div>
            </div>

            <figure className={styles.heroVisual}>
              <img
                alt="透明材料与光线路径组成的数字证据视觉"
                decoding="async"
                fetchPriority="high"
                src={aboutHero}
              />
            </figure>
          </div>
        </section>

        <section className={styles.manifestoSection}>
          <div className={styles.manifestoInner}>
            <p className={styles.manifestoLead}>
              我们相信，企业的真实能力不应该在 AI 组织答案时被忽略、误解或失去出处。
            </p>
            <div className={styles.missionBlock}>
              <h2>企业 AI 认知与影响力基础设施</h2>
              <p>
                问答光源｜AskLume 连接企业真实能力与 AI 认知环境。我们通过 GEO-AIP™
                和数字证据工程，让事实更容易被发现、理解、核验和引用。
              </p>
            </div>
            <ul aria-label="AskLume 工作目标" className={styles.outcomeList}>
              <li><span>发现</span><strong>看得见</strong></li>
              <li><span>理解</span><strong>说得准</strong></li>
              <li><span>核验</span><strong>有出处</strong></li>
              <li><span>复测</span><strong>能追踪</strong></li>
            </ul>
          </div>
        </section>

        <section className={styles.identitySection}>
          <div className={styles.sectionInner}>
            <div className={styles.identityHeading}>
              <h2>不是操控模型，而是建设可信的信息基础</h2>
              <p>
                AI 的最终回答来自第三方系统。我们专注企业能够控制、维护和验收的部分。
              </p>
            </div>

            <div className={styles.identityGrid}>
              <article className={styles.isPanel}>
                <h3>我们做什么</h3>
                <ul>
                  <li>诊断 AI 如何识别和描述企业</li>
                  <li>整理产品、资质、案例与专业事实</li>
                  <li>建设证据页面与机器可读结构</li>
                  <li>用约定协议持续复测变化</li>
                </ul>
              </article>
              <article className={styles.isNotPanel}>
                <h3>我们不做什么</h3>
                <ul>
                  <li>不承诺操控第三方模型</li>
                  <li>不保证固定排名或推荐率</li>
                  <li>不以批量文章代替真实证据</li>
                  <li>不把单次截图包装成长期结果</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.methodSection} id="method">
          <div className={styles.methodInner}>
            <figure className={styles.methodVisual}>
              <img
                alt="来源材料、索引层与核验路径组成的工作台"
                decoding="async"
                loading="lazy"
                src={evidenceWorkflow}
              />
            </figure>

            <div className={styles.methodCopy}>
              <h2>用一条可审计的路径工作</h2>
              <p className={styles.methodIntro}>
                GEO-AIP™ 统一诊断、建设、验证与迭代，数字证据工程负责把真实事实组织成可维护资产。
              </p>
              <ol className={styles.methodList}>
                {methodSteps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.principlesInner}>
            <div className={styles.principlesCopy}>
              <p className={styles.eyebrow}>我们的原则</p>
              <h2>清醒、可信、进取、克制</h2>
              <div className={styles.principleGrid}>
                {principles.map((principle) => (
                  <article key={principle.title}>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <figure className={styles.principlesVisual}>
              <img
                alt="一束光经过透明棱镜形成清晰路径"
                decoding="async"
                loading="lazy"
                src={clarityPrinciple}
              />
            </figure>
          </div>
        </section>

        <section className={styles.collaborationSection}>
          <div className={styles.narrowInner}>
            <h2>与你已有的团队协同</h2>
            <p className={styles.collaborationIntro}>
              GEO 不替代 SEO、品牌、公关、内容或产品能力。我们帮助这些工作进入同一套事实、证据与测量框架。
            </p>
            <div className={styles.collaborationRows}>
              <article>
                <h3>顾问与赋能</h3>
                <p>我们负责基线、标准、信息架构和质量复核，客户团队负责日常实施。</p>
              </article>
              <article>
                <h3>联合建设</h3>
                <p>双方共同完成证据、核心页面、技术实施与复测，并明确责任边界。</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.closingSection}>
          <div className={styles.closingInner}>
            <div>
              <h2>先确认问题，再决定建设</h2>
              <p>提交一个业务方向，我们先判断当前更像事实、证据、结构还是测量问题。</p>
            </div>
            <a className={styles.primaryButton} href="./diagnostic.html?intent=general#intake">
              申请免费需求评估
            </a>
          </div>
        </section>
      </main>

      <Footer page="about" />
    </div>
  )
}
