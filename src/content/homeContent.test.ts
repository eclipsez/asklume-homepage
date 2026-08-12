import {
  benefits,
  capabilities,
  metrics,
  navItems,
  pillars,
} from './homeContent'

describe('homeContent', () => {
  it('provides the complete primary navigation', () => {
    expect(navItems).toHaveLength(5)
  })

  it('provides the three core benefits', () => {
    expect(benefits).toHaveLength(3)
  })

  it('frames the solution around the three AI decision stages', () => {
    expect(pillars.map(({ title }) => title)).toEqual([
      '被看见',
      '被理解',
      '被选择',
    ])
  })

  it('provides four platform capabilities', () => {
    expect(capabilities).toHaveLength(4)
  })

  it('provides the approved metric values', () => {
    expect(metrics.map(({ value }) => value)).toEqual(['72%', '68%', '156', '29%'])
  })
})
