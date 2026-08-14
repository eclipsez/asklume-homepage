import { useState } from 'react'
import { getSiteNavItems, type SitePage } from '../content/siteContent'
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

interface FooterProps {
  page?: SitePage
}

export function Footer({ page = 'home' }: FooterProps) {
  const [openColumns, setOpenColumns] = useState<Record<string, boolean>>({
    platform: false,
    about: false,
    partnerships: false,
    connect: false,
  })

  const navItems = getSiteNavItems(page)
  const homeHref = page === 'home' ? '#top' : './index.html#top'
  const toggleColumn = (key: string) => {
    setOpenColumns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <footer className={styles.footer} id="footer" role="contentinfo">
      <div className={styles.container}>
        {/* Conversion, proof, learning, and contact paths remain visible on desktop and collapse on mobile. */}
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <a aria-label="AskLume 首页" className={styles.brandLink} href={homeHref}>
              <Brand />
            </a>
            <p className={styles.brandTagline}>
              问答光源通过 GEO-AIP™ 数字证据工程，帮助企业掌控 AI 时代的用户决策旅程。
            </p>
            <a className={styles.brandCta} href={page === 'home' ? '#diagnostic' : './diagnostic.html'}>免费需求评估</a>
          </div>

          <div className={`${styles.linkColumn} ${openColumns.platform ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('platform')}
              aria-expanded={openColumns.platform}
            >
              <h3 className={styles.columnTitle}>了解 AskLume</h3>
              <ChevronIcon isOpen={!!openColumns.platform} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="./solutions.html">解决方案</a></li>
                <li><a href="./services.html#plans">产品与服务</a></li>
                <li><a href="./geo-aip.html">GEO-AIP™ 方法</a></li>
                <li><a href="./global-geo.html">海外 GEO</a></li>
                <li><a href="./about.html">关于我们</a></li>
              </ul>
            </div>
          </div>

          <div className={`${styles.linkColumn} ${openColumns.about ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('about')}
              aria-expanded={openColumns.about}
            >
              <h3 className={styles.columnTitle}>证明与交付</h3>
              <ChevronIcon isOpen={!!openColumns.about} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="./cases.html">验证记录</a></li>
                <li><a href="./deliverables.html">交付物样例</a></li>
                <li><a href="./faq.html">服务 FAQ</a></li>
                <li><a href="./resources.html">资源中心</a></li>
                <li><a href="./about.html#method">工作方式</a></li>
              </ul>
            </div>
          </div>

          <div className={`${styles.linkColumn} ${openColumns.partnerships ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('partnerships')}
              aria-expanded={openColumns.partnerships}
            >
              <h3 className={styles.columnTitle}>合作与生态</h3>
              <ChevronIcon isOpen={!!openColumns.partnerships} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="./partners.html">渠道与代理合作</a></li>
                <li><a href="./media.html">媒体与研究合作</a></li>
                <li><a href="./public-sector.html">政府与产业合作</a></li>
              </ul>
            </div>
          </div>

          <div className={`${styles.linkColumn} ${openColumns.connect ? styles.columnOpen : ''}`}>
            <button
              type="button"
              className={styles.columnHeaderBtn}
              onClick={() => toggleColumn('connect')}
              aria-expanded={openColumns.connect}
            >
              <h3 className={styles.columnTitle}>企业服务</h3>
              <ChevronIcon isOpen={!!openColumns.connect} />
            </button>
            <div className={styles.linkListWrapper}>
              <ul className={styles.linkList}>
                <li><a href="./services.html#custom">企业定制项目</a></li>
                <li><a href="./services.html#monitoring">持续监测与迭代</a></li>
                <li><a href="./global-geo.html">品牌出海与全球 AI 可发现性</a></li>
                <li><a href="mailto:hello@asklume.com">hello@asklume.com</a></li>
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

        <nav aria-label="页脚导航" className={styles.visuallyHidden}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            © 2026 问答光源｜AskLume。粤ICP备2024001234号
          </div>

          <div className={styles.legalLinks}>
            <a href="./terms.html">服务条款</a>
            <span className={styles.dot}>/</span>
            <a href="./privacy.html">隐私政策</a>
            <span className={styles.dot}>/</span>
            <a href="./privacy.html#cookies">Cookie 设置</a>
            <span className={styles.dot}>/</span>
            <a href="./contact.html#media">媒体联系</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
