import { trustBrands } from '../content/homeContent'
import styles from './TrustStrip.module.css'

const markPaths = [
  <>
    <path d="M4 15C7 4 17 4 20 15" />
    <path d="M6.5 15C9 8 15 8 17.5 15" />
    <path d="M9 15c1.6-3 4.4-3 6 0" />
  </>,
  <>
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="16" cy="8" r="3.5" />
    <path d="M4.5 8v8.5L12 12l7.5 4.5V8" />
  </>,
  <>
    <path d="M4 13.5C6.5 6 11 4.5 17 5.5" />
    <path d="M4 13.5c5.5 3 11 1.5 16-3.5" />
    <path d="m17 5.5-3 3.8 6 .7" />
  </>,
  <>
    <path d="M4 8.5h4v7H4zM10 5h4v10.5h-4zM16 7h4v8.5h-4z" />
    <path d="M2.8 13.2h18.4" />
  </>,
  <>
    <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
    <path d="M8 15.5V8.8l4 4 4-4v6.7" />
  </>,
  <>
    <circle cx="12" cy="12" r="8" />
    <path d="M8 14.5c1.4 2.4 6.6 2.4 8 0M8.2 9.2h.1m7.4 0h.1" />
    <path d="m12 3.2 1.2 3.2" />
  </>,
  <>
    <path d="M19 8.5a8 8 0 1 0 0 7" />
    <path d="M19 8.5h-6v7h6v-3h-3" />
  </>,
] as const

export function TrustStrip() {
  return (
    <section aria-label="客户信赖" className={styles.trustStrip}>
      <div className={styles.inner}>
        <p className={styles.message}>
          值得信赖的选择 · 为全球领先企业提供AI认知基线设施
        </p>
        <ul className={styles.brands}>
          {trustBrands.map((brand, index) => (
            <li className={styles.brand} key={brand}>
              <svg
                aria-hidden="true"
                className={styles.mark}
                fill="none"
                viewBox="0 0 24 24"
              >
                {markPaths[index]}
              </svg>
              <span>{brand}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
