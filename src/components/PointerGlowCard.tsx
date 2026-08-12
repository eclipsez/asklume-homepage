import type {
  ComponentPropsWithoutRef,
  CSSProperties,
  PointerEvent as ReactPointerEvent,
} from 'react'
import styles from './PointerGlowCard.module.css'

type GlowStyle = CSSProperties & {
  '--pointer-x': string
  '--pointer-y': string
  '--depth-x': string
  '--depth-y': string
}

const centeredGlow: GlowStyle = {
  '--pointer-x': '50%',
  '--pointer-y': '50%',
  '--depth-x': '0',
  '--depth-y': '0',
}

const clampPercentage = (value: number) => Math.min(100, Math.max(0, value))

export function PointerGlowCard({
  className,
  onPointerLeave,
  onPointerMove,
  style,
  ...props
}: ComponentPropsWithoutRef<'article'>) {
  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = bounds.width
      ? clampPercentage(((event.clientX - bounds.left) / bounds.width) * 100)
      : 50
    const y = bounds.height
      ? clampPercentage(((event.clientY - bounds.top) / bounds.height) * 100)
      : 50

    event.currentTarget.style.setProperty('--pointer-x', `${x}%`)
    event.currentTarget.style.setProperty('--pointer-y', `${y}%`)
    event.currentTarget.style.setProperty('--depth-x', `${(x - 50) / 50}`)
    event.currentTarget.style.setProperty('--depth-y', `${(y - 50) / 50}`)
    onPointerMove?.(event)
  }

  const handlePointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    for (const [property, value] of Object.entries(centeredGlow)) {
      event.currentTarget.style.setProperty(property, value)
    }
    onPointerLeave?.(event)
  }

  return (
    <article
      {...props}
      className={[styles.card, className].filter(Boolean).join(' ')}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{ ...centeredGlow, ...style } as GlowStyle}
    />
  )
}
