import { navItems } from '../content/homeContent'
import { Brand } from './Brand'
import styles from './Footer.module.css'

type SocialName = 'LinkedIn' | 'X' | 'YouTube'

const socialChannels = ['LinkedIn', 'X', 'YouTube'] as const satisfies readonly SocialName[]

function SocialIcon({ name }: { name: SocialName }) {
  if (name === 'LinkedIn') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="M6.3 8.4v9.3M6.3 5.75v.1M10.55 17.7v-5.25c0-2.7 4.1-3.18 4.1.22v5.03M10.55 8.4v9.3" />
      </svg>
    )
  }

  if (name === 'X') {
    return (
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
        <path d="m6.2 5.5 11.6 13M17.4 5.5 6.6 18.5" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path d="M19.1 7.65c-.2-.72-.76-1.28-1.48-1.47C16.32 5.83 12 5.83 12 5.83s-4.32 0-5.62.35A2.07 2.07 0 0 0 4.9 7.65c-.35 1.3-.35 4-.35 4s0 2.7.35 4c.2.72.76 1.28 1.48 1.47 1.3.35 5.62.35 5.62.35s4.32 0 5.62-.35c.72-.2 1.28-.75 1.48-1.47.35-1.3.35-4 .35-4s0-2.7-.35-4Z" />
      <path d="m10.4 9.25 4 2.4-4 2.4v-4.8Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <a aria-label="AskLume 首页" className={styles.brandLink} href="#top">
          <Brand />
        </a>

        <nav aria-label="页脚导航" className={styles.navigation}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div aria-label="社交媒体" className={styles.socials} role="group">
          {socialChannels.map((name) => (
            <span
              aria-label={`${name}（暂未开放）`}
              className={styles.socialMark}
              key={name}
              role="img"
              title={`${name}（暂未开放）`}
            >
              <SocialIcon name={name} />
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
