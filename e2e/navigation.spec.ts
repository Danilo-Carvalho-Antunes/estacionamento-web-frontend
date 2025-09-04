import { test, expect } from '@playwright/test'

test('navegação por páginas principais via header', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

  await page.getByRole('link', { name: 'Estacionamentos' }).click()
  await expect(page.getByRole('heading', { name: 'Estacionamentos' })).toBeVisible()

  await page.getByRole('link', { name: 'Veículos' }).click()
  await expect(page.getByRole('heading', { name: 'Veículos' })).toBeVisible()

  await page.getByRole('link', { name: 'Cotação' }).click()
  await expect(page.getByRole('heading', { name: 'Cotação Pública' })).toBeVisible()
})
