import type { ReactNode } from 'react'
import type { SitePage } from '../content/siteContent'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './PartnershipPages.module.css'

interface PartnershipFrameProps {
  page: SitePage
  eyebrow: string
  title: string
  description: string
  heroImage: string
  heroAlt: string
  primaryAction: { href: string; label: string }
  secondaryAction: { href: string; label: string }
  children: ReactNode
}

export function PartnershipFrame({
  page,
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  primaryAction,
  secondaryAction,
  children,
}: PartnershipFrameProps) {
  return (
    <div className={styles.page} id="top">
      <Header page={page} />
      <main id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h1>{title}</h1>
              <p className={styles.heroDescription}>{description}</p>
              <div className={styles.actions}>
                <a className={styles.primaryButton} href={primaryAction.href}>{primaryAction.label}</a>
                <a className={styles.secondaryButton} href={secondaryAction.href}>{secondaryAction.label}</a>
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <img alt={heroAlt} decoding="async" fetchPriority="high" src={heroImage} />
            </figure>
          </div>
        </section>
        {children}
      </main>
      <Footer page={page} />
    </div>
  )
}

interface ClosingCtaProps {
  title: string
  description: string
  href: string
  label: string
}

export function ClosingCta({ title, description, href, label }: ClosingCtaProps) {
  return (
    <section className={styles.closingSection}>
      <div className={styles.inner}>
        <div className={styles.closingCard}>
          <div><h2>{title}</h2><p>{description}</p></div>
          <a className={styles.primaryButton} href={href}>{label}</a>
        </div>
      </div>
    </section>
  )
}

export { styles as partnershipStyles }
