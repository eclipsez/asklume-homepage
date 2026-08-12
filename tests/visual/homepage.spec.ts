import { expect, test, type Page } from '@playwright/test'

const viewports = [
  { name: 'desktop-wide-1440', width: 1440, height: 1100 },
  { name: 'desktop-reference-1024', width: 1024, height: 1200 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-narrow-360', width: 360, height: 800 },
] as const

const boundaryViewports = [
  { width: 768, height: 900, mobileNavigation: true },
  { width: 769, height: 900, mobileNavigation: false },
  { width: 900, height: 1000, mobileNavigation: false },
  { width: 901, height: 1000, mobileNavigation: false },
] as const

interface RuntimeErrors {
  console: string[]
  page: string[]
}

function collectRuntimeErrors(page: Page): RuntimeErrors {
  const runtimeErrors: RuntimeErrors = { console: [], page: [] }

  page.on('console', (message) => {
    if (message.type() === 'error') runtimeErrors.console.push(message.text())
  })
  page.on('pageerror', (error) => runtimeErrors.page.push(error.message))

  return runtimeErrors
}

async function settlePage(page: Page) {
  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => {
    await document.fonts.ready
    const pendingImages = Array.from(document.images)
      .filter((image) => !image.complete)
      .map(
        (image) =>
          new Promise<void>((resolve) => {
            image.addEventListener('load', () => resolve(), { once: true })
            image.addEventListener('error', () => resolve(), { once: true })
          }),
      )

    await Promise.all(pendingImages)
  })
}

async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => ({
    bodyClientWidth: document.body.clientWidth,
    bodyScrollWidth: document.body.scrollWidth,
    documentClientWidth: document.documentElement.clientWidth,
    documentScrollWidth: document.documentElement.scrollWidth,
  }))

  expect(overflow.bodyScrollWidth, JSON.stringify(overflow)).toBeLessThanOrEqual(
    overflow.bodyClientWidth,
  )
  expect(
    overflow.documentScrollWidth,
    JSON.stringify(overflow),
  ).toBeLessThanOrEqual(overflow.documentClientWidth)
}

async function expectOneVisibleDashboardAndPrompt(page: Page) {
  await expect(
    page.locator('section[aria-label="AskLume AI品牌影响力看板"]:visible'),
  ).toHaveCount(1)
  await expect(
    page.locator('input[placeholder*="输入企业在AI中的可见性"]:visible'),
  ).toHaveCount(1)
}

function expectNoRuntimeErrors(runtimeErrors: RuntimeErrors) {
  expect(runtimeErrors.console).toEqual([])
  expect(runtimeErrors.page).toEqual([])
}

for (const viewport of viewports) {
  test(`${viewport.name} matches the approved responsive composition`, async ({
    page,
  }) => {
    const runtimeErrors = collectRuntimeErrors(page)

    await page.setViewportSize(viewport)
    await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
    await page.goto('/')
    await settlePage(page)

    await expectNoHorizontalOverflow(page)
    await expectOneVisibleDashboardAndPrompt(page)

    await expect(page).toHaveScreenshot(`homepage-${viewport.name}.png`, {
      fullPage: true,
    })
    expectNoRuntimeErrors(runtimeErrors)
  })
}

for (const viewport of boundaryViewports) {
  test(`${viewport.width}px preserves responsive boundary behavior`, async ({
    page,
  }) => {
    const runtimeErrors = collectRuntimeErrors(page)

    await page.setViewportSize(viewport)
    await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
    await page.goto('/')
    await settlePage(page)

    await expectNoHorizontalOverflow(page)
    await expectOneVisibleDashboardAndPrompt(page)

    const menuButton = page.getByRole('button', { name: '打开菜单' })
    const desktopNavigation = page.getByRole('navigation', { name: '主导航' })
    if (viewport.mobileNavigation) {
      await expect(menuButton).toBeVisible()
      await expect(desktopNavigation).toBeHidden()
    } else {
      await expect(menuButton).toBeHidden()
      await expect(desktopNavigation).toBeVisible()
    }

    expectNoRuntimeErrors(runtimeErrors)
  })
}

test('mobile menu at 390px matches the approved dialog composition', async ({
  page,
}) => {
  const runtimeErrors = collectRuntimeErrors(page)

  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
  await page.goto('/')
  await settlePage(page)
  await page.getByRole('button', { name: '打开菜单' }).click()

  const dialog = page.getByRole('dialog', { name: '网站导航' })
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveScreenshot('homepage-mobile-menu-390.png', {
    maxDiffPixelRatio: 0.005,
  })
  expectNoRuntimeErrors(runtimeErrors)
})
