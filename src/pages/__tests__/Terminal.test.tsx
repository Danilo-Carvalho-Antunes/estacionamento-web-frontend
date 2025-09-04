import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Terminal } from '../Terminal'
import { SnackbarHost } from '../../components/SnackbarHost'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
      <SnackbarHost />
    </ThemeProvider>,
  )
}

describe('Terminal', () => {
  it('registers entry and exit when lot and plate are provided', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Terminal />)

    // Select parking lot
    const lotSelect = await screen.findByRole('combobox', { name: /estacionamento/i })
    await user.click(lotSelect)
    const listbox = await screen.findByRole('listbox')
    const option = within(listbox).getByRole('option', { name: /Estacionamento Centro/i })
    await user.click(option)

    // Type plate
    const plateInput = screen.getByLabelText(/Placa/i) as HTMLInputElement
    await user.clear(plateInput)
    await user.type(plateInput, 'ABC1D23')

    // Click Registrar Entrada
    const enterBtn = screen.getByRole('button', { name: /Registrar Entrada/i })
    expect(enterBtn).toBeEnabled()
    await user.click(enterBtn)

    // Wait for success snackbar and ensure plate is cleared
    await screen.findByText(/Entrada registrada com sucesso/i)
    expect(plateInput.value).toBe('')

    // Type another plate and click Registrar Saída
    await user.type(plateInput, 'EFG4H56')
    const exitBtn = screen.getByRole('button', { name: /Registrar Saída/i })
    expect(exitBtn).toBeEnabled()
    await user.click(exitBtn)

    // Wait for exit snackbar and ensure cleared again
    await screen.findByText(/Saída registrada\./i)
    expect(plateInput.value).toBe('')
  })
})
