import styles from './SolutionsPreviewSection.module.css'

const solutions = [
  {
    title: 'AI可发现性建设',
    signal: '相关问题中不出现品牌，重要页面也难以被读取。',
    href: './solutions.html#discoverability',
  },
  {
    title: 'AI认知纠偏',
    signal: 'AI提到了品牌，但能力、边界或适用对象描述错误。',
    href: './solutions.html#correction',
  },
  {
    title: '复杂业务与决策内容',
    signal: 'AI知道品牌，却无法解释为什么适合当前决策。',
    href: './solutions.html#decision-content',
  },
] as const

export function SolutionsPreviewSection() {
  return (
    <section aria-labelledby="solutions-preview-title" className={styles.section} id="solutions">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <h2 id="solutions-preview-title">先识别业务断点，再选择建设路径</h2>
          <p>解决方案按企业当前遇到的问题组织，不用行业标签代替诊断。</p>
        </header>

        <div className={styles.layout}>
          <div className={styles.standardList}>
            {solutions.map((solution) => (
              <a className={styles.solutionRow} href={solution.href} key={solution.title}>
                <span>{solution.title}</span>
                <p>{solution.signal}</p>
                <strong aria-hidden="true">查看路径</strong>
              </a>
            ))}
          </div>

          <a className={styles.globalFeature} href="./global-geo.html">
            <span>重点解决方案</span>
            <h3>品牌出海与全球AI可发现性</h3>
            <p>不是把中文页面翻译成英文，而是围绕目标市场的问题、事实、来源与技术关系重建证据。</p>
            <strong>查看海外 GEO</strong>
          </a>
        </div>

        <a className={styles.allSolutionsLink} href="./solutions.html">查看全部解决方案</a>
      </div>
    </section>
  )
}
