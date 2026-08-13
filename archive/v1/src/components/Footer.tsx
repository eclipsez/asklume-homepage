import { useState } from 'react'
import { navItems, footerContact } from '../content/homeContent'
import { Brand } from './Brand'
import styles from './Footer.module.css'

type SocialName = 'LinkedIn' | 'X' | 'YouTube'

const socialChannels = ['LinkedIn', 'X', 'YouTube'] as const satisfies readonly SocialName[]

function SocialIcon({ name }: { name: SocialName }) {
  if (name === 'LinkedIn') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
      </svg>
    )
  }

  if (name === 'X') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function Footer() {
  const [openColumns, setOpenColumns] = useState<Record<string, boolean>>({
    platform: false,
    about: false,
    resources: false,
    connect: false,
  })

  const toggleColumn = (key: string) => {
    setOpenColumns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        {/* 5-Column Layout with Collapsible Accordion on Mobile */}
        <div className={styles.grid}>
          {/* Column 1: Brand & Tagline */}
          <div className={styles.brandColumn}>
            <a aria-label="AskLume 首页" className={styles.brandLink} href="#top">
              <Brand />
            </a>
            <p className={styles.brandTagline}>
              问答光源通过 GEO-AIP™ 数字证据工程，帮助企业掌控 AI 时代的用户决策旅程。
            </p>
          </div>

          {/* Column 2: Platform */}
          <div className={`${styles.linkColumn} ${openColumns.platform ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('platform')}
              aria-expanded={openColumns.platform}
            >
              <h3 className={styles.columnTitle}>核心平台</h3>
              <ChevronIcon isOpen={!!openColumns.platform} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="#capabilities">全网 AI 发现 (Explore)</a></li>
                <li><a href="#capabilities">品牌 AI 评估 (Measure)</a></li>
                <li><a href="#capabilities">证据链构建 (Act)</a></li>
                <li><a href="#capabilities">AI 搜索引流 (Advertise)</a></li>
                <li><a href="#pillars">GEO 认知方法论</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: About Us */}
          <div className={`${styles.linkColumn} ${openColumns.about ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('about')}
              aria-expanded={openColumns.about}
            >
              <h3 className={styles.columnTitle}>关于我们</h3>
              <ChevronIcon isOpen={!!openColumns.about} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="#trust">标杆客户案例</a></li>
                <li><a href="#footer">核心研发团队</a></li>
                <li><a href="#footer">加入我们 (Careers)</a></li>
                <li><a href="#insights">新闻与前沿动态</a></li>
                <li><a href="#footer">公司概览</a></li>
                <li><a href={`mailto:${footerContact.email}`}>联系专家团队</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Resources */}
          <div className={`${styles.linkColumn} ${openColumns.resources ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('resources')}
              aria-expanded={openColumns.resources}
            >
              <h3 className={styles.columnTitle}>资源中心</h3>
              <ChevronIcon isOpen={!!openColumns.resources} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="#insights">学术前沿研究</a></li>
                <li><a href="#capabilities">AI 搜索洞察统计</a></li>
                <li><a href="#capabilities">大模型算法追踪器</a></li>
                <li><a href="#insights">GEO 101 基础指南</a></li>
                <li><a href="#insights">常见问题 (FAQs)</a></li>
                <li><a href="#insights">帮助与文档中心</a></li>
              </ul>
            </div>
          </div>

          {/* Column 5: Connect */}
          <div className={`${styles.linkColumn} ${openColumns.connect ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('connect')}
              aria-expanded={openColumns.connect}
            >
              <h3 className={styles.columnTitle}>联系与关注</h3>
              <ChevronIcon isOpen={!!openColumns.connect} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href={`mailto:${footerContact.email}?subject=${encodeURIComponent('预约演示')}`}>预约专家演示 (Book a Demo)</a></li>
                <li><a href={`mailto:${footerContact.email}`}>订阅品牌周刊</a></li>
                <li><a href={`tel:${footerContact.phone}`}>热线: {footerContact.phone}</a></li>
              </ul>

              <div className={styles.socialGroup}>
                {socialChannels.map((name) => (
                  <span
                    aria-label={`${name}（暂未开放）`}
                    className={styles.socialMark}
                    key={name}
                    role="img"
                    title={`${name}（暂未开放）`}
                  >
                    <SocialIcon name={name} />
                    <span className={styles.socialName}>{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Accessible Navigation for Screen Readers & Tests */}
        <nav aria-label="页脚导航" className={styles.visuallyHidden}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Thin Divider Line */}
        <div className={styles.divider} />

        {/* Bottom Bar: Clean Left Copyright & Right Legal Links */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            © 2026 问答光源 (AskLume Inc.) 保留所有权利 · {footerContact.icp}
          </div>

          <div className={styles.legalLinks}>
            <a href="#footer">服务条款</a>
            <span className={styles.dot}>·</span>
            <a href="#footer">隐私政策</a>
            <span className={styles.dot}>·</span>
            <a href="#footer">Cookie 设置</a>
            <span className={styles.dot}>·</span>
            <a href="#footer">媒体联系</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
