# Premium Capabilities Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将首页平台能力区域的四张紧凑卡片升级为参考图中的大尺寸玻璃能力卡片，并保持桌面、平板、手机端稳定响应。

**Architecture:** 继续使用配置驱动的 `CapabilitiesSection`，将每个普通文章卡片替换为现有 `PointerGlowCard`，并在卡片内部增加无交互语义的装饰箭头。视觉层全部封装在现有 CSS Module 中，四种 3D 图形继续由 CSS 构建，不引入图片或新依赖。

**Tech Stack:** React 19、TypeScript、CSS Modules、Vitest、Testing Library、Playwright、Vite

---

## File Map

- Modify: `src/components/CapabilitiesSection.tsx` — 使用指针光晕卡片并渲染装饰箭头。
- Modify: `src/components/CapabilitiesSection.module.css` — 实现大尺寸玻璃布局、四种升级后的 CSS 3D 图形、悬停视差和响应式规则。
- Modify: `src/components/CapabilitiesSection.test.tsx` — 锁定装饰箭头、非交互语义和四种图形配置。
- Modify: `tests/visual/homepage.spec.ts` — 增加新版能力卡片结构与减少动态断言。
- Modify: `tests/visual/__snapshots__/darwin/chromium/*.png` — 经人工检查后更新四个页面视觉基准。

### Task 1: Lock the new semantic card contract

**Files:**
- Modify: `src/components/CapabilitiesSection.test.tsx`
- Modify: `src/components/CapabilitiesSection.tsx`

- [ ] **Step 1: Write the failing component test**

Add a test that requires every capability article to contain one decorative arrow, use the pointer-card CSS-variable contract, and expose no links or buttons:

```tsx
it('uses non-interactive pointer cards with one decorative arrow each', () => {
  render(<CapabilitiesSection />)

  const articles = screen.getAllByRole('article')
  expect(articles).toHaveLength(4)
  expect(screen.queryAllByRole('link')).toHaveLength(0)
  expect(screen.queryAllByRole('button')).toHaveLength(0)

  articles.forEach((article) => {
    expect(article).toHaveStyle({ '--pointer-x': '50%', '--pointer-y': '50%' })
    expect(article.querySelectorAll('[data-capability-arrow]')).toHaveLength(1)
    expect(article.querySelector('[data-capability-arrow]')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })
})
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```bash
npm run test:run -- src/components/CapabilitiesSection.test.tsx
```

Expected: FAIL because cards do not yet use `PointerGlowCard` and have no decorative arrow.

- [ ] **Step 3: Implement the minimal semantic structure**

In `CapabilitiesSection.tsx`:

```tsx
import { PointerGlowCard } from './PointerGlowCard'

<PointerGlowCard
  aria-labelledby={headingId}
  className={styles.card}
  data-art-type={capability.art}
  key={capability.title}
>
  <span className={styles.icon} aria-hidden="true">
    <Icon name={capability.icon} size={27} />
  </span>
  <div className={styles.copy}>
    <h3 id={headingId}>{capability.title}</h3>
    <p>{capability.description}</p>
  </div>
  <span
    aria-hidden="true"
    className={styles.arrow}
    data-capability-arrow=""
  >
    →
  </span>
  <span aria-hidden="true" className={styles.art} data-art={capability.art}>
    <i />
    <i />
    <i />
  </span>
</PointerGlowCard>
```

Remove the old `data-flow` attribute because the new reference treats cards as independent modules.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run:

```bash
npm run test:run -- src/components/CapabilitiesSection.test.tsx
```

Expected: all `CapabilitiesSection` tests PASS.

- [ ] **Step 5: Commit the semantic change**

```bash
git add src/components/CapabilitiesSection.tsx src/components/CapabilitiesSection.test.tsx
git commit -m "refactor: upgrade capability card semantics"
```

### Task 2: Build the premium desktop glass composition

**Files:**
- Modify: `src/components/CapabilitiesSection.module.css`

- [ ] **Step 1: Add the new four-column card layout**

Implement these desktop rules:

```css
.inner {
  width: min(calc(100% - 48px), var(--content-width));
  padding: 8px 0 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
  gap: 20px;
}

.card {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  min-height: 198px;
  padding: 25px 22px 54px;
  overflow: hidden;
  border: 1px solid rgba(96, 111, 171, 0.12);
  border-radius: 20px;
  background:
    radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(130, 155, 255, 0.10), transparent 42%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(244, 247, 255, 0.88));
  box-shadow: 0 24px 64px rgba(32, 44, 100, 0.09), inset 0 1px 0 #fff;
}
```

Remove the old card-to-card `::after` chevrons.

- [ ] **Step 2: Upgrade typography, icon and decorative arrow**

Use a 46px icon tile, 16px card headings, 11.5–12px descriptions, and an absolutely positioned left-bottom arrow. The arrow must keep `pointer-events: none` and have no interactive styling.

- [ ] **Step 3: Enlarge all four CSS artworks**

Set `.art` to approximately `112px × 92px`, right/bottom aligned, with:

```css
transform: translate3d(
  calc(var(--depth-x) * -6px),
  calc(var(--depth-y) * -5px),
  0
);
transition: transform 320ms cubic-bezier(0.2, 0.75, 0.2, 1), filter 320ms ease;
```

Scale the existing platform, ring, cubes and orb child shapes proportionally to fill this surface. Add stronger glass highlights, semi-transparent borders and soft landing shadows without changing the `data-art` discriminants.

- [ ] **Step 4: Add restrained hover behavior**

Under `(hover: hover) and (pointer: fine)`, apply at most `translateY(-4px)`, a slightly stronger border/shadow, a modest art saturation increase, and `translateX(3px)` on the decorative arrow.

- [ ] **Step 5: Add reduced-motion overrides**

```css
@media (prefers-reduced-motion: reduce) {
  .card,
  .art,
  .arrow {
    transition: none;
  }

  .card:hover,
  .card:hover .art,
  .card:hover .arrow {
    transform: none;
  }
}
```

- [ ] **Step 6: Run the component tests and build**

```bash
npm run test:run -- src/components/CapabilitiesSection.test.tsx src/components/PointerGlowCard.test.tsx
npm run build
```

Expected: focused tests PASS and build exits 0.

- [ ] **Step 7: Commit desktop visual implementation**

```bash
git add src/components/CapabilitiesSection.module.css
git commit -m "feat: redesign premium capability cards"
```

### Task 3: Calibrate tablet and mobile layouts

**Files:**
- Modify: `src/components/CapabilitiesSection.module.css`
- Modify: `tests/visual/homepage.spec.ts`

- [ ] **Step 1: Add a failing visual structure assertion**

Extend the existing boundary helper so capability cards assert 2 columns at 769px and 1 column at 768px. Add a reduced-motion assertion that hovers the first capability card and expects both card and art transforms to be `none`.

- [ ] **Step 2: Run boundary and reduced-motion tests and verify RED**

```bash
npx playwright test tests/visual/homepage.spec.ts --grep "768px|769px|premium capability motion"
```

Expected: the new reduced-motion check FAILS before the CSS override is complete, or the structure check catches the old layout if still present.

- [ ] **Step 3: Implement responsive CSS**

At `max-width: 1023px`, use a centered two-column grid with cards around 176px high. At `max-width: 768px`, use a single column, 150–170px cards, safe right padding for the art, no horizontal connector arrows, and a smaller 3D art surface. At `max-width: 380px`, reduce art scale and card padding while preserving readable copy width.

- [ ] **Step 4: Run boundary and reduced-motion tests and verify GREEN**

```bash
npx playwright test tests/visual/homepage.spec.ts --grep "768px|769px|premium capability motion"
```

Expected: all selected tests PASS.

- [ ] **Step 5: Commit responsive calibration**

```bash
git add src/components/CapabilitiesSection.module.css tests/visual/homepage.spec.ts
git commit -m "fix: calibrate capability card breakpoints"
```

### Task 4: Update approved visual baselines

**Files:**
- Modify: `tests/visual/__snapshots__/darwin/chromium/homepage-desktop-wide-1440.png`
- Modify: `tests/visual/__snapshots__/darwin/chromium/homepage-desktop-reference-1024.png`
- Modify: `tests/visual/__snapshots__/darwin/chromium/homepage-mobile-390.png`
- Modify: `tests/visual/__snapshots__/darwin/chromium/homepage-mobile-narrow-360.png`

- [ ] **Step 1: Generate current screenshots without accepting them**

```bash
npx playwright test tests/visual/homepage.spec.ts --grep "matches the approved responsive composition"
```

Expected: the four screenshot comparisons FAIL because the intended design changed.

- [ ] **Step 2: Inspect all four actual screenshots**

Verify manually that:

- 1440px shows one row of four large cards matching the supplied reference.
- 1024px uses a balanced two-column layout.
- 390px and 360px use one column with no text/art overlap.
- CTA and footer remain unchanged.
- There is no document-level horizontal overflow.

- [ ] **Step 3: Update the baselines after visual approval**

```bash
npm run test:visual:update
```

Expected: all visual tests PASS while writing the four changed snapshot files.

- [ ] **Step 4: Run visual regression again without update mode**

```bash
npm run test:visual
```

Expected: all Playwright tests PASS.

- [ ] **Step 5: Commit visual baselines**

```bash
git add tests/visual/homepage.spec.ts tests/visual/__snapshots__/darwin/chromium
git commit -m "test: approve premium capability card visuals"
```

### Task 5: Final verification and GitHub publication

**Files:**
- Verify all modified files

- [ ] **Step 1: Run the full unit and component suite**

```bash
npm run test:run
```

Expected: all test files and tests PASS with zero failures.

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

Expected: TypeScript and Vite build exit 0.

- [ ] **Step 3: Run the full visual suite**

```bash
npm run test:visual
```

Expected: all Playwright tests PASS.

- [ ] **Step 4: Audit the final diff**

```bash
git diff --check
git status -sb
git log --oneline origin/codex/premium-card-redesign..HEAD
```

Expected: no whitespace errors, no uncommitted files, and only the capability-card commits are ahead of the remote.

- [ ] **Step 5: Push the collaboration branch**

```bash
git push origin codex/premium-card-redesign
```

Expected: push succeeds and Pull Request #3 receives the new commits.

