import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../../pages/Dashboard'

describe('Dashboard', () => {
  it('renders title and links', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Terminal do Operador/i })).toBeInTheDocument()
  })
})
