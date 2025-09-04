import { useEffect, useState } from 'react'
import { Box, Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { getLots, getQuote } from '../services/lots'
import type { ParkingLotOut, QuoteResponse } from '../types/common'
import { DateTimeInput, addHoursLocalInput, nowLocalInput } from '../components/DateTimeInput'
import { toISOFromLocalInput } from '../utils/datetime'
import { formatMoneyBRL } from '../utils/format'

export function Quote() {
  const [lots, setLots] = useState<ParkingLotOut[]>([])
  const [lotId, setLotId] = useState<number | ''>('')
  const [startAt, setStartAt] = useState(nowLocalInput())
  const [endAt, setEndAt] = useState(addHoursLocalInput(1))
  const [result, setResult] = useState<QuoteResponse | null>(null)

  useEffect(() => {
    getLots().then(setLots).catch(() => setLots([]))
  }, [])

  async function handleQuote() {
    if (!lotId) return
    const payload = { start_at: toISOFromLocalInput(startAt), end_at: toISOFromLocalInput(endAt) }
    try {
      const res = await getQuote(Number(lotId), payload)
      setResult(res)
    } catch (e) {
      setResult(null)
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Cotação Pública
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField select label="Estacionamento" value={lotId} onChange={(e) => setLotId(Number(e.target.value))} fullWidth>
            {lots.map((lot) => (
              <MenuItem key={lot.id} value={lot.id}>
                {lot.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <DateTimeInput label="Entrada" value={startAt} onChange={setStartAt} />
        </Grid>
        <Grid item xs={12} md={4}>
          <DateTimeInput label="Saída" value={endAt} onChange={setEndAt} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleQuote} disabled={!lotId}>
            Calcular
          </Button>
        </Grid>
      </Grid>

      {result && (
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography>Valor: {formatMoneyBRL(result.charged_value)}</Typography>
          <Typography>Tipo de Cobrança: {result.charging_type}</Typography>
        </Paper>
      )}
    </Box>
  )
}
