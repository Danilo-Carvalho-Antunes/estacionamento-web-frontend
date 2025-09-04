import { test, expect } from '@playwright/test'

test('lista estacionamentos com dados seedados', async ({ page }) => {
  await page.goto('/lots')
  await expect(page.getByRole('heading', { name: 'Estacionamentos' })).toBeVisible()
  await expect(page.getByText('Centro')).toBeVisible()
  await expect(page.getByText('Aeroporto')).toBeVisible()
})
