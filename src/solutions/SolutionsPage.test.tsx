import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SolutionsPage } from './SolutionsPage'

describe('SolutionsPage', () => {
  it('organizes solutions by enterprise problem and features global GEO', () => {
    render(<SolutionsPage />)

    expect(screen.getByRole('heading', { name: 'AI可发现性建设' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'AI认知纠偏' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '复杂业务与决策内容建设' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '进入海外 GEO 专题页' })).toHaveAttribute('href', './global-geo.html')
  })

  it('keeps global GEO under the active solutions navigation', () => {
    render(<SolutionsPage />)
    expect(screen.getAllByRole('link', { name: '解决方案' })[0]).toHaveAttribute('aria-current', 'page')
  })
})
