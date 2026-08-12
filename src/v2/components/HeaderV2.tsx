import React from 'react'
import styles from './HeaderV2.module.css'

export function HeaderV2() {
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <a href="#top" className={styles.brandLogo}>
          <div className={styles.logoIcon}>
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="42" stroke="url(#v2-logo-grad)" strokeWidth="8" />
              <circle cx="50" cy="50" r="18" fill="url(#v2-logo-core)" />
              <defs>
                <linearGradient id="v2-logo-grad" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#4972ff" />
                  <stop offset="50%" stopColor="#7556f4" />
                  <stop offset="100%" stopColor="#df5fd1" />
                </linearGradient>
                <radialGradient id="v2-logo-core" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7556f4" />
                  <stop offset="100%" stopColor="#4972ff" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div>
            <div className={styles.brandName}>问答光源｜AskLume</div>
            <div className={styles.brandSub}>企业AI认知与影响力基础设施</div>
          </div>
        </a>

        <ul className={styles.navMenu}>
          <li><a href="#top" className={styles.navLink}>首页</a></li>
          <li><a href="#v2-features" className={styles.navLink}>产品与服务</a></li>
          <li><a href="#v2-pillars" className={styles.navLink}>解决方案</a></li>
          <li><a href="#v2-capabilities" className={styles.navLink}>资源中心</a></li>
          <li><a href="#v2-footer" className={styles.navLink}>关于我们</a></li>
        </ul>

        <div className={styles.navRight}>
          <button className={styles.langBtn}>中文 / EN</button>
          <a href="#v2-diagnostic" className={styles.ctaPill}>
            AI认知基线诊断
          </a>
        </div>
      </div>
    </header>
  )
}
