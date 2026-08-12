import type { SVGProps } from 'react'
import styles from './primitives.module.css'

export type IconName =
  | 'target'
  | 'brain'
  | 'diamond'
  | 'search'
  | 'star'
  | 'shield'
  | 'cube'
  | 'spark'
  | 'arrow'
  | 'menu'
  | 'close'
  | 'globe'
  | 'user'

export interface IconProps
  extends Omit<
    SVGProps<SVGSVGElement>,
    'children' | 'height' | 'name' | 'role' | 'width' | 'aria-hidden' | 'aria-label'
  > {
  name: IconName
  size?: number | string
  label?: string
}

const iconPaths: Record<IconName, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="12" cy="12" r="0.85" fill="currentColor" stroke="none" />
      <path d="m15.2 8.8 4.35-4.35M16.1 4.45h3.45V7.9" />
    </>
  ),
  brain: (
    <>
      <path d="M9.3 5.1a3.25 3.25 0 0 0-5.07 3.73A3.75 3.75 0 0 0 5 15.92a3.2 3.2 0 0 0 4.3 2.98V5.1Z" />
      <path d="M14.7 5.1a3.25 3.25 0 0 1 5.07 3.73 3.75 3.75 0 0 1-.77 7.09 3.2 3.2 0 0 1-4.3 2.98V5.1Z" />
      <path d="M9.3 8.4c-1.65 0-2.45.86-2.45 2.12m7.85-2.12c1.65 0 2.45.86 2.45 2.12M9.3 14.65c-1.6 0-2.3.85-2.3 1.9m7.7-1.9c1.6 0 2.3.85 2.3 1.9" />
    </>
  ),
  diamond: (
    <>
      <path d="m4 9 3.25-4.2h9.5L20 9l-8 10.2L4 9Z" />
      <path d="M4.4 9h15.2M7.25 4.8 9.4 9 12 19.2 14.6 9l2.15-4.2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.25" />
      <path d="m15.25 15.25 4.5 4.5" />
    </>
  ),
  star: <path d="m12 3 2.37 5.3L20 9l-4.15 3.88L17 18.5l-5-2.85-5 2.85 1.15-5.62L4 9l5.63-.7L12 3Z" />,
  shield: (
    <>
      <path d="M12 3.2c2.2 1.72 4.55 2.47 7 2.65v5.3c0 4.42-2.75 7.62-7 9.65-4.25-2.03-7-5.23-7-9.65v-5.3c2.45-.18 4.8-.93 7-2.65Z" />
      <path d="m8.8 11.9 2.1 2.1 4.45-4.45" />
    </>
  ),
  cube: (
    <>
      <path d="m12 2.9 8 4.55v9.1l-8 4.55-8-4.55v-9.1L12 2.9Z" />
      <path d="m4.35 7.65 7.65 4.4 7.65-4.4M12 12.05v8.65" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2.75c.65 4.28 2.97 6.6 7.25 7.25-4.28.65-6.6 2.97-7.25 7.25C11.35 12.97 9.03 10.65 4.75 10 9.03 9.35 11.35 7.03 12 2.75Z" />
      <path d="M18.35 15.1c.27 1.78 1.22 2.73 3 3-1.78.27-2.73 1.22-3 3-.27-1.78-1.22-2.73-3-3 1.78-.27 2.73-1.22 3-3Z" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m5.5 5.5 13 13m0-13-13 13" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.75 12h16.5M12 3.5c2.17 2.35 3.25 5.18 3.25 8.5S14.17 18.15 12 20.5C9.83 18.15 8.75 15.32 8.75 12S9.83 5.85 12 3.5Z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.25 20c.35-4.05 2.6-6.08 6.75-6.08S18.4 15.95 18.75 20" />
    </>
  ),
}

export function Icon({
  name,
  size = 24,
  label,
  className,
  ...props
}: IconProps) {
  const rootClassName = [styles.icon, className ?? ''].filter(Boolean).join(' ')

  return (
    <svg
      {...props}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={rootClassName}
      fill="none"
      focusable="false"
      height={size}
      role={label ? 'img' : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width={size}
    >
      {iconPaths[name]}
    </svg>
  )
}
