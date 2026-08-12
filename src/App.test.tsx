import { render, screen, within } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the AI brand visibility headline', () => {
    render(<App />)

    const main = screen.getByRole('main')

    expect(
      within(main).getByRole('heading', { level: 1, name: /让品牌被AI/ }),
    ).toBeInTheDocument()
  })

  it('renders the navigation targets for pillars and capabilities', () => {
    const { container } = render(<App />)

    expect(container.querySelector('#pillars')).toBeInTheDocument()
    expect(container.querySelector('#capabilities')).toBeInTheDocument()
  })

  it('uses unique heading associations for all pillar and capability cards', () => {
    const { container } = render(<App />)
    const articles = Array.from(
      container.querySelectorAll<HTMLElement>(
        '#pillars article, #capabilities article',
      ),
    )

    expect(articles).toHaveLength(7)

    const headingIds = articles.map((article) => {
      const headingId = article.getAttribute('aria-labelledby')

      expect(headingId).toBeTruthy()
      expect(article.querySelector('h3')).toHaveAttribute('id', headingId)

      return headingId
    })

    expect(new Set(headingIds).size).toBe(articles.length)
  })

  it('reuses the dashboard in a distinct mobile overview with unique prompt IDs', () => {
    render(<App />)

    const mobileOverview = screen.getByRole('region', {
      name: 'AI认知概览',
    })
    const prompts = screen.getAllByRole('textbox', { name: '向AskLume提问' })

    expect(
      within(mobileOverview).getByRole('region', {
        name: 'AskLume AI品牌影响力看板',
      }),
    ).toBeInTheDocument()
    expect(prompts).toHaveLength(2)
    expect(new Set(prompts.map((prompt) => prompt.id)).size).toBe(2)
  })
})
