import { render, screen, within } from '@testing-library/react'
import { capabilities } from '../content/homeContent'
import { CapabilitiesSection } from './CapabilitiesSection'

describe('CapabilitiesSection', () => {
  it('renders the four configured capabilities with their descriptions', () => {
    render(<CapabilitiesSection />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: '从数据到决策的完整能力体系',
      }),
    ).toBeVisible()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
    expect(
      articles.map(
        (article) =>
          within(article).getByRole('heading', { level: 3 }).textContent,
      ),
    ).toEqual(capabilities.map(({ title }) => title))

    articles.forEach((article, index) => {
      expect(
        within(article).getByText(capabilities[index].description),
      ).toBeVisible()
    })
  })

  it('labels every capability article with its contained heading', () => {
    render(<CapabilitiesSection />)

    const articles = screen.getAllByRole('article')
    const headingIds = articles.map((article) => {
      const headingId = article.getAttribute('aria-labelledby')

      expect(headingId).toBeTruthy()
      expect(
        within(article).getByRole('heading', { level: 3 }),
      ).toHaveAttribute('id', headingId)

      return headingId
    })

    expect(new Set(headingIds).size).toBe(articles.length)
  })

  it('uses configured artwork and marks the first three cards as sequential', () => {
    render(<CapabilitiesSection />)

    const articles = screen.getAllByRole('article')

    articles.forEach((article, index) => {
      expect(article.querySelector('[data-art]')).toHaveAttribute(
        'data-art',
        capabilities[index].art,
      )
    })
    expect(articles.map((article) => article.getAttribute('data-flow'))).toEqual([
      'next',
      'next',
      'next',
      null,
    ])
  })
})
