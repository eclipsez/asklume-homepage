import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GeoAipPage } from './GeoAipPage'

describe('GeoAipPage', () => {
  it('shows the complete method and its delivery boundaries', () => {
    render(<GeoAipPage />)

    expect(screen.getByRole('heading', { name: '让建设有依据，让结果能复核' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '建立基线' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '整理证据' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '建设资产' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '复测验收' })).toBeInTheDocument()
    expect(screen.getByText(/不承诺操控第三方模型/)).toBeInTheDocument()
  })

  it('maps the method to standard services and custom scope', () => {
    render(<GeoAipPage />)

    expect(screen.getByText('39,800')).toBeInTheDocument()
    expect(screen.getByText('69,800')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '企业定制' })).toBeInTheDocument()
  })
})
