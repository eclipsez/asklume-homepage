import asklumeMarkSvg from '../assets/brand/asklume-mark.svg'
import styles from './primitives.module.css'

export interface BrandProps {
  className?: string
  compact?: boolean
}

export function Brand({ className, compact = false }: BrandProps) {
  const rootClassName = [
    styles.brand,
    compact ? styles.brandCompact : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={rootClassName}>
      <img
        alt="问答光源｜AskLume"
        className={styles.brandMark}
        src={asklumeMarkSvg}
      />

      <span className={styles.brandCopy}>
        <span className={styles.brandName}>问答光源 | AskLume</span>
        {!compact ? <span className={styles.brandSubtitle}>企业AI认知与影响力基础设施</span> : null}
      </span>
    </span>
  )
}
