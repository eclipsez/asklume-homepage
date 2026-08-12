# Premium Card Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the ordinary benefit and pillar cards with the approved premium glass-art composition, remove the customer-logo strip, and add restrained pointer-responsive depth without changing unrelated homepage content.

**Architecture:** Add one focused `PointerGlowCard` primitive that owns pointer-coordinate CSS variables and reduced-motion-safe reset behavior. Keep all content in the existing typed configuration, rebuild the two section renderers around decorative glass assets, and isolate the visual system in their CSS Modules. Remove the obsolete trust strip from the app and delete its dead configuration only after tests prove no consumer remains.

**Tech Stack:** React 19, TypeScript, CSS Modules, Motion, Vitest, Testing Library, Playwright, transparent PNG/WebP assets.

---

### Task 1: Remove the customer case strip

**Files:**
- Modify: `src/App.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/BenefitsSection.test.tsx`
- Delete: `src/components/TrustStrip.tsx`
- Delete: `src/components/TrustStrip.module.css`
- Modify: `src/content/homeContent.ts`
- Modify: `src/content/homeContent.test.ts`

- [ ] **Step 1: Write the failing page test**

Add a regression assertion to `src/App.test.tsx`:

```tsx
it('does not render the removed customer case strip', () => {
  render(<App />)

  expect(screen.queryByRole('region', { name: '客户信赖' })).not.toBeInTheDocument()
  expect(screen.queryByText('值得信赖的选择 · 为全球领先企业提供AI认知基线设施')).not.toBeInTheDocument()
})
```

Update `BenefitsSection.test.tsx` so it renders only `BenefitsSection` and no longer imports or asserts `TrustStrip`/`trustBrands`. Remove the `trustBrands` contract test and type from `homeContent.test.ts`.

- [ ] **Step 2: Run the focused tests to verify red**

Run:

```bash
npm run test:run -- src/App.test.tsx src/components/BenefitsSection.test.tsx src/content/homeContent.test.ts
```

Expected: FAIL because the customer case strip still renders.

- [ ] **Step 3: Remove the strip and dead content**

Delete the `TrustStrip` import and `<TrustStrip />` line from `src/App.tsx`. Delete `TrustStrip.tsx` and its CSS module. Delete `TrustBrand` and `trustBrands` from `homeContent.ts` once `rg "trustBrands|TrustStrip" src` confirms no remaining runtime consumer.

- [ ] **Step 4: Run focused tests to verify green**

Run the same focused Vitest command.

Expected: all selected tests pass and `rg "trustBrands|TrustStrip" src` returns no runtime matches.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/App.test.tsx src/components/BenefitsSection.test.tsx src/content/homeContent.ts src/content/homeContent.test.ts
git add -u src/components/TrustStrip.tsx src/components/TrustStrip.module.css
git commit -m "refactor: remove customer case strip"
```

### Task 2: Build the pointer-responsive premium card primitive

**Files:**
- Create: `src/components/PointerGlowCard.tsx`
- Create: `src/components/PointerGlowCard.module.css`
- Create: `src/components/PointerGlowCard.test.tsx`

- [ ] **Step 1: Write failing interaction tests**

Create `PointerGlowCard.test.tsx`:

```tsx
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PointerGlowCard } from './PointerGlowCard'

describe('PointerGlowCard', () => {
  it('exposes pointer coordinates as local CSS variables', () => {
    render(<PointerGlowCard aria-label="高级卡片">内容</PointerGlowCard>)
    const card = screen.getByLabelText('高级卡片')
    Object.defineProperty(card, 'getBoundingClientRect', {
      value: () => ({ left: 10, top: 20, width: 200, height: 100 }),
    })

    fireEvent.pointerMove(card, { clientX: 160, clientY: 45 })

    expect(card).toHaveStyle({ '--pointer-x': '75%', '--pointer-y': '25%' })
  })

  it('returns its glow to the center when the pointer leaves', () => {
    render(<PointerGlowCard aria-label="高级卡片">内容</PointerGlowCard>)
    const card = screen.getByLabelText('高级卡片')

    fireEvent.pointerLeave(card)

    expect(card).toHaveStyle({ '--pointer-x': '50%', '--pointer-y': '50%' })
  })
})
```

- [ ] **Step 2: Run the focused test to verify red**

Run:

```bash
npm run test:run -- src/components/PointerGlowCard.test.tsx
```

Expected: FAIL because `PointerGlowCard` does not exist.

- [ ] **Step 3: Implement the minimal typed primitive**

Create a component that accepts `ComponentPropsWithoutRef<'article'>`, calculates the pointer percentage relative to its own bounds, clamps it between 0 and 100, and writes `--pointer-x`, `--pointer-y`, `--depth-x`, and `--depth-y` through inline custom properties. Reset all values on pointer leave. The wrapper must remain a semantic `<article>` and must not add button/link behavior.

Core handler:

```tsx
const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))
  const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100))
  event.currentTarget.style.setProperty('--pointer-x', `${x}%`)
  event.currentTarget.style.setProperty('--pointer-y', `${y}%`)
  event.currentTarget.style.setProperty('--depth-x', `${(x - 50) / 50}`)
  event.currentTarget.style.setProperty('--depth-y', `${(y - 50) / 50}`)
}
```

The CSS module supplies only the shared positioned container, hidden overflow, glow pseudo-element, and reduced-motion reset. Section-specific surfaces remain in each section module.

- [ ] **Step 4: Run the focused test to verify green**

Run the same focused Vitest command.

Expected: 2 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/components/PointerGlowCard.tsx src/components/PointerGlowCard.module.css src/components/PointerGlowCard.test.tsx
git commit -m "feat: add pointer glow card primitive"
```

### Task 3: Reconstruct and prepare the glass art assets

**Files:**
- Create: `src/assets/glass/glass-loop-source.png`
- Create: `src/assets/glass/glass-bloom-source.png`
- Create: `src/assets/glass/glass-ribbon-source.png`
- Create: `src/assets/glass/glass-loop.webp`
- Create: `src/assets/glass/glass-bloom.webp`
- Create: `src/assets/glass/glass-ribbon.webp`

- [ ] **Step 1: Generate three isolated source assets**

Use the user-provided reference image as a style and shape reference. Generate three separate blue-violet translucent glass sculptures on a perfectly flat chroma-key backdrop: a looped liquid form, a five-lobed bloom, and a flowing ribbon. Require generous padding, no text, no shadow, no floor, no watermark, and no backdrop color inside the subjects.

- [ ] **Step 2: Remove the chroma key and validate alpha**

Run the bundled `remove_chroma_key.py` helper on each source. Validate with an image inspector that every output has an alpha channel, fully transparent corners, no green fringe, and intact translucent glass edges. If glass transparency cannot survive local extraction, stop and ask before using the native-transparency CLI fallback.

- [ ] **Step 3: Produce optimized WebP assets**

Convert each validated transparent PNG to lossless transparent WebP, preserving the PNG sources as design artifacts. Confirm each WebP opens correctly and is materially smaller than its PNG source.

- [ ] **Step 4: Commit**

```bash
git add src/assets/glass
git commit -m "feat: add premium glass art assets"
```

### Task 4: Rebuild the benefit cards

**Files:**
- Modify: `src/components/BenefitsSection.tsx`
- Modify: `src/components/BenefitsSection.module.css`
- Modify: `src/components/BenefitsSection.test.tsx`

- [ ] **Step 1: Write failing structure tests**

Add assertions that all three benefit articles expose `data-glass-art`, contain no existing icon tile SVG, keep the exact configured headings/descriptions/links, and retain three unique article labels:

```tsx
const articles = screen.getAllByRole('article')
expect(articles).toHaveLength(3)
expect(articles.map((article) => article.getAttribute('data-glass-art'))).toEqual([
  'loop',
  'bloom',
  'ribbon',
])
expect(document.querySelectorAll('[data-benefit-icon]')).toHaveLength(0)
```

- [ ] **Step 2: Run the focused test to verify red**

Run:

```bash
npm run test:run -- src/components/BenefitsSection.test.tsx
```

Expected: FAIL because the cards still use icon tiles and lack glass-art metadata.

- [ ] **Step 3: Rebuild the renderer**

Use `PointerGlowCard` for each article. Use `useId()` to connect every article to its contained heading. Map the three fixed art names by card index, render decorative `<img alt="" aria-hidden="true">` assets, preserve exact copy and href values, and remove `Icon` from this component.

- [ ] **Step 4: Rebuild the visual surface**

Implement the approved three-column composition at 901+, centered single-column layout at 769–900, and mobile single-column layout at 768 and below. Use an inset highlight, multi-layer shadow, local pointer radial gradient, art transforms derived from `--depth-x/y`, safe text zones per card, and a reduced-motion override. Keep focus-visible treatment on links.

- [ ] **Step 5: Run focused tests and build**

```bash
npm run test:run -- src/components/BenefitsSection.test.tsx src/components/PointerGlowCard.test.tsx
npm run build
```

Expected: focused tests and production build pass.

- [ ] **Step 6: Commit**

```bash
git add src/components/BenefitsSection.tsx src/components/BenefitsSection.module.css src/components/BenefitsSection.test.tsx
git commit -m "feat: redesign premium benefit cards"
```

### Task 5: Rebuild the numbered pillar cards

**Files:**
- Modify: `src/components/PillarsSection.tsx`
- Modify: `src/components/PillarsSection.module.css`
- Modify: `src/components/PillarsSection.test.tsx`

- [ ] **Step 1: Write failing hierarchy tests**

Add assertions for visible `01`, `02`, `03` numbers, `data-sequence` values, preserved heading associations, exactly one lead line and three bullet lines per card, and decorative flow elements hidden from accessibility APIs.

```tsx
expect(screen.getAllByTestId('pillar-sequence').map((node) => node.textContent)).toEqual([
  '01',
  '02',
  '03',
])
expect(screen.getAllByRole('article').map((article) => article.dataset.sequence)).toEqual([
  '01',
  '02',
  '03',
])
```

- [ ] **Step 2: Run the focused test to verify red**

Run:

```bash
npm run test:run -- src/components/PillarsSection.test.tsx
```

Expected: FAIL because the current cards have no sequence numbers or new hierarchy.

- [ ] **Step 3: Rebuild the renderer**

Use `PointerGlowCard`. Render the formatted sequence number, title, first configured line as a lead paragraph, remaining three lines as list items, and one decorative glass image selected by card index. Preserve `useId()` and `aria-labelledby`. Remove the old icon map and `Icon` dependency.

- [ ] **Step 4: Rebuild the visual surface and connectors**

Match the reference card proportions and text hierarchy. Draw desktop connector tracks through grid-level pseudo-elements plus per-card circular nodes; switch connectors to vertical at 900 and below. Keep connectors and art decorative. Add pointer glow/depth and reduced-motion rules consistent with the benefits cards.

- [ ] **Step 5: Run focused tests and build**

```bash
npm run test:run -- src/components/PillarsSection.test.tsx src/components/PointerGlowCard.test.tsx
npm run build
```

Expected: focused tests and production build pass.

- [ ] **Step 6: Commit**

```bash
git add src/components/PillarsSection.tsx src/components/PillarsSection.module.css src/components/PillarsSection.test.tsx
git commit -m "feat: redesign numbered pillar cards"
```

### Task 6: Calibrate responsive fidelity and complete verification

**Files:**
- Modify: `tests/visual/homepage.spec.ts`
- Modify: `tests/visual/homepage.spec.ts-snapshots/darwin/chromium/*.png`
- Modify only if measurements require it: `src/components/BenefitsSection.module.css`
- Modify only if measurements require it: `src/components/PillarsSection.module.css`

- [ ] **Step 1: Add failing browser assertions**

Add assertions that the customer case strip is absent, both target grids are three columns at 901 and one column at 900, numbered pillars are visible, no page-level horizontal overflow exists at 1440/1024/390/360, and reduced motion produces `transform: none` on the card/art hover layers.

- [ ] **Step 2: Run targeted browser tests to verify red where applicable**

```bash
npm run test:visual -- --grep "premium card layout"
```

Expected: new visual/layout contract fails until snapshots and any remaining responsive mismatches are corrected.

- [ ] **Step 3: Inspect real screenshots and calibrate**

Capture 1440, 1024, 390, and 360 widths. Compare card height, content safe zones, glass-art crop, number baseline, connector positions, section rhythm, and pointer hover state against the approved reference. Adjust only the two section CSS modules.

- [ ] **Step 4: Run the complete verification suite**

```bash
npm run test:run
npm run build
npm run test:visual
git diff --check
```

Expected: all unit tests, production build, and visual tests pass; diff check produces no output.

- [ ] **Step 5: Audit the final diff and commit**

Confirm `git status --short` lists only files from this plan and that no generated temp/chroma files live outside `src/assets/glass`. Then commit calibrated snapshots and CSS:

```bash
git add tests/visual src/components/BenefitsSection.module.css src/components/PillarsSection.module.css
git commit -m "test: verify premium card fidelity"
```
