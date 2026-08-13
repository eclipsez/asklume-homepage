import styles from './GlassDashboard.module.css'

export function GlassDashboard() {
  return (
    <div aria-label="AI认知基线示例数据" className={styles.dashboardCard} role="region">
      <div className={styles.dashHeader}>
        <div>
          <div className={styles.dashUserTitle}>AI认知基线样本</div>
          <div className={styles.dashUserSub}>以下为界面示例，不代表真实诊断结果。</div>
        </div>
      </div>

      <div className={styles.dashSearchBox}>
        <input
          type="text"
          className={styles.dashInput}
          value="请输入企业在AI中的可见性、理解度或引用率问题..."
          readOnly
        />
        <button aria-label="提交示例问题" className={styles.dashSendBtn} type="button">&rarr;</button>
      </div>

      <div className={styles.dashTabs}>
        <span className={`${styles.dashTab} ${styles.dashTabActive}`}>可见性概览</span>
        <span className={styles.dashTab}>理解度分析</span>
        <span className={styles.dashTab}>引用量测量</span>
        <span className={styles.dashTab}>竞品对比</span>
        <span className={styles.dashTab}>趋势预测</span>
      </div>

      <div className={styles.dashMetricsGrid}>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>可见性</div>
          <div className={styles.metricVal}>72%</div>
          <div className={styles.metricBadge}>&uarr; 12%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>理解度</div>
          <div className={styles.metricVal}>68%</div>
          <div className={styles.metricBadge}>&uarr; 9%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>引用量</div>
          <div className={styles.metricVal}>156</div>
          <div className={styles.metricBadge}>&uarr; 23%</div>
        </div>
        <div className={styles.metricCard}>
          <div className={styles.metricLabel}>推荐率</div>
          <div className={styles.metricVal}>29%</div>
          <div className={styles.metricBadge}>&uarr; 6%</div>
        </div>
      </div>
    </div>
  )
}
