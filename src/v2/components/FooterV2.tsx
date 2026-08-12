import React from 'react'
import styles from './FooterV2.module.css'

export function FooterV2() {
  return (
    <footer id="v2-footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.brandName}>问答光源｜AskLume</div>
            <div className={styles.brandSub}>至真实力进入AI答案。</div>
          </div>

          <ul className={styles.links}>
            <li><a href="#top">首页</a></li>
            <li><a href="#v2-features">产品与服务</a></li>
            <li><a href="#v2-pillars">解决方案</a></li>
            <li><a href="#v2-capabilities">资源中心</a></li>
            <li><a href="#v2-footer">关于我们</a></li>
          </ul>

          <div className={styles.socials}>
            <span>LinkedIn</span>
            <span>X</span>
            <span>YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
