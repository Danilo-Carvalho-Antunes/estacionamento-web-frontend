import { useEffect, useState } from 'react'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { getLots } from '../services/lots'
import type { ParkingLotOut } from '../types/common'
import { timeHHMM } from '../utils/datetime'

export function LotsList() {
  const [rows, setRows] = useState<ParkingLotOut[]>([])

  useEffect(() => {
    getLots().then(setRows).catch(() => setRows([]))
  }, [])

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Estacionamentos
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Abertura</TableCell>
              <TableCell>Fechamento</TableCell>
              <TableCell align="right">Capacidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} hover>
                <TableCell>{r.id}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell>{timeHHMM(r.open_at)}</TableCell>
                <TableCell>{timeHHMM(r.close_at)}</TableCell>
                <TableCell align="right">{r.capacity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
