import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ResourcesPage } from './ResourcesPage'

describe('ResourcesPage', () => {
  it('filters resources by category and search term', async () => {
    const user = userEvent.setup()
    render(<ResourcesPage />)

    await user.click(screen.getByRole('button', { name: '诊断方法' }))
    expect(screen.getByText('找到 2 份资源')).toBeInTheDocument()

    await user.type(screen.getByRole('searchbox', { name: '搜索资源' }), '业务方向')
    expect(screen.getByText('找到 1 份资源')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '如何建立有效的品牌问题集' })).toBeInTheDocument()
  })

  it('shows a recoverable empty state', async () => {
    const user = userEvent.setup()
    render(<ResourcesPage />)

    await user.type(screen.getByRole('searchbox', { name: '搜索资源' }), '没有这个资源')
    expect(screen.getByRole('heading', { name: '暂时没有匹配资源' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '清除筛选' }))
    expect(screen.getByText('找到 6 份资源')).toBeInTheDocument()
  })

  it('expands and collapses a resource summary', async () => {
    const user = userEvent.setup()
    render(<ResourcesPage />)

    const buttons = screen.getAllByRole('button', { name: '查看摘要' })
    await user.click(buttons[0])

    const article = buttons[0].closest('article') as HTMLElement
    expect(within(article).getByText('读完可以获得')).toBeVisible()
    expect(screen.getByRole('button', { name: '收起摘要' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('opens an accessible mobile menu and restores trigger focus', async () => {
    const user = userEvent.setup()
    render(<ResourcesPage />)

    const trigger = screen.getByRole('button', { name: '打开菜单' })
    await user.click(trigger)

    const dialog = screen.getByRole('dialog', { name: '网站导航' })
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByRole('button', { name: '关闭菜单' })).toHaveFocus()
    expect(document.body.style.overflow).toBe('hidden')

    await user.click(screen.getByRole('button', { name: '关闭菜单' }))

    expect(screen.queryByRole('dialog', { name: '网站导航' })).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    expect(document.body.style.overflow).toBe('')
  })
})
