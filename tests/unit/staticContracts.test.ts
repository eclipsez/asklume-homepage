import { readFileSync } from 'node:fs'

function readProjectFile(relativePath: string) {
  return readFileSync(new URL(relativePath, import.meta.url), 'utf8')
}

describe('static homepage contracts', () => {
  it('keeps the core homepage readable when JavaScript is unavailable', () => {
    const html = readProjectFile('../../index.html')
    const noscript = html.match(/<noscript>([\s\S]*?)<\/noscript>/i)?.[1]

    expect(noscript).toBeDefined()
    expect(noscript).toContain('<main')
    expect(noscript).toMatch(
      /<h1[^>]*>让品牌被AI看见、理解与选择。<\/h1>/,
    )
    expect(noscript).toContain('为什么选择问答光源')
    expect(noscript).toContain('三大信息支柱')
    expect(noscript).toContain('从数据到决策的完整能力体系')
    expect(noscript).toContain('hello@asklume.com')
    expect(noscript).toContain('400-888-8888')
    expect(noscript).toContain('© 2024 问答光源科技：保留所有权利')
  })

  it('stacks independent capabilities throughout the mobile navigation breakpoint', () => {
    const css = readProjectFile(
      '../../src/components/CapabilitiesSection.module.css',
    )
    const mobileRules = css.match(
      /@media \(max-width: 768px\) \{([\s\S]*?)@media \(max-width: 380px\)/,
    )?.[1]

    expect(mobileRules).toBeDefined()
    expect(mobileRules).toMatch(
      /\.grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)/,
    )
    expect(css).not.toMatch(/data-flow='next'/)
    expect(css).toMatch(/\.arrow\s*\{[\s\S]*?pointer-events:\s*none/)
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)/)
  })

  it('gives the mobile menu a reduced-motion-safe entrance', () => {
    const css = readProjectFile('../../src/components/MobileMenu.module.css')

    expect(css).toMatch(/\.overlay\s*\{[\s\S]*?animation:/)
    expect(css).toMatch(/\.shell\s*\{[\s\S]*?animation:/)
    expect(css).toMatch(/@keyframes\s+overlayEntrance/)
    expect(css).toMatch(/@keyframes\s+panelEntrance/)
    expect(css).toMatch(
      /@media \(prefers-reduced-motion: reduce\)\s*\{[\s\S]*?animation:\s*none/,
    )
  })
})
