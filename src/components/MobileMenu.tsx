import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { footerContact, navItems } from '../content/homeContent'
import { Brand } from './Brand'
import { Icon } from './Icon'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  id: string
  onClose: () => void
}

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function MobileMenu({ id, onClose }: MobileMenuProps) {
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
        return
      }

      const firstControl = controls[0]
      const lastControl = controls[controls.length - 1]

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
          <a aria-label="AskLume 首页" href="#top" onClick={onClose}>
            <Brand compact />
          </a>
        </div>

        <nav aria-label="移动端主导航" className={styles.navigation}>
          {navItems.map((item, index) => (
            <a
              aria-current={index === 0 ? 'page' : undefined}
              className={index === 0 ? styles.activeLink : styles.navLink}
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              <span>{item.label}</span>
              <Icon name="arrow" size={18} />
            </a>
          ))}
        </nav>

        <a className={styles.diagnosticLink} href="#diagnostic" onClick={onClose}>
          AI认知基线诊断
          <Icon name="arrow" size={18} />
        </a>

        <div className={styles.accountControls}>
          <button className={styles.accountButton} type="button">
            <Icon name="user" size={18} />
            登录
          </button>
          <button className={styles.accountButton} type="button">
            <Icon name="globe" size={18} />
            中文
          </button>
        </div>

        <a className={styles.appointmentCard} href="#contact" onClick={onClose}>
          <span className={styles.cardEyebrow}>预约演示</span>
          <strong>与我们的专家团队交流</strong>
          <span className={styles.cardAction}>
            预约演示
            <Icon name="arrow" size={18} />
          </span>
        </a>

        <div className={styles.contactGrid}>
          <div>
            <span className={styles.contactLabel}>电话咨询</span>
            <a href={`tel:${footerContact.phone}`}>{footerContact.phone}</a>
          </div>
          <div>
            <span className={styles.contactLabel}>邮箱联系</span>
            <a href={`mailto:${footerContact.email}`}>{footerContact.email}</a>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>{footerContact.copyright}</span>
          <span>{footerContact.icp}</span>
        </footer>
      </div>
    </div>,
    document.body,
  )
}
