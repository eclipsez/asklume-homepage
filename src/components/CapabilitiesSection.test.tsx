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
})
