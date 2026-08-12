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
})
