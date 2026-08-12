import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PointerGlowCard } from './PointerGlowCard'

describe('PointerGlowCard', () => {
  it('exposes pointer coordinates as local CSS variables', () => {
    render(<PointerGlowCard aria-label="高级卡片">内容</PointerGlowCard>)
    const card = screen.getByLabelText('高级卡片')
    Object.defineProperty(card, 'getBoundingClientRect', {
      value: () => ({ left: 10, top: 20, width: 200, height: 100 }),
    })

    fireEvent(
      card,
      new MouseEvent('pointermove', {
        bubbles: true,
        clientX: 160,
        clientY: 45,
      }),
    )

    expect(card).toHaveStyle({ '--pointer-x': '75%', '--pointer-y': '25%' })
  })

  it('returns its glow to the center when the pointer leaves', () => {
    render(<PointerGlowCard aria-label="高级卡片">内容</PointerGlowCard>)
    const card = screen.getByLabelText('高级卡片')

    fireEvent.pointerLeave(card)

    expect(card).toHaveStyle({ '--pointer-x': '50%', '--pointer-y': '50%' })
  })
})
