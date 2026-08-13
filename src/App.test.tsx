import { render, screen, within } from '@testing-library/react'
import App from './App'

describe('AskLume homepage', () => {
  it('renders the canonical homepage without a version switcher', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /让品牌被AI/ })).toBeInTheDocument()
    expect(screen.queryByText(/版本 1\.0/)).not.toBeInTheDocument()
    expect(container.querySelector('#main-content')).toBeInTheDocument()
  })

  it('provides the canonical section targets', () => {
    const { container } = render(<App />)

    for (const id of ['top', 'features', 'solutions', 'pillars', 'capabilities', 'diagnostic', 'footer']) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    }
  })

  it('links the primary navigation to the resource center', () => {
    render(<App />)

    expect(
      screen.getAllByRole('link', { name: '资源中心' }).some(
        (link) => link.getAttribute('href') === './resources.html',
      ),
    ).toBe(true)
  })

  it('labels dashboard metrics as sample data', () => {
    render(<App />)

    expect(screen.getByRole('region', { name: 'AI认知基线示例数据' })).toBeInTheDocument()
    expect(screen.getByText('以下为界面示例，不代表真实诊断结果。')).toBeInTheDocument()
  })

  it('separates solution selection from the diagnosable and verifiable method', () => {
    const { container } = render(<App />)
    const solutionPreview = container.querySelector('#solutions')
    const solution = container.querySelector('#pillars')

    expect(solutionPreview).toBeInTheDocument()
    expect(within(solutionPreview as HTMLElement).getByRole('heading', {
      level: 2,
      name: '先识别业务断点，再选择建设路径',
    })).toBeInTheDocument()
    expect(within(solutionPreview as HTMLElement).getByRole('link', {
      name: '查看全部解决方案',
    })).toHaveAttribute('href', './solutions.html')

    expect(solution).toBeInTheDocument()
    const section = within(solution as HTMLElement)
    expect(
      section.getByRole('heading', {
        level: 2,
        name: 'GEO-AIP™ 如何把企业事实变成可核验资产',
      }),
    ).toBeInTheDocument()
    expect(section.getAllByRole('article')).toHaveLength(3)
    expect(section.getByText(/不承诺固定排名或推荐结果/)).toBeInTheDocument()
  })
})
