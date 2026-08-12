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
})
