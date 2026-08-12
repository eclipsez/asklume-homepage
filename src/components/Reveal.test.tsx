import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { render, screen } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import { Reveal } from './Reveal'

const motionPreference = vi.hoisted(() => ({ reduced: true }))

vi.mock('motion/react', () => ({
  motion: {
    div: ({
      children,
      initial,
      transition,
      viewport,
      whileInView,
      ...props
    }: ComponentPropsWithoutRef<'div'> & {
      children?: ReactNode
      initial?: false | Record<string, number>
      transition?: unknown
      viewport?: unknown
      whileInView?: unknown
    }) => (
      <div
        data-initial={initial === false ? 'false' : JSON.stringify(initial)}
        data-transition={JSON.stringify(transition)}
        data-viewport={JSON.stringify(viewport)}
        data-while-in-view={JSON.stringify(whileInView)}
        style={initial && typeof initial === 'object' ? initial : undefined}
        {...props}
      >
        {children}
      </div>
    ),
  },
  useReducedMotion: () => motionPreference.reduced,
}))

describe('Reveal', () => {
  afterEach(() => {
    motionPreference.reduced = true
    vi.unstubAllGlobals()
  })

  it('does not hide content when reduced motion is requested', () => {
    render(
      <Reveal data-testid="reveal">
        <p>Always readable</p>
      </Reveal>,
    )

    const wrapper = screen.getByTestId('reveal')

    expect(wrapper).toHaveAttribute('data-initial', 'false')
    expect(wrapper).not.toHaveStyle({ opacity: 0 })
    expect(screen.getByText('Always readable')).toBeVisible()
  })

  it('uses a restrained one-time viewport reveal by default', () => {
    motionPreference.reduced = false
    vi.stubGlobal('IntersectionObserver', class IntersectionObserver {})

    render(
      <Reveal data-testid="reveal" delay={0.12}>
        <p>Reveal on entry</p>
      </Reveal>,
    )

    const wrapper = screen.getByTestId('reveal')

    expect(wrapper).toHaveAttribute(
      'data-initial',
      JSON.stringify({ opacity: 0, y: 18 }),
    )
    expect(wrapper).toHaveAttribute(
      'data-while-in-view',
      JSON.stringify({ opacity: 1, y: 0 }),
    )
    expect(wrapper).toHaveAttribute(
      'data-viewport',
      JSON.stringify({ once: true, amount: 0.2 }),
    )
    expect(wrapper).toHaveAttribute(
      'data-transition',
      JSON.stringify({
        duration: 0.58,
        delay: 0.12,
        ease: [0.22, 1, 0.36, 1],
      }),
    )
  })
})
