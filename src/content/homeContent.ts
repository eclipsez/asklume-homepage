import type { IconName } from '../components/Icon'

export interface NavItem {
  label: string
  href: `#${string}`
}

export interface FeatureCard {
  title: string
  description: string
  icon: IconName
  href?: `#${string}`
}

export type CapabilityArt = 'platform' | 'ring' | 'cubes' | 'orb'

export interface CapabilityCard extends FeatureCard {
  art: CapabilityArt
}

export interface Pillar {
  title: '被看见' | '被理解' | '被选择'
  lines: readonly [string, string, string, string]
}

export interface Metric {
  label: string
  value: string
  delta: string
}

export interface FooterContact {
  phone: string
  email: string
  copyright: string
  icp: string
}

export const navItems = [
  { label: '首页', href: '#top' },
  { label: '产品与服务', href: '#capabilities' },
  { label: '解决方案', href: '#pillars' },
  { label: '资源中心', href: '#insights' },
  { label: '关于我们', href: '#footer' },
] as const satisfies readonly NavItem[]

export const benefits = [
  {
    title: '更高的AI可见性',
    description: '让企业在更多AI平台中被主动发现与识别',
    icon: 'target',
    href: '#pillars',
  },
  {
    title: '更准确的AI理解',
    description: '让AI正确理解企业是谁、能做什么、适合谁',
    icon: 'brain',
    href: '#pillars',
  },
  {
    title: '更强的品牌选择力',
    description: '为企业进入AI推荐与决策结果提供可信基础',
    icon: 'diamond',
    href: '#capabilities',
  },
] as const satisfies readonly FeatureCard[]

export const pillars = [
  {
    title: '被看见',
    lines: [
      '提升AI发现与识别能力',
      '建立实体与主题基础',
      '优化内容与技术可识别性',
      '增强AI抓取与呈现',
    ],
  },
  {
    title: '被理解',
    lines: [
      '确保AI准确理解企业能力',
      '统一核心事实与能力表达',
      '建立清晰的语义关联',
      '提升回答准确性',
    ],
  },
  {
    title: '被选择',
    lines: [
      '赢得AI推荐与决策信任',
      '建设可信证据与来源',
      '打造差异化表达',
      '提升行动选择权',
    ],
  },
] as const satisfies readonly Pillar[]

export const capabilities = [
  {
    title: 'AI搜索与洞察',
    description: '追踪品牌在主流AI平台中的表现、发现问题、洞察机会。',
    icon: 'search',
    art: 'platform',
  },
  {
    title: '持续监测与预警',
    description: '实时监测AI回答变化、识别风险信号、助力品牌管理。',
    icon: 'shield',
    art: 'ring',
  },
  {
    title: '企业协同与资产管理',
    description: '跨团队、跨系统协作，沉淀企业资产、提升组织生产力。',
    icon: 'cube',
    art: 'cubes',
  },
  {
    title: '定制化智能方案',
    description: '根据行业与业务特点定制方案，匹配企业独特需求。',
    icon: 'spark',
    art: 'orb',
  },
] as const satisfies readonly CapabilityCard[]

export const metrics = [
  { label: '可见性', value: '72%', delta: '12%' },
  { label: '理解度', value: '68%', delta: '9%' },
  { label: '引用量', value: '156', delta: '23%' },
  { label: '推荐率', value: '29%', delta: '6%' },
] as const satisfies readonly Metric[]

export const footerContact = {
  phone: '400-888-8888',
  email: 'hello@asklume.com',
  copyright: '© 2024 问答光源科技：保留所有权利',
  icp: '粤ICP备2024001234号',
} as const satisfies FooterContact
