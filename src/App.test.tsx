import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the AI brand visibility headline', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /让品牌被AI/ })).toBeInTheDocument()
  })
})
