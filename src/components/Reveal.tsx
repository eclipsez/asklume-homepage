import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type MotionDivProps = ComponentProps<typeof motion.div>

type RevealProps = Omit<
  MotionDivProps,
  'children' | 'initial' | 'transition' | 'viewport' | 'whileInView'
> & {
  children: ReactNode
  delay?: number
}

export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const canObserveViewport = typeof IntersectionObserver !== 'undefined'
  const shouldAnimate = !shouldReduceMotion && canObserveViewport

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
      transition={
        shouldAnimate
          ? { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }
          : undefined
      }
      viewport={shouldAnimate ? { once: true, amount: 0.2 } : undefined}
      whileInView={
        shouldAnimate ? { opacity: 1, y: 0 } : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}
