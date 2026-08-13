import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ServicesPage } from './ServicesPage'

describe('ServicesPage', () => {
  it('presents the two standard services and separates extensions', () => {
    render(<ServicesPage />)

    expect(screen.getByRole('heading', { name: 'AI认知基础建设' })).toBeInTheDocument()
    expect(screen.getByText('39,800', { selector: 'p' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'AI认知增长建设' })).toBeInTheDocument()
    expect(screen.getByText('69,800', { selector: 'p' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '企业定制' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '持续监测与迭代' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '出海不是翻译，是目标市场的证据重建' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '了解海外 GEO 解决方案' })).toHaveAttribute('href', './global-geo.html')
  })

  it('marks products and services as the active navigation item', () => {
    render(<ServicesPage />)

    expect(screen.getAllByRole('link', { name: '产品与服务' })[0]).toHaveAttribute('aria-current', 'page')
  })
})
