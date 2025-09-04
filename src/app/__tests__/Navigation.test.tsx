import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../AppLayout'
import { Dashboard } from '../../pages/Dashboard'
import { Terminal } from '../../pages/Terminal'
import { LotsList } from '../../pages/LotsList'
import { Quote } from '../../pages/Quote'

function renderApp(initial: string) {
  const theme = createTheme()
  return render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter initialEntries={[initial]}>
        <Routes>
          <Route path="/" element={<AppLayout />}> 
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="terminal" element={<Terminal />} />
            <Route path="lots" element={<LotsList />} />
            <Route path="quote" element={<Quote />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ThemeProvider>,
  )
}

describe('Navigation', () => {
  it('navigates via top bar links', async () => {
    const user = userEvent.setup()
    renderApp('/dashboard')

    // Starts on Dashboard
    expect(await screen.findByRole('heading', { level: 4, name: /Dashboard/i })).toBeInTheDocument()

    // Go to Terminal (exact match to avoid 'Terminal do Operador' button)
    await user.click(screen.getByRole('link', { name: /^Terminal$/ }))
    expect(await screen.findByRole('heading', { level: 4, name: /Terminal do Operador/i })).toBeInTheDocument()

    // Go to Estacionamentos
    await user.click(screen.getByRole('link', { name: /Estacionamentos/i }))
    expect(await screen.findByRole('heading', { level: 4, name: /Estacionamentos/i })).toBeInTheDocument()

    // Go to Cotação
    await user.click(screen.getByRole('link', { name: /Cotação/i }))
    expect(await screen.findByRole('heading', { level: 4, name: /Cotação Pública/i })).toBeInTheDocument()
  })
})
