import { useId } from 'react'
import { footerContact } from '../content/homeContent'
import styles from './DiagnosticCTA.module.css'

const diagnosticEmailHref = `mailto:${footerContact.email}?subject=${encodeURIComponent('AI认知基线诊断')}`
const expertEmailHref = `mailto:${footerContact.email}`

export function DiagnosticCTA() {
  const svgId = useId().replace(/:/g, '')
  const orbId = `diagnostic-orb-${svgId}`
  const shineId = `diagnostic-shine-${svgId}`
  const waveId = `diagnostic-wave-${svgId}`

  return (
    <section
      aria-labelledby="diagnostic-title"
      className={styles.section}
      id="diagnostic"
    >
      <div className={styles.inner}>
        <div className={styles.banner}>
          <div className={styles.copy}>
            <h2 id="diagnostic-title">开启您的AI认知基线诊断</h2>
            <p>了解企业在AI中的真实表现，发现机会，制定提升策略。</p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href={diagnosticEmailHref}>
                立即开始诊断 <span aria-hidden="true">→</span>
              </a>
              <a
                className={styles.secondaryAction}
                href={expertEmailHref}
              >
                与专家咨询 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <svg
            aria-hidden="true"
            className={styles.art}
            focusable="false"
            viewBox="0 0 520 250"
          >
            <defs>
              <radialGradient id={orbId} cx="35%" cy="27%" r="74%">
                <stop offset="0" stopColor="#fff" />
                <stop offset="0.13" stopColor="#d9c7ff" />
                <stop offset="0.38" stopColor="#925fff" />
                <stop offset="0.7" stopColor="#3150c8" />
                <stop offset="1" stopColor="#142263" />
              </radialGradient>
              <linearGradient id={shineId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.78" />
                <stop offset="0.45" stopColor="#b8d2ff" stopOpacity="0.14" />
                <stop offset="1" stopColor="#ef8cff" stopOpacity="0.44" />
              </linearGradient>
              <linearGradient id={waveId} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#bcc9ff" stopOpacity="0" />
                <stop offset="0.46" stopColor="#e7e9ff" stopOpacity="0.56" />
                <stop offset="1" stopColor="#ffd3f1" stopOpacity="0.7" />
              </linearGradient>
              <filter id={`diagnostic-shadow-${svgId}`} x="-45%" y="-45%" width="190%" height="210%">
                <feGaussianBlur stdDeviation="12" />
              </filter>
            </defs>

            <path
              d="M0 204c60-34 105-35 166-15 63 21 106 14 156-19 69-46 122-37 198 19v61H0Z"
              fill={`url(#${waveId})`}
            />
            <path
              d="M0 225c70-22 131-18 193 1 76 23 143 20 203-7 47-21 83-18 124 4v27H0Z"
              fill="#f7f3ff"
              fillOpacity="0.34"
            />
            <ellipse
              cx="353"
              cy="211"
              fill="#261a79"
              fillOpacity="0.32"
              filter={`url(#diagnostic-shadow-${svgId})`}
              rx="87"
              ry="18"
            />
            <circle cx="353" cy="127" fill={`url(#${orbId})`} r="79" />
            <path
              d="M300 88c27-40 81-49 113-7-26-18-66-13-88 18-14 19-19 44-13 65-20-18-26-50-12-76Z"
              fill={`url(#${shineId})`}
            />
            <path
              d="M296 142c25 30 70 40 109 19 14-8 24-18 32-31-2 35-26 65-62 74-38 9-77-10-92-45 4-7 8-12 13-17Z"
              fill="#192a88"
              fillOpacity="0.38"
            />
            <ellipse
              cx="331"
              cy="85"
              fill="#fff"
              fillOpacity="0.86"
              rx="17"
              ry="8"
              transform="rotate(-26 331 85)"
            />
            <path
              d="M278 128c19 31 46 50 84 54 37 4 67-8 91-36"
              fill="none"
              stroke="#fff"
              strokeOpacity="0.23"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
