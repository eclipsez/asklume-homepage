import { useCallback, useEffect, useRef, useState } from 'react'
import { navItems } from '../content/homeContent'
import { Brand } from './Brand'
import { Icon } from './Icon'
import { MobileMenu } from './MobileMenu'
import styles from './Header.module.css'

const mobileMenuId = 'mobile-site-navigation'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const wasMenuOpen = useRef(false)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    if (wasMenuOpen.current && !isMenuOpen) {
      menuButtonRef.current?.focus()
    }

    wasMenuOpen.current = isMenuOpen
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a aria-label="AskLume 首页" className={styles.brandLink} href="#top">
          <Brand />
        </a>

        <nav aria-label="主导航" className={styles.desktopNav}>
          {navItems.map((item, index) => (
            <a
              aria-current={index === 0 ? 'page' : undefined}
              className={index === 0 ? styles.activeNavLink : styles.navLink}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.utilities}>
          <button aria-label="搜索" className={styles.iconButton} type="button">
            <Icon name="search" size={19} />
          </button>
          <button className={styles.languageButton} type="button">
            中文
          </button>
          <a className={styles.diagnosticLink} href="#diagnostic">
            AI认知基线诊断
          </a>
        </div>

        <button
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
          aria-label="打开菜单"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(true)}
          ref={menuButtonRef}
          type="button"
        >
          <Icon name="menu" size={23} />
        </button>
      </div>

      {isMenuOpen ? <MobileMenu id={mobileMenuId} onClose={closeMenu} /> : null}
    </header>
  )
}
