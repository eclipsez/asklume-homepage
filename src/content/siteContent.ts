export type SiteNavLabel = '产品与服务' | '解决方案' | '资源中心' | '关于我们'

export interface SiteNavItem {
  label: SiteNavLabel
  href: string
}

export type SitePage = 'home' | 'services' | 'solutions' | 'globalGeo' | 'methodology' | 'resources' | 'about'

const homeNavItems = [
  { label: '产品与服务', href: './services.html' },
  { label: '解决方案', href: './solutions.html' },
  { label: '资源中心', href: './resources.html' },
  { label: '关于我们', href: './about.html' },
] as const satisfies readonly SiteNavItem[]

export function getSiteNavItems(page: SitePage): readonly SiteNavItem[] {
  return homeNavItems
}

export function getDiagnosticHref(page: SitePage) {
  return page === 'home' ? '#diagnostic' : './index.html#diagnostic'
}

export const siteContact = {
  email: 'hello@asklume.com',
  copyright: '© 2026 问答光源｜AskLume',
} as const
