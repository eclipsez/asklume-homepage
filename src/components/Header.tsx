import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getDiagnosticHref,
  getSiteNavItems,
  siteContact,
  type SiteNavLabel,
  type SitePage,
} from '../content/siteContent'
import { Brand } from './Brand'
import { Icon } from './Icon'
import { MobileMenu } from './MobileMenu'
import styles from './Header.module.css'

const mobileMenuId = 'mobile-site-navigation'

interface HeaderProps {
  activeLabel?: SiteNavLabel
  page?: SitePage
}

export function Header({ activeLabel, page = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const wasMenuOpen = useRef(false)
  const navigationItems = getSiteNavItems(page)
  const diagnosticHref = getDiagnosticHref(page)
  const homeHref = page === 'home' ? '#top' : './index.html#top'

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  useEffect(() => {
    if (wasMenuOpen.current && !isMenuOpen) menuButtonRef.current?.focus()
    wasMenuOpen.current = isMenuOpen
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return

    const desktopQuery = window.matchMedia('(min-width: 769px)')
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu()
    }

    desktopQuery.addEventListener('change', handleDesktopChange)
    return () => desktopQuery.removeEventListener('change', handleDesktopChange)
  }, [closeMenu])

  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <a
          aria-label="AskLume 首页"
          className={styles.desktopBrandLink}
          data-header-brand="desktop"
          href={homeHref}
        >
          <Brand />
        </a>
        <a
          aria-label="AskLume 首页"
          className={styles.mobileBrandLink}
          data-header-brand="mobile"
          href={homeHref}
        >
          <Brand compact />
        </a>

        <nav aria-label="主导航" className={styles.navMenu}>
          {navigationItems.map((item) => (
            <a
              aria-current={item.label === activeLabel ? 'page' : undefined}
              className={item.label === activeLabel ? styles.activeNavLink : styles.navLink}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.ctaPill} href={diagnosticHref}>
          免费需求评估
        </a>

        <button
          aria-controls={mobileMenuId}
          aria-expanded={isMenuOpen}
          aria-label="打开菜单"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(true)}
          ref={menuButtonRef}
          type="button"
        >
          <Icon name="menu" size={22} />
        </button>
      </div>

      {isMenuOpen ? (
        <MobileMenu
          activeLabel={activeLabel}
          contact={siteContact}
          diagnosticHref={diagnosticHref}
          homeHref={homeHref}
          id={mobileMenuId}
          items={navigationItems}
          onClose={closeMenu}
        />
      ) : null}
    </header>
  )
}
