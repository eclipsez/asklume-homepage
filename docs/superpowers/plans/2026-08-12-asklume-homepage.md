# AskLume Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-quality, high-fidelity AskLume homepage matching the approved desktop and mobile references.

**Architecture:** A Vite React single-page app renders typed, local content through focused section components. The supplied Banner image is the only photographic source; all interface layers, icons, logo, cards, CTA orb, responsive behavior, and motion are implemented in HTML, CSS, SVG, and Motion. Unit tests cover structure and interaction, while Playwright screenshot tests cover visual fidelity at four approved viewports.

**Tech Stack:** Vite, React, TypeScript, CSS Modules, Motion, Vitest, Testing Library, Playwright

---

## File map

- `package.json` — scripts and dependencies.
- `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json` — application and test configuration.
- `src/main.tsx`, `src/App.tsx` — entry point and page composition.
- `src/styles/tokens.css`, `src/styles/global.css` — design tokens, reset, shared layout, focus, reduced-motion rules.
- `src/content/homeContent.ts` — typed navigation, card, metric, brand, and footer content.
- `src/assets/asklume-banner.png` — approved Banner source copied byte-for-byte from the design references.
- `src/components/Brand.tsx` — original vector logo and wordmark.
- `src/components/Icon.tsx` — one coherent inline SVG icon system.
- `src/components/Header.tsx`, `src/components/MobileMenu.tsx` — desktop navigation and accessible mobile overlay.
- `src/components/Hero.tsx`, `src/components/GlassDashboard.tsx` — responsive hero and metric interface.
- `src/components/TrustStrip.tsx`, `src/components/BenefitsSection.tsx` — trust strip and benefit cards.
- `src/components/PillarsSection.tsx`, `src/components/CapabilitiesSection.tsx` — information pillars and platform capability cards.
- `src/components/DiagnosticCTA.tsx`, `src/components/Footer.tsx` — closing visual climax and footer.
- `src/components/Reveal.tsx` — reduced-motion-safe one-time scroll reveal.
- `src/components/*.module.css` — component-specific layout and visual rules.
- `src/test/setup.ts`, `src/**/*.test.tsx` — unit and interaction tests.
- `playwright.config.ts`, `tests/visual/homepage.spec.ts` — cross-viewport visual tests.

## Task 1: Create the tested application shell

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/App.test.tsx`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Define scripts and dependencies**

Create `package.json` with scripts `dev`, `build`, `preview`, `test`, `test:run`, `test:visual`, and `test:visual:update`. Use React 19, Motion 12, Vite 7, TypeScript 5.8, Vitest 3, Testing Library 16, jsdom 26, and Playwright 1.54.

```json
{
  "name": "asklume-homepage",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:run": "vitest run",
    "test:visual": "playwright test",
    "test:visual:update": "playwright test --update-snapshots"
  },
  "dependencies": {
    "motion": "^12.23.12",
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@playwright/test": "^1.54.2",
    "@testing-library/jest-dom": "^6.6.4",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "jsdom": "^26.1.0",
    "typescript": "^5.8.3",
    "vite": "^7.1.1",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: installation succeeds and creates `package-lock.json` without unresolved dependency errors.

- [ ] **Step 3: Write the failing shell test**

```tsx
// src/App.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('AskLume homepage', () => {
  it('renders the primary page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /让品牌被AI/ })).toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Run the test and verify the expected failure**

Run: `npm run test:run -- src/App.test.tsx`

Expected: FAIL because the heading does not exist yet.

- [ ] **Step 5: Implement the minimal app shell and test setup**

Configure Vite with React and Vitest/jsdom, import `@testing-library/jest-dom/vitest` from `src/test/setup.ts`, and render this semantic shell:

```tsx
// src/App.tsx
export default function App() {
  return (
    <main>
      <h1>让品牌被AI看见、理解与选择。</h1>
    </main>
  )
}
```

- [ ] **Step 6: Verify and commit**

Run: `npm run test:run -- src/App.test.tsx`

Expected: PASS, 1 test.

Run: `git add package.json package-lock.json index.html vite.config.ts tsconfig.json tsconfig.app.json src`

Run: `git commit -m "chore: scaffold AskLume homepage"`

## Task 2: Establish design tokens, content types, and vector primitives

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Create: `src/content/homeContent.ts`
- Create: `src/content/homeContent.test.ts`
- Create: `src/components/Brand.tsx`
- Create: `src/components/Icon.tsx`
- Create: `src/components/primitives.module.css`
- Modify: `src/main.tsx`

- [ ] **Step 1: Write content contract tests**

```ts
import { describe, expect, it } from 'vitest'
import { benefits, capabilities, metrics, navItems, pillars } from './homeContent'

describe('homepage content', () => {
  it('matches the approved section counts and metric values', () => {
    expect(navItems).toHaveLength(5)
    expect(benefits).toHaveLength(3)
    expect(pillars.map((item) => item.title)).toEqual(['被看见', '被理解', '被选择'])
    expect(capabilities).toHaveLength(4)
    expect(metrics.map((item) => item.value)).toEqual(['72%', '68%', '156', '29%'])
  })
})
```

- [ ] **Step 2: Run the contract test and verify failure**

Run: `npm run test:run -- src/content/homeContent.test.ts`

Expected: FAIL because `homeContent.ts` does not exist.

- [ ] **Step 3: Implement typed content and tokens**

Define `NavItem`, `FeatureCard`, `Metric`, and `TrustBrand` types. Export this approved content:

```ts
export const navItems = [
  { label: '首页', href: '#top' },
  { label: '产品与服务', href: '#capabilities' },
  { label: '解决方案', href: '#pillars' },
  { label: '资源中心', href: '#insights' },
  { label: '关于我们', href: '#footer' }
] as const

export const benefits = [
  { title: '更高的AI可见性', description: '让企业在更多AI平台中被主动发现与识别', icon: 'target' },
  { title: '更准确的AI理解', description: '让AI正确理解企业是谁、能做什么、适合谁', icon: 'brain' },
  { title: '更强的品牌选择力', description: '为企业进入AI推荐与决策结果提供可信基础', icon: 'diamond' }
] as const

export const pillars = [
  { title: '被看见', lines: ['提升AI发现与识别能力', '建立实体与主题基础', '优化内容与技术可识别性', '增强AI抓取与呈现'] },
  { title: '被理解', lines: ['确保AI准确理解企业能力', '统一核心事实与能力表达', '建立清晰的语义关联', '提升回答准确性'] },
  { title: '被选择', lines: ['赢得AI推荐与决策信任', '建设可信证据与来源', '打造差异化表达', '提升行动选择权'] }
] as const

export const capabilities = [
  { title: 'AI搜索与洞察', description: '追踪品牌在主流AI平台中的表现、发现问题、洞察机会。', icon: 'search' },
  { title: '持续监测与预警', description: '实时监测AI回答变化、识别风险信号、助力品牌管理。', icon: 'shield' },
  { title: '企业协同与资产管理', description: '跨团队、跨系统协作，沉淀企业资产、提升组织生产力。', icon: 'cube' },
  { title: '定制化智能方案', description: '根据行业与业务特点定制方案，匹配企业独特需求。', icon: 'spark' }
] as const

export const metrics = [
  { label: '可见性', value: '72%', delta: '12%' },
  { label: '理解度', value: '68%', delta: '9%' },
  { label: '引用量', value: '156', delta: '23%' },
  { label: '推荐率', value: '29%', delta: '6%' }
] as const

export const trustBrands = ['华为', '腾讯', '阿里巴巴', '字节跳动', '小米', '中国平安', '美的集团'] as const
```

Define these root tokens:

```css
:root {
  --ink: #0d1638;
  --ink-muted: #68708b;
  --blue: #566fff;
  --violet: #7657f7;
  --magenta: #df5fd1;
  --coral: #ff7d8d;
  --cloud: #f7f8fc;
  --surface: rgba(255, 255, 255, 0.9);
  --border: rgba(83, 89, 130, 0.11);
  --shadow-card: 0 22px 60px rgba(32, 39, 86, 0.08);
  --radius-card: 18px;
  --content-width: 1120px;
  --font-sans: "PingFang SC", "Microsoft YaHei", system-ui, sans-serif;
}
```

Implement `Brand` as inline SVG plus text and `Icon` as a typed union of `target | brain | diamond | search | star | shield | cube | spark | arrow | menu | close | globe | user`. Decorative SVGs must use `aria-hidden="true"`.

- [ ] **Step 4: Verify content and SVG accessibility**

Run: `npm run test:run -- src/content/homeContent.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

Run: `git add src/styles src/content src/components/Brand.tsx src/components/Icon.tsx src/components/primitives.module.css src/main.tsx`

Run: `git commit -m "feat: add AskLume design system and content"`

## Task 3: Build the responsive header and accessible mobile menu

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.module.css`
- Create: `src/components/MobileMenu.tsx`
- Create: `src/components/MobileMenu.module.css`
- Create: `src/components/Header.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write failing menu behavior tests**

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('opens and closes the labelled mobile navigation', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: '打开菜单' }))
    expect(screen.getByRole('dialog', { name: '网站导航' })).toBeVisible()
    await user.click(screen.getByRole('button', { name: '关闭菜单' }))
    expect(screen.queryByRole('dialog', { name: '网站导航' })).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- src/components/Header.test.tsx`

Expected: FAIL because `Header` does not exist.

- [ ] **Step 3: Implement header and mobile menu**

Use local state in `Header`. Desktop navigation is visible at 769 px and above; the menu button is visible below 769 px. `MobileMenu` uses `role="dialog"`, `aria-modal="true"`, the exact five nav items, gradient diagnostic button, login, language, appointment card, `400-888-8888`, `hello@asklume.com`, copyright, and ICP line from the mobile reference. Lock document scrolling while open, close on Escape, and restore focus to the trigger.

- [ ] **Step 4: Verify behavior and build**

Run: `npm run test:run -- src/components/Header.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: TypeScript and Vite build succeed.

- [ ] **Step 5: Commit**

Run: `git add src/components/Header* src/components/MobileMenu* src/App.tsx`

Run: `git commit -m "feat: add responsive AskLume navigation"`

## Task 4: Reproduce the Hero and glass Dashboard

**Files:**
- Create: `src/assets/asklume-banner.png`
- Create: `src/components/Hero.tsx`
- Create: `src/components/Hero.module.css`
- Create: `src/components/GlassDashboard.tsx`
- Create: `src/components/GlassDashboard.module.css`
- Create: `src/components/Hero.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Copy and verify the approved Banner source**

Run: `cp docs/superpowers/specs/references/asklume-banner.png src/assets/asklume-banner.png`

Run: `cmp docs/superpowers/specs/references/asklume-banner.png src/assets/asklume-banner.png`

Expected: no output and exit code 0.

- [ ] **Step 2: Write the failing Hero content test**

```tsx
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the approved value proposition and metrics', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('让品牌被AI看见、理解与选择。')
    expect(screen.getByText('72%')).toBeInTheDocument()
    expect(screen.getByText('156')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /开始AI认知基线诊断/ })).toHaveAttribute('href', '#diagnostic')
  })

  it('keeps content readable if the decorative Banner fails', () => {
    const { container } = render(<Hero />)
    const banner = container.querySelector('img[src*="asklume-banner"]')
    expect(banner).not.toBeNull()
    fireEvent.error(banner as HTMLImageElement)
    expect(container.querySelector('img[src*="asklume-banner"]')).toBeNull()
    expect(screen.getByRole('heading', { level: 1 })).toBeVisible()
  })
})
```

- [ ] **Step 3: Run the test and verify failure**

Run: `npm run test:run -- src/components/Hero.test.tsx`

Expected: FAIL because `Hero` does not exist.

- [ ] **Step 4: Implement Hero and Dashboard**

Use the Banner as a full-bleed `<img>` with defined dimensions and `object-fit: cover`. Place text and `GlassDashboard` above it. Desktop uses a two-column grid; mobile uses one column, hides the Hero Dashboard, positions the same Banner image along the lower/right edge, and stacks both CTAs at full width. Implement the four value labels and four metric cards from `homeContent.ts`. Use `backdrop-filter: blur(24px)` with an opaque-white fallback. Track the image error event; on failure remove the broken image node while retaining the same aspect-ratio container and a blue-violet-pink CSS gradient.

- [ ] **Step 5: Verify and commit**

Run: `npm run test:run -- src/components/Hero.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: build succeeds.

Run: `git add src/assets src/components/Hero* src/components/GlassDashboard* src/App.tsx`

Run: `git commit -m "feat: build high-fidelity AskLume hero"`

## Task 5: Build trust and benefits sections

**Files:**
- Create: `src/components/TrustStrip.tsx`
- Create: `src/components/TrustStrip.module.css`
- Create: `src/components/BenefitsSection.tsx`
- Create: `src/components/BenefitsSection.module.css`
- Create: `src/components/BenefitsSection.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write failing section tests**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BenefitsSection from './BenefitsSection'

describe('BenefitsSection', () => {
  it('renders all three approved benefits', () => {
    render(<BenefitsSection />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByText('更高的AI可见性')).toBeVisible()
    expect(screen.getByText('更准确的AI理解')).toBeVisible()
    expect(screen.getByText('更强的品牌选择力')).toBeVisible()
  })
})
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- src/components/BenefitsSection.test.tsx`

Expected: FAIL because the section does not exist.

- [ ] **Step 3: Implement both sections**

Render seven trust brands in a muted monochrome strip. Give the benefit section `id="insights"`, then render its eyebrow, heading, description, and three cards from typed content. Desktop uses three columns; mobile uses one column. Cards use the shared radius, border, shadow, original SVG icons, and a restrained 2 px hover lift.

- [ ] **Step 4: Verify and commit**

Run: `npm run test:run -- src/components/BenefitsSection.test.tsx`

Expected: PASS.

Run: `git add src/components/TrustStrip* src/components/BenefitsSection* src/App.tsx`

Run: `git commit -m "feat: add trust and benefit sections"`

## Task 6: Build pillars and capability system

**Files:**
- Create: `src/components/PillarsSection.tsx`
- Create: `src/components/PillarsSection.module.css`
- Create: `src/components/CapabilitiesSection.tsx`
- Create: `src/components/CapabilitiesSection.module.css`
- Create: `src/components/PillarsSection.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write failing sequence tests**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PillarsSection from './PillarsSection'

describe('PillarsSection', () => {
  it('preserves the approved information sequence', () => {
    render(<PillarsSection />)
    const headings = screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)
    expect(headings).toEqual(['被看见', '被理解', '被选择'])
  })
})
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- src/components/PillarsSection.test.tsx`

Expected: FAIL because the section does not exist.

- [ ] **Step 3: Implement pillars and capabilities**

Give Pillars `id="pillars"` and Capabilities `id="capabilities"`. Pillars use a three-column desktop grid with subtle horizontal connectors and a one-column mobile stack with vertical connectors. Capabilities use four desktop columns and one mobile column. Add original SVG tail decorations to capability cards; keep them decorative and hidden from assistive technology. Every article receives a unique accessible heading association.

- [ ] **Step 4: Verify and commit**

Run: `npm run test:run -- src/components/PillarsSection.test.tsx`

Expected: PASS.

Run: `npm run build`

Expected: build succeeds.

Run: `git add src/components/PillarsSection* src/components/CapabilitiesSection* src/App.tsx`

Run: `git commit -m "feat: add AskLume pillars and capabilities"`

## Task 7: Complete CTA, mobile Dashboard, and footer

**Files:**
- Create: `src/components/DiagnosticCTA.tsx`
- Create: `src/components/DiagnosticCTA.module.css`
- Create: `src/components/Footer.tsx`
- Create: `src/components/Footer.module.css`
- Create: `src/components/ClosingSections.test.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Write failing closing-section tests**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import DiagnosticCTA from './DiagnosticCTA'
import Footer from './Footer'

describe('closing sections', () => {
  it('renders diagnostic actions and footer navigation', () => {
    render(<><DiagnosticCTA /><Footer /></>)
    expect(screen.getByRole('heading', { name: '开启您的AI认知基线诊断' })).toBeVisible()
    expect(screen.getByRole('link', { name: '立即开始诊断' })).toHaveAttribute('href', '#diagnostic')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- src/components/ClosingSections.test.tsx`

Expected: FAIL because the components do not exist.

- [ ] **Step 3: Implement CTA and footer**

Build the CTA from layered CSS gradients and a decorative inline SVG orb, with no stock imagery. Give it `id="diagnostic"`. Reuse `GlassDashboard` after the CTA with a mobile-only class. Give Footer `id="footer"`, then add its brand, five nav links, and three accessible social icon links. Match the approved mobile ordering exactly.

- [ ] **Step 4: Verify and commit**

Run: `npm run test:run -- src/components/ClosingSections.test.tsx`

Expected: PASS.

Run: `npm run test:run`

Expected: all unit tests pass.

Run: `npm run build`

Expected: all unit tests and production build pass.

Run: `git add src/components/DiagnosticCTA* src/components/Footer* src/components/ClosingSections.test.tsx src/App.tsx`

Run: `git commit -m "feat: complete AskLume homepage sections"`

## Task 8: Add restrained motion and accessibility behavior

**Files:**
- Create: `src/components/Reveal.tsx`
- Create: `src/components/Reveal.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/styles/global.css`
- Modify: relevant `src/components/*.module.css`

- [ ] **Step 1: Write a failing reduced-motion test**

```tsx
import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Reveal from './Reveal'

vi.mock('motion/react', () => ({
  motion: { div: ({ children }: { children?: ReactNode }) => <div>{children}</div> },
  useReducedMotion: () => true
}))

describe('Reveal', () => {
  it('renders content without hidden initial state when motion is reduced', () => {
    render(<Reveal><span>核心优势</span></Reveal>)
    expect(screen.getByText('核心优势').parentElement).not.toHaveStyle({ opacity: 0 })
  })
})
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm run test:run -- src/components/Reveal.test.tsx`

Expected: FAIL because `Reveal` does not exist.

- [ ] **Step 3: Implement motion orchestration**

`Reveal` uses `useReducedMotion`, `initial`, `whileInView`, `viewport={{ once: true, amount: 0.2 }}`, an 18 px maximum offset, and a 500–650 ms cubic-bezier transition. Wrap section headings and card groups, not every small text node. Hero content uses one 0–900 ms sequence. Add `:focus-visible` outlines and a `prefers-reduced-motion` CSS block that removes smooth scrolling, transforms, and long transitions.

- [ ] **Step 4: Run accessibility and regression checks**

Run: `npm run test:run`

Expected: all tests pass.

Run: `npm run build`

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 5: Commit**

Run: `git add src/components/Reveal* src/App.tsx src/styles src/components/*.module.css`

Run: `git commit -m "feat: add restrained accessible motion"`

## Task 9: Add cross-viewport visual verification and calibrate

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/visual/homepage.spec.ts`
- Create: `tests/visual/homepage.spec.ts-snapshots/*`
- Modify: component CSS modules as revealed by overlays

- [ ] **Step 1: Create the visual test before baselines exist**

```ts
import { expect, test } from '@playwright/test'

const viewports = [
  { name: 'desktop-wide', width: 1440, height: 1100 },
  { name: 'desktop-reference', width: 1024, height: 1200 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'mobile-narrow', width: 360, height: 800 }
] as const

for (const viewport of viewports) {
  test(`${viewport.name} homepage`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto('/')
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await expect(page.locator('main')).toHaveScreenshot(`${viewport.name}.png`, {
      animations: 'disabled',
      fullPage: true,
      maxDiffPixelRatio: 0.015
    })
  })
}

test('mobile menu', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: '打开菜单' }).click()
  await expect(page.getByRole('dialog', { name: '网站导航' })).toHaveScreenshot('mobile-menu.png', {
    animations: 'disabled',
    maxDiffPixelRatio: 0.01
  })
})
```

- [ ] **Step 2: Install the browser and verify the missing-baseline failure**

Run: `npx playwright install chromium`

Run: `npm run test:visual`

Expected: FAIL because approved snapshots do not yet exist.

- [ ] **Step 3: Start the app and perform reference overlays**

Run: `npm run dev -- --host 127.0.0.1`

Capture 1024 px and 390 px full-page screenshots. Overlay them at 50% opacity against `docs/superpowers/specs/references/asklume-desktop.png` and the corresponding mobile columns. Adjust only measured differences in spacing, line height, card height, Banner position, shadow opacity, and breakpoints. Do not introduce new content or decorative motifs.

- [ ] **Step 4: Generate approved baselines and rerun all checks**

Run: `npm run test:visual:update`

Expected: five baseline images are written.

Run: `npm run test:run`

Expected: all unit and interaction tests pass.

Run: `npm run build`

Expected: production build succeeds.

Run: `npm run test:visual`

Expected: unit tests, build, four homepage screenshots, and mobile-menu screenshot all pass.

- [ ] **Step 5: Inspect final runtime quality**

Verify no horizontal scrolling at 1440, 1024, 390, and 360 px; no console errors; keyboard focus is visible; mobile menu focus returns correctly; and Banner failure fallback preserves readable content.

- [ ] **Step 6: Commit**

Run: `git add playwright.config.ts tests src`

Run: `git commit -m "test: verify AskLume homepage fidelity"`

## Final verification

- [ ] Run `npm run test:run` — expected all unit and interaction tests pass.
- [ ] Run `npm run build` — expected production build succeeds.
- [ ] Run `npm run test:visual` — expected all five visual snapshots pass.
- [ ] Run `git status --short` — expected no uncommitted project changes.
- [ ] Compare the final page against all three files in `docs/superpowers/specs/references/` and confirm no unapproved visual additions.
