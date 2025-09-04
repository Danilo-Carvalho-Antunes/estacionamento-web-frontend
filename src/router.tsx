import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from './app/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Terminal } from './pages/Terminal'
import { LotsList } from './pages/LotsList'
import { Pricing } from './pages/Pricing'
import { VehiclesList } from './pages/VehiclesList'
import { Quote } from './pages/Quote'
import { Events } from './pages/Events'
import { Associates } from './pages/Associates'
import { Reports } from './pages/Reports'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'terminal', element: <Terminal /> },
      { path: 'lots', element: <LotsList /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'vehicles', element: <VehiclesList /> },
      { path: 'quote', element: <Quote /> },
      { path: 'events', element: <Events /> },
      { path: 'associates', element: <Associates /> },
      { path: 'reports', element: <Reports /> },
    ],
  },
])
