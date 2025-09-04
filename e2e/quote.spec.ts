import { test, expect } from '@playwright/test'

// Usa intervalo fixo dentro do horário de funcionamento do lote "Centro" (06:00 - 22:00)
const start = '2024-06-10T09:00'
const end = '2024-06-10T10:00'

test('calcula cotação 1h no Centro', async ({ page }) => {
  await page.goto('/quote')
  await expect(page.getByRole('heading', { name: 'Cotação Pública' })).toBeVisible()

  await page.getByLabel('Estacionamento').click()
  await page.getByRole('option', { name: 'Centro' }).click()

  await page.getByLabel('Entrada').fill(start)
  await page.getByLabel('Saída').fill(end)

  await page.getByRole('button', { name: 'Calcular' }).click()

  await expect(page.getByText('Valor:')).toBeVisible()
  await expect(page.getByText('Tipo de Cobrança:')).toBeVisible()
})
