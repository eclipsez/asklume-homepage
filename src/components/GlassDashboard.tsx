import { useId } from 'react'
import { metrics } from '../content/homeContent'
import { Brand } from './Brand'
import { Icon } from './Icon'
import styles from './GlassDashboard.module.css'

export interface GlassDashboardProps {
  className?: string
  variant?: 'hero' | 'embedded' | 'mobile'
}

const dashboardTabs = [
  '可见性概览',
  '理解度分析',
  '引用质量',
  '竞品对比',
  '趋势洞察',
] as const

export function GlassDashboard({
  className,
  variant = 'hero',
}: GlassDashboardProps) {
  const promptId = `dashboard-question-${useId()}`
  const rootClassName = [
    styles.dashboard,
    variant !== 'hero' ? styles.embedded : '',
    variant === 'mobile' ? styles.mobile : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section aria-label="AskLume AI品牌影响力看板" className={rootClassName}>
      <div className={styles.topBar}>
        <Brand className={styles.brand} compact />
        <div className={styles.utilities}>
          <button aria-label="搜索看板" className={styles.utilityButton} type="button">
            <Icon name="search" size={16} />
          </button>
          <button aria-label="用户中心" className={styles.utilityButton} type="button">
            <Icon name="user" size={16} />
          </button>
        </div>
      </div>

      <div className={styles.intro}>
        <p className={styles.greeting}>早上好，市场团队 <span aria-hidden="true">👋</span></p>
        <p className={styles.question}>今天我们可能如何提升企业在AI中的品牌影响力？</p>
      </div>

      <form className={styles.prompt} onSubmit={(event) => event.preventDefault()}>
        <label className="srOnly" htmlFor={promptId}>
          向AskLume提问
        </label>
        <input
          id={promptId}
          placeholder="输入企业在AI中的可见性、理解度或引用量问题…"
          type="text"
        />
        <button aria-label="提交问题" type="submit">
          <Icon name="arrow" size={17} />
        </button>
      </form>

      <ul aria-label="分析维度" className={styles.tabs}>
        {dashboardTabs.map((tab, index) => (
          <li
            aria-current={index === 0 ? 'true' : undefined}
            className={index === 0 ? styles.activeTab : styles.tab}
            key={tab}
          >
            {tab}
          </li>
        ))}
      </ul>

      <dl className={styles.metrics}>
        {metrics.map((metric) => (
          <div className={styles.metric} key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
            <dd aria-label={`提升 ${metric.delta}`} className={styles.delta}>
              ↑ {metric.delta}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
