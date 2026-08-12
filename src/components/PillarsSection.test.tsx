import { render, screen, within } from '@testing-library/react'
import { pillars } from '../content/homeContent'
import { PillarsSection } from './PillarsSection'

describe('PillarsSection', () => {
  it('renders the three pillar headings in the intended decision sequence', () => {
    render(<PillarsSection />)

    expect(
      screen
        .getAllByRole('heading', { level: 3 })
        .map((heading) => heading.textContent),
    ).toEqual(['被看见', '被理解', '被选择'])
    expect(pillars.map(({ title }) => title)).toEqual([
      '被看见',
      '被理解',
      '被选择',
    ])
  })

  it('presents the approved section message and four facts per pillar', () => {
    render(<PillarsSection />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: '三大信息支柱 · 构建AI认知基线',
      }),
    ).toBeVisible()
    expect(
      screen.getByText(
        '从事实到认知，从可见到可选，系统化提升企业在AI时代的影响力。',
      ),
    ).toBeVisible()

    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
    articles.forEach((article, index) => {
      expect(
        within(article).getAllByRole('listitem').map((item) => item.textContent),
      ).toEqual(pillars[index].lines)
    })
  })

  it('keeps the closing title phrase together for narrow layouts', () => {
    render(<PillarsSection />)

    expect(screen.getByText('构建AI认知基线')).toBeVisible()
  })

  it('labels every pillar article with its contained heading', () => {
    render(<PillarsSection />)

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
})
