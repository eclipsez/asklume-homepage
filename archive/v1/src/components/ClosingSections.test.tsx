import { render, screen, within } from '@testing-library/react'
import App from '../App'
import { footerContact, navItems } from '../content/homeContent'

describe('Closing homepage sections', () => {
  it('offers the required AI diagnostic call-to-action', () => {
    const { container } = render(<App />)
    const diagnostic = container.querySelector<HTMLElement>('#diagnostic')

    expect(diagnostic).toBeInTheDocument()
    expect(
      within(diagnostic as HTMLElement).getByRole('heading', {
        level: 2,
        name: '开启您的AI认知基线诊断',
      }),
    ).toBeVisible()
    expect(
      within(diagnostic as HTMLElement).getByText(
        '了解企业在AI中的真实表现，发现机会，制定提升策略。',
      ),
    ).toBeVisible()
    expect(
      within(diagnostic as HTMLElement).getByRole('link', {
        name: '立即开始诊断',
      }),
    ).toHaveAttribute(
      'href',
      `mailto:${footerContact.email}?subject=${encodeURIComponent('AI认知基线诊断')}`,
    )
    expect(
      within(diagnostic as HTMLElement).getByRole('link', {
        name: '与专家咨询',
      }),
    ).toHaveAttribute('href', `mailto:${footerContact.email}`)
  })

  it('provides the configured footer navigation', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    const navigation = within(footer).getByRole('navigation', {
      name: '页脚导航',
    })

    expect(footer).toHaveAttribute('id', 'footer')
    expect(within(footer).getByText('问答光源 | AskLume')).toBeVisible()

    for (const item of navItems) {
      expect(
        within(navigation).getByRole('link', { name: item.label }),
      ).toHaveAttribute('href', item.href)
    }
  })

  it('presents unavailable social channels as non-interactive marks', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')

    for (const socialName of ['LinkedIn', 'X', 'YouTube']) {
      expect(
        within(footer).queryByRole('link', { name: socialName }),
      ).not.toBeInTheDocument()
      expect(
        within(footer).getByRole('img', {
          name: `${socialName}（暂未开放）`,
        }),
      ).toBeVisible()
    }
  })
})
