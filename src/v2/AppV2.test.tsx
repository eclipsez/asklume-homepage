import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AppV2 from './AppV2'

describe('AskLume AppV2 Ultra Edition', () => {
  it('renders the primary heading and key sections', () => {
    render(<AppV2 />)
    expect(screen.getByRole('heading', { level: 1, name: /让品牌被AI/ })).toBeInTheDocument()
    expect(screen.getByText('为什么选择问答光源')).toBeInTheDocument()
    expect(screen.getByText('从数据到决策的完整能力体系')).toBeInTheDocument()
  })
})
