import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Pricing } from '../Pricing'
import type { ReactElement } from 'react'

function renderWithProviders(ui: ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('Pricing', () => {
  it('loads pricing profile after selecting lot', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Pricing />)

    // Select parking lot
    const lotSelect = await screen.findByRole('combobox', { name: /estacionamento/i })
    await user.click(lotSelect)
    const listbox = await screen.findByRole('listbox')
    const option = within(listbox).getByRole('option', { name: /Estacionamento Centro/i })
    await user.click(option)

    // Assert profile detail fields are shown
    expect(await screen.findByText(/Fracao:/i)).toBeInTheDocument()
    expect(await screen.findByText(/Hora:/i)).toBeInTheDocument()
    expect(await screen.findByText(/Diária:/i)).toBeInTheDocument()
    expect(await screen.findByText(/Noturna:/i)).toBeInTheDocument()
  })
})
