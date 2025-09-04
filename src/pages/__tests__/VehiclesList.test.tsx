import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { VehiclesList } from '../VehiclesList'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('VehiclesList', () => {
  it('renders vehicles from API', async () => {
    renderWithProviders(<VehiclesList />)

    expect(await screen.findByText(/Veículos/i)).toBeInTheDocument()

    expect(await screen.findByText('ABC1D23')).toBeInTheDocument()
    expect(await screen.findByText('EFG4H56')).toBeInTheDocument()
  })
})
