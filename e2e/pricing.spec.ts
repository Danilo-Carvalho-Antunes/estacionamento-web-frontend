import { test, expect } from '@playwright/test'

test('exibe perfil de preços ao selecionar estacionamento', async ({ page }) => {
  await page.goto('/pricing')
  await expect(page.getByRole('heading', { name: 'Perfis de Preço' })).toBeVisible()

  await page.getByLabel('Estacionamento').click()
  await page.getByRole('option', { name: 'Centro' }).click()

  await expect(page.getByRole('heading', { name: 'Padrão' })).toBeVisible()
  await expect(page.getByText('Hora:')).toBeVisible()
})
