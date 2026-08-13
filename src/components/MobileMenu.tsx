import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { SiteNavItem, SiteNavLabel } from '../content/siteContent'
import { Brand } from './Brand'
import { Icon } from './Icon'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  onClose: () => void
  items: readonly SiteNavItem[]
  activeLabel?: SiteNavLabel
  homeHref: string
  diagnosticHref: string
  contact: {
    phone?: string
    email: string
  }
}

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function MobileMenu({
  id,
  onClose,
  items,
  activeLabel,
  homeHref,
  diagnosticHref,
  contact,
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const controls = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      )

      if (controls.length === 0) {
        event.preventDefault()
        dialogRef.current?.focus()
        return
      }

      const firstControl = controls[0]
      const lastControl = controls[controls.length - 1]

      if (!dialogRef.current?.contains(document.activeElement)) {
        event.preventDefault()
        firstControl.focus()
        return
      }

      if (event.shiftKey && document.activeElement === firstControl) {
        event.preventDefault()
        lastControl.focus()
      } else if (!event.shiftKey && document.activeElement === lastControl) {
        event.preventDefault()
        firstControl.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div
      aria-label="网站导航"
      aria-modal="true"
      className={styles.overlay}
      id={id}
      ref={dialogRef}
      role="dialog"
      tabIndex={-1}
    >
      <div className={styles.shell}>
        <div className={styles.topbar}>
          <button
            aria-label="关闭菜单"
            className={styles.closeButton}
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <Icon name="close" size={22} />
          </button>
          <a aria-label="AskLume 首页" href={homeHref} onClick={onClose}>
            <Brand compact />
          </a>
        </div>

        <nav aria-label="移动端主导航" className={styles.navigation}>
          {items.map((item) => (
            <a
              aria-current={item.label === activeLabel ? 'page' : undefined}
              className={item.label === activeLabel ? styles.activeLink : styles.navLink}
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              <span>{item.label}</span>
              <Icon name="arrow" size={18} />
            </a>
          ))}
        </nav>

        <a className={styles.diagnosticLink} href={diagnosticHref} onClick={onClose}>
          免费需求评估
          <Icon name="arrow" size={18} />
        </a>

        <a
          className={styles.appointmentCard}
          href={`mailto:${contact.email}`}
          onClick={onClose}
        >
          <span className={styles.cardEyebrow}>预约演示</span>
          <strong>与我们的专家团队交流</strong>
          <span className={styles.cardAction}>
            预约演示
            <Icon name="arrow" size={18} />
          </span>
        </a>

        <div className={styles.contactGrid}>
          {contact.phone ? (
            <div>
              <span className={styles.contactLabel}>电话咨询</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
          ) : null}
          <div>
            <span className={styles.contactLabel}>邮箱联系</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
