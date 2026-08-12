import { useId } from 'react'
import styles from './primitives.module.css'

export interface BrandProps {
  className?: string
  compact?: boolean
}

export function Brand({ className, compact = false }: BrandProps) {
  const instanceId = useId().replace(/:/g, '')
  const gradientId = `brand-spectrum-${instanceId}`
  const glowId = `brand-glow-${instanceId}`
  const rootClassName = [
    styles.brand,
    compact ? styles.brandCompact : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={rootClassName}>
      <svg
        aria-hidden="true"
        className={styles.brandMark}
        viewBox="0 0 48 48"
      >
        <defs>
          <linearGradient id={gradientId} x1="7" y1="5" x2="42" y2="43">
            <stop offset="0" stopColor="#566fff" />
            <stop offset="0.46" stopColor="#7657f7" />
            <stop offset="0.76" stopColor="#df5fd1" />
            <stop offset="1" stopColor="#ff7d8d" />
          </linearGradient>
          <radialGradient id={glowId} cx="50%" cy="45%" r="58%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.36" />
          </radialGradient>
        </defs>

        <path
          d="M24 3.75c6.2 0 11.67 2.74 15.37 7.07 2.14 2.51 3.54 5.76 3.33 9.06-.25 3.83-2.62 6.25-5.89 7.77-2.51 1.17-4.5 2.24-5.65 4.86-1.44 3.27-3.57 7.66-7.63 8.63-3.25.78-6.44-.83-8.77-3.01C10.73 34.36 6.1 30.1 5.28 24.27 3.82 13.86 12.69 3.75 24 3.75Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M9.06 19.05c3.8-6.83 11.46-10.64 19.06-8.82 5.39 1.29 9.28 5.34 10.72 10.19"
          fill="none"
          stroke="rgba(255,255,255,.72)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          d="M12.08 29.9c3.79 2.3 8.14 2.5 11.46.55 3.89-2.28 5.05-6.82 8.88-8.86 2.13-1.13 4.22-1.19 6.13-.66"
          fill="none"
          stroke="rgba(255,255,255,.7)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          d="M17.21 14.02c-1.82 4.22-1.33 8.52 1.56 11.45 2.44 2.47 6.52 3.24 8.23 6.14 1.04 1.77 1.01 3.97.44 6.16"
          fill="none"
          stroke="rgba(255,255,255,.62)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <circle cx="17.2" cy="14.05" r="2.45" fill={`url(#${glowId})`} />
        <circle cx="38.55" cy="20.93" r="2.18" fill={`url(#${glowId})`} />
        <circle cx="27.43" cy="37.72" r="1.9" fill={`url(#${glowId})`} />
        <circle cx="24.12" cy="27.58" r="3.35" fill="#fff" fillOpacity="0.94" />
        <circle cx="24.12" cy="27.58" r="6.4" fill="none" stroke="#fff" strokeOpacity="0.28" />
      </svg>

      <span className={styles.brandCopy}>
        <span className={styles.brandName}>问答光源 | AskLume</span>
        <span className={styles.brandSubtitle}>企业AI认知与影响力基础设施</span>
      </span>
    </span>
  )
}
