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
})
