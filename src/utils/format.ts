export function formatMoneyBRL(value: string | number): string {
  const num = typeof value === 'string' ? Number(value) : value
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number.isFinite(num) ? num : 0)
}
