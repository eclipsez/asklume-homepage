import type { ReactNode } from 'react'
import type { SiteNavLabel, SitePage } from '../content/siteContent'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from './SupportPage.module.css'

interface SupportPageFrameProps {
  page: SitePage
  activeLabel?: SiteNavLabel
  eyebrow: string
  title: string
  description: string
  heroImage?: string
  heroAlt?: string
  primaryAction?: { href: string; label: string }
  secondaryAction?: { href: string; label: string }
  children: ReactNode
}

export function SupportPageFrame({
  page,
  activeLabel,
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  primaryAction,
  secondaryAction,
  children,
}: SupportPageFrameProps) {
  return (
    <div className={styles.page} id="top">
      <Header activeLabel={activeLabel} page={page} />
      <main id="main-content">
        <section className={`${styles.hero} ${heroImage ? '' : styles.heroNoImage}`}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{eyebrow}</p>
              <h1>{title}</h1>
              <p className={styles.heroDescription}>{description}</p>
              {primaryAction || secondaryAction ? (
                <div className={styles.actions}>
                  {primaryAction ? <a className={styles.primaryButton} href={primaryAction.href}>{primaryAction.label}</a> : null}
                  {secondaryAction ? <a className={styles.secondaryButton} href={secondaryAction.href}>{secondaryAction.label}</a> : null}
                </div>
              ) : null}
            </div>
            {heroImage ? (
              <figure className={styles.heroVisual}>
                <img alt={heroAlt} decoding="async" fetchPriority="high" src={heroImage} />
              </figure>
            ) : null}
          </div>
        </section>
        {children}
      </main>
      <Footer page={page} />
    </div>
  )
}

export { styles as supportStyles }
