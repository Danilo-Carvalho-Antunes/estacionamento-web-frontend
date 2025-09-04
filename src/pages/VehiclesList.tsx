import { useEffect, useState } from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { getVehicles } from '../services/vehicles'
import type { VehicleOut } from '../types/common'

export function VehiclesList() {
  const [rows, setRows] = useState<VehicleOut[]>([])

  useEffect(() => {
    getVehicles().then(setRows).catch(() => setRows([]))
  }, [])

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Veículos
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Placa</TableCell>
              <TableCell>Proprietário</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} hover>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.plate}</TableCell>
                <TableCell>{r.owner_name || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
