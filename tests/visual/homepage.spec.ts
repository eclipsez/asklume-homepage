import { expect, test, type Page } from '@playwright/test'

const viewports = [
  { name: 'desktop-wide-1440', width: 1440, height: 1100 },
  { name: 'desktop-reference-1024', width: 1024, height: 1200 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-narrow-360', width: 360, height: 800 },
] as const

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

for (const viewport of viewports) {
  test(`${viewport.name} matches the approved responsive composition`, async ({
    page,
  }) => {
    const consoleErrors: string[] = []
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })

    await page.setViewportSize(viewport)
    await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
    await page.goto('/')
    await settlePage(page)

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
    await expect(
      page.locator('section[aria-label="AskLume AI品牌影响力看板"]:visible'),
    ).toHaveCount(1)
    await expect(
      page.locator('input[placeholder*="输入企业在AI中的可见性"]:visible'),
    ).toHaveCount(1)
    expect(consoleErrors).toEqual([])

    await expect(page).toHaveScreenshot(`homepage-${viewport.name}.png`, {
      fullPage: true,
    })
  })
}

test('mobile menu at 390px matches the approved dialog composition', async ({
  page,
}) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' })
  await page.goto('/')
  await settlePage(page)
  await page.getByRole('button', { name: '打开菜单' }).click()

  const dialog = page.getByRole('dialog', { name: '网站导航' })
  await expect(dialog).toBeVisible()
  await expect(dialog).toHaveScreenshot('homepage-mobile-menu-390.png', {
    maxDiffPixelRatio: 0.01,
  })
  expect(consoleErrors).toEqual([])
})
