import { render, screen, within } from '@testing-library/react'
import App from '../App'
import { benefits, trustBrands } from '../content/homeContent'

describe('TrustStrip and BenefitsSection', () => {
  it('renders the trust statement and all configured brands', () => {
    render(<App />)

    expect(
      screen.getByText('值得信赖的选择 · 为全球领先企业提供AI认知基线设施'),
    ).toBeVisible()

    for (const brand of trustBrands) {
      expect(screen.getByText(brand)).toBeVisible()
    }
  })

  it('renders exactly three configured benefit articles beneath the section heading', () => {
    const { container } = render(<App />)
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
