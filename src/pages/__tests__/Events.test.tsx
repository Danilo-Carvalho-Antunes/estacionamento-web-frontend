import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Events } from '../Events'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('Events', () => {
  it('renders placeholder text', () => {
    renderWithProviders(<Events />)
    expect(screen.getByText(/Eventos — Em desenvolvimento/i)).toBeInTheDocument()
  })
})
