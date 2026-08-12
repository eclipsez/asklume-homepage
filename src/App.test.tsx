import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('does not render the removed customer case strip', () => {
    render(<App />)

    expect(
      screen.queryByRole('region', { name: '客户信赖' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('值得信赖的选择 · 为全球领先企业提供AI认知基线设施'),
    ).not.toBeInTheDocument()
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

  it('gives every same-document link an existing anchor target', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: '打开菜单' }))

    const sameDocumentLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
    )

    expect(sameDocumentLinks.length).toBeGreaterThan(0)

    for (const link of sameDocumentLinks) {
      const href = link.getAttribute('href')

      expect(href).toBeTruthy()
      expect(document.querySelector(href as string)).toBeInTheDocument()
    }
  })
})
