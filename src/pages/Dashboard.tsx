import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export function Dashboard() {
  const links = [
    { to: '/terminal', label: 'Terminal do Operador' },
    { to: '/lots', label: 'Gestão de Estacionamentos' },
    { to: '/vehicles', label: 'Veículos' },
    { to: '/pricing', label: 'Perfis de Preço' },
    { to: '/quote', label: 'Cotação Pública' },
    { to: '/events', label: 'Eventos' },
    { to: '/associates', label: 'Mensalistas' },
    { to: '/reports', label: 'Relatórios' },
  ]
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {links.map((l) => (
          <Grid item key={l.to} xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>{l.label}</Typography>
              <Button variant="contained" component={Link} to={l.to} aria-label={l.label}>
                Abrir
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

