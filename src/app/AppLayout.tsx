import { AppBar, Box, Container, IconButton, LinearProgress, Link as MLink, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useUIStore } from '../store/ui'

export function AppLayout() {
  const { pathname } = useLocation()
  const { loading } = useUIStore()
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Estacionamento Web
          </Typography>
          <MLink component={Link} to="/dashboard" color="inherit" underline={pathname === '/dashboard' ? 'always' : 'hover'} sx={{ ml: 2 }}>
            Dashboard
          </MLink>
          <MLink component={Link} to="/terminal" color="inherit" underline={pathname === '/terminal' ? 'always' : 'hover'} sx={{ ml: 2 }}>
            Terminal
          </MLink>
          <MLink component={Link} to="/lots" color="inherit" underline={pathname.startsWith('/lots') ? 'always' : 'hover'} sx={{ ml: 2 }}>
            Estacionamentos
          </MLink>
          <MLink component={Link} to="/vehicles" color="inherit" underline={pathname.startsWith('/vehicles') ? 'always' : 'hover'} sx={{ ml: 2 }}>
            Veículos
          </MLink>
          <MLink component={Link} to="/quote" color="inherit" underline={pathname.startsWith('/quote') ? 'always' : 'hover'} sx={{ ml: 2 }}>
            Cotação
          </MLink>
        </Toolbar>
        {loading && <LinearProgress />}
      </AppBar>
      <Container sx={{ mt: 3, mb: 6 }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ mt: 'auto', py: 2, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="caption">© {new Date().getFullYear()} Estacionamento Web</Typography>
      </Box>
    </Box>
  )
}
