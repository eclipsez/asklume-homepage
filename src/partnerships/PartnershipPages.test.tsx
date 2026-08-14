import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MediaPage } from './MediaPage'
import { PartnersPage } from './PartnersPage'
import { PublicSectorPage } from './PublicSectorPage'

describe('partnership pages', () => {
  it('presents partner models and keeps commercial terms conditional', () => {
    render(<PartnersPage />)

    expect(screen.getByRole('heading', { name: '把 GEO 能力接入你的客户服务体系' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '联合交付之前，先把边界写清楚' })).toBeInTheDocument()
    expect(screen.getByText(/不承诺区域独家、固定返佣或白标交付/)).toBeInTheDocument()
  })

  it('separates quotable, conditional and unavailable media material', () => {
    render(<MediaPage />)

    expect(screen.getByRole('heading', { name: '让可核验的 GEO 研究进入公共讨论' })).toBeInTheDocument()
    expect(screen.getByText('可引用')).toBeInTheDocument()
    expect(screen.getByText('需确认')).toBeInTheDocument()
    expect(screen.getByText('不提供')).toBeInTheDocument()
  })

  it('states the public-sector authorization and result boundaries', () => {
    render(<PublicSectorPage />)

    expect(screen.getByRole('heading', { name: '为区域产业建立可核验的 AI 信息基础' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '公开、授权和安全边界优先于传播速度' })).toBeInTheDocument()
    expect(screen.getByText('不承诺固定排名、引用、推荐或模型输出。')).toBeInTheDocument()
  })
})
