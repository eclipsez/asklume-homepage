import { fireEvent, render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Hero', () => {
  it('presents the core message, primary action, and dashboard metrics', () => {
    render(<App />)
    const hero = screen.getByRole('region', {
      name: '让品牌被AI看见、理解与选择。',
    })

    expect(
      within(hero).getByRole('heading', {
        level: 1,
        name: '让品牌被AI看见、理解与选择。',
      }),
    ).toBeVisible()
    expect(within(hero).getByText('72%')).toBeVisible()
    expect(within(hero).getByText('156')).toBeVisible()
    expect(
      within(hero).getByRole('link', { name: /开始AI认知基线诊断/ }),
    ).toHaveAttribute('href', '#diagnostic')
  })

  it('keeps the hero content visible when its decorative banner cannot load', () => {
    const { container } = render(<App />)
    const banner = container.querySelector<HTMLImageElement>(
      'img[src*="asklume-banner"]',
    )

    expect(banner).toBeInTheDocument()
    fireEvent.error(banner as HTMLImageElement)

    expect(
      container.querySelector('img[src*="asklume-banner"]'),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '让品牌被AI看见、理解与选择。',
      }),
    ).toBeVisible()
  })
})
