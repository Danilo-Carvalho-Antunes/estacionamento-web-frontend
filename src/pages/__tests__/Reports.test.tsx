import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { Reports } from '../Reports'

function renderWithProviders(ui: React.ReactElement) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {ui}
    </ThemeProvider>,
  )
}

describe('Reports', () => {
  it('renders placeholder text', () => {
    renderWithProviders(<Reports />)
    expect(screen.getByText(/Relatórios — Em desenvolvimento/i)).toBeInTheDocument()
  })
})
