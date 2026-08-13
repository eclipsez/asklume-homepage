import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GlobalGeoPage } from './GlobalGeoPage'

describe('GlobalGeoPage', () => {
  it('explains the global evidence route and service boundary', () => {
    render(<GlobalGeoPage />)

    expect(screen.getByRole('heading', { name: '海外市场不是中文内容的翻译版' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '企业出海常见的四个 AI 认知断点' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '从目标市场问题集开始，而不是从翻译开始' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '单市场可增强，多市场需定制' })).toBeInTheDocument()
  })

  it('keeps overseas GEO inside the active solutions category', () => {
    render(<GlobalGeoPage />)
    expect(screen.getAllByRole('link', { name: '解决方案' })[0]).toHaveAttribute('aria-current', 'page')
  })
})
