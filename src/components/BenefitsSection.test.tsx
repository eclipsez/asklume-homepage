import { render, screen, within } from '@testing-library/react'
import { benefits } from '../content/homeContent'
import { BenefitsSection } from './BenefitsSection'

describe('BenefitsSection', () => {
  it('renders exactly three configured benefit articles beneath the section heading', () => {
    const { container } = render(<BenefitsSection />)
    const section = container.querySelector<HTMLElement>('#insights')

    expect(section).toBeInTheDocument()
    expect(
      within(section as HTMLElement).getByRole('heading', {
        level: 2,
        name: '为什么选择问答光源',
      }),
    ).toBeVisible()

    const articles = within(section as HTMLElement).getAllByRole('article')
    expect(articles).toHaveLength(3)
    expect(
      articles.map(
        (article) =>
          within(article).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(benefits.map(({ title }) => title))
    expect(benefits.map(({ title }) => title)).toEqual([
      '更高的AI可见性',
      '更准确的AI理解',
      '更强的品牌选择力',
    ])
  })

  it('uses labelled glass-art cards while preserving every configured action', () => {
    render(<BenefitsSection />)
    const articles = screen.getAllByRole('article')

    expect(articles.map((article) => article.dataset.glassArt)).toEqual([
      'loop',
      'bloom',
      'ribbon',
    ])
    expect(articles.every((article) => article.querySelector('svg') === null)).toBe(true)

    const headingIds = articles.map((article, index) => {
      const heading = within(article).getByRole('heading', {
        level: 3,
        name: benefits[index].title,
      })
      const headingId = article.getAttribute('aria-labelledby')

      expect(headingId).toBeTruthy()
      expect(heading).toHaveAttribute('id', headingId)
      expect(within(article).getByText(benefits[index].description)).toBeVisible()
      expect(within(article).getByRole('link', { name: /了解更多/ })).toHaveAttribute(
        'href',
        benefits[index].href,
      )

      return headingId
    })

    expect(new Set(headingIds).size).toBe(3)
  })
})
