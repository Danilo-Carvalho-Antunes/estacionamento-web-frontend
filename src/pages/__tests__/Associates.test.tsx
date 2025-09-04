import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Associates } from '../Associates'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('Associates', () => {
  it('renders placeholder text', () => {
    renderWithProviders(<Associates />)
    expect(screen.getByText(/Mensalistas — Em desenvolvimento/i)).toBeInTheDocument()
  })
})
