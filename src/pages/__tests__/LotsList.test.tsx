import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { LotsList } from '../LotsList'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('LotsList', () => {
  it('renders table rows from API', async () => {
    renderWithProviders(<LotsList />)

    expect(await screen.findByText(/Estacionamentos/i)).toBeInTheDocument()

    // Two seeded lots from MSW handlers
    expect(await screen.findByText('Estacionamento Centro')).toBeInTheDocument()
    expect(await screen.findByText('Estacionamento Shopping')).toBeInTheDocument()
  })
})
