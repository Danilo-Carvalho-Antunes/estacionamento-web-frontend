import { test, expect } from '@playwright/test'

test('lista veículos com dados seedados', async ({ page }) => {
  await page.goto('/vehicles')
  await expect(page.getByRole('heading', { name: 'Veículos' })).toBeVisible()
  await expect(page.getByText('ABC1A23')).toBeVisible()
})
