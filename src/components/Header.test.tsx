import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

afterEach(() => {
  document.body.style.overflow = ''
  vi.unstubAllGlobals()
})

describe('Header', () => {
  it('opens and closes the mobile navigation with accessible controls', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const openButton = screen.getByRole('button', { name: '打开菜单' })
    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(openButton)

    const dialog = screen.getByRole('dialog', { name: '网站导航' })
    expect(dialog).toBeVisible()
    expect(openButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(within(dialog).getByRole('button', { name: '关闭菜单' }))

    expect(screen.queryByRole('dialog', { name: '网站导航' })).not.toBeInTheDocument()
    expect(openButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('provides a compact brand for the mobile header and a full brand for desktop', () => {
    const { container } = render(<Header />)

    expect(container.querySelectorAll('[data-header-brand="desktop"]')).toHaveLength(1)
    expect(container.querySelectorAll('[data-header-brand="mobile"]')).toHaveLength(1)
    expect(
      container.querySelector('[data-header-brand="mobile"] [class*="brandCompact"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-header-brand="desktop"] [class*="brandCompact"]'),
    ).not.toBeInTheDocument()
  })

  it('closes with Escape, restores trigger focus, and preserves the body scroll style', async () => {
    const user = userEvent.setup()
    document.body.style.overflow = 'clip'
    render(<Header />)

    const openButton = screen.getByRole('button', { name: '打开菜单' })
    await user.click(openButton)

    expect(screen.getByRole('button', { name: '关闭菜单' })).toHaveFocus()
    expect(document.body.style.overflow).toBe('hidden')

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog', { name: '网站导航' })).not.toBeInTheDocument()
    expect(openButton).toHaveFocus()
    expect(document.body.style.overflow).toBe('clip')
  })

  it('keeps keyboard focus inside the menu and closes when a navigation link is selected', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: '打开菜单' }))

    const dialog = screen.getByRole('dialog', { name: '网站导航' })
    const closeButton = within(dialog).getByRole('button', { name: '关闭菜单' })
    const focusableControls = dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )

    expect(closeButton).toHaveFocus()
    await user.tab({ shift: true })
    expect(focusableControls.item(focusableControls.length - 1)).toHaveFocus()

    focusableControls.item(focusableControls.length - 1).focus()
    await user.tab()
    expect(closeButton).toHaveFocus()

    await user.click(within(dialog).getByRole('link', { name: '产品与服务' }))
    expect(screen.queryByRole('dialog', { name: '网站导航' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the viewport crosses into the desktop layout', async () => {
    const user = userEvent.setup()
    let desktopChangeListener: ((event: MediaQueryListEvent) => void) | undefined
    const mediaQueryList = {
      matches: false,
      media: '(min-width: 769px)',
      onchange: null,
      addEventListener: vi.fn(
        (_type: string, listener: (event: MediaQueryListEvent) => void) => {
          desktopChangeListener = listener
        },
      ),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }
    vi.stubGlobal('matchMedia', vi.fn(() => mediaQueryList))
    document.body.style.overflow = 'clip'
    const { unmount } = render(<Header />)

    const openButton = screen.getByRole('button', { name: '打开菜单' })
    await user.click(openButton)
    expect(document.body.style.overflow).toBe('hidden')

    act(() => {
      desktopChangeListener?.({ matches: true } as MediaQueryListEvent)
    })

    expect(screen.queryByRole('dialog', { name: '网站导航' })).not.toBeInTheDocument()
    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    expect(document.body.style.overflow).toBe('clip')
    unmount()
    expect(mediaQueryList.removeEventListener).toHaveBeenCalledWith(
      'change',
      expect.any(Function),
    )
  })

  it('recovers focus into the dialog when Tab starts outside it', async () => {
    const user = userEvent.setup()
    render(
      <>
        <button type="button">外部操作</button>
        <Header />
      </>,
    )

    await user.click(screen.getByRole('button', { name: '打开菜单' }))
    const dialog = screen.getByRole('dialog', { name: '网站导航' })
    const closeButton = within(dialog).getByRole('button', { name: '关闭菜单' })
    const outsideButton = screen.getByRole('button', { name: '外部操作' })

    expect(dialog).toHaveAttribute('tabindex', '-1')
    outsideButton.focus()
    await user.tab()

    expect(closeButton).toHaveFocus()
  })

  it('does not add a second contentinfo landmark inside the menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: '打开菜单' }))

    expect(
      within(screen.getByRole('dialog', { name: '网站导航' })).queryByRole(
        'contentinfo',
      ),
    ).not.toBeInTheDocument()
  })
})
