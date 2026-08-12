import {
  benefits,
  capabilities,
  metrics,
  navItems,
  pillars,
  trustBrands,
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

  it('configures the decorative art for each platform capability', () => {
    expect(capabilities.map(({ art }) => art)).toEqual([
      'platform',
      'ring',
      'cubes',
      'orb',
    ])
  })

  it('provides the approved metric values', () => {
    expect(metrics.map(({ value }) => value)).toEqual(['72%', '68%', '156', '29%'])
  })

  it('provides the approved metric deltas', () => {
    expect(metrics.map(({ delta }) => delta)).toEqual(['12%', '9%', '23%', '6%'])
  })

  it('provides the approved trust brands as names', () => {
    expect(trustBrands).toEqual([
      '华为',
      '腾讯',
      '阿里巴巴',
      '字节跳动',
      '小米',
      '中国平安',
      '美的集团',
    ])
  })
})
