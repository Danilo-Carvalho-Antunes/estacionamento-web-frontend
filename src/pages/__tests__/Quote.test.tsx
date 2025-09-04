import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Quote } from '../Quote'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('Quote', () => {
  it('calculates quote and shows value and charging type', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Quote />)

    // Select parking lot
    const lotSelect = await screen.findByRole('combobox', { name: /estacionamento/i })
    await user.click(lotSelect)
    const listbox = await screen.findByRole('listbox')
    const option = within(listbox).getByRole('option', { name: /Estacionamento Centro/i })
    await user.click(option)

    const calcBtn = await screen.findByRole('button', { name: /Calcular/i })
    await user.click(calcBtn)

    // Assert result area
    expect(await screen.findByText(/Tipo de Cobrança/i)).toBeInTheDocument()
    expect(await screen.findByText(/hourly/i)).toBeInTheDocument()
    // Currency formatted in pt-BR includes comma
    expect(await screen.findByText(/Valor:/i)).toBeInTheDocument()
  })
})
