import { render, screen, within } from '@testing-library/react'
import { GlassDashboard } from './GlassDashboard'

describe('GlassDashboard', () => {
  it('associates each prompt label with a unique input when reused', () => {
    const { container } = render(
      <>
        <GlassDashboard />
        <GlassDashboard variant="embedded" />
      </>,
    )

    const prompts = screen.getAllByRole('textbox', { name: '向AskLume提问' })
    const promptIds = prompts.map((prompt) => prompt.id)
    const labelledInputIds = Array.from(container.querySelectorAll('label')).map(
      (label) => label.htmlFor,
    )

    expect(prompts).toHaveLength(2)
    expect(promptIds.every(Boolean)).toBe(true)
    expect(new Set(promptIds).size).toBe(2)
    expect(labelledInputIds).toEqual(promptIds)
  })

  it('presents analysis dimensions as preview labels rather than inert tabs', () => {
    render(<GlassDashboard />)

    const dimensions = screen.getByRole('list', { name: '分析维度' })

    expect(within(dimensions).getAllByRole('listitem')).toHaveLength(5)
    expect(within(dimensions).queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('tab')).not.toBeInTheDocument()
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument()
  })
})
