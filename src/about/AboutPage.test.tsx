import { render, screen } from '@testing-library/react'
import { AboutPage } from './AboutPage'

describe('AboutPage', () => {
  it('presents the brand mission, method, and commitment boundaries', () => {
    render(<AboutPage />)

    expect(
      screen.getByRole('heading', { name: '让真实能力进入 AI 答案' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '企业 AI 认知与影响力基础设施' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '我们做什么' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '我们不做什么' })).toBeInTheDocument()
    expect(screen.getByText('不保证固定排名或推荐率')).toBeInTheDocument()
  })

  it('uses the shared navigation and marks About as the current page', () => {
    render(<AboutPage />)

    const currentLinks = screen.getAllByRole('link', { name: '关于我们' })
    expect(currentLinks.some((link) => link.getAttribute('aria-current') === 'page')).toBe(true)
    expect(screen.getAllByRole('link', { name: '资源中心' })[0]).toHaveAttribute(
      'href',
      './resources.html',
    )
  })
})
