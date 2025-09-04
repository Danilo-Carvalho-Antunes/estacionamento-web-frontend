import { useEffect, useState, type ChangeEvent } from 'react'
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { PlateTextField } from '../components/PlateTextField'
import { useUIStore } from '../store/ui'
import { getLots } from '../services/lots'
import { enter, exitAccess } from '../services/accesses'
import type { ParkingLotOut } from '../types/common'

export function Terminal() {
  const [lots, setLots] = useState<ParkingLotOut[]>([])
  const [lotId, setLotId] = useState<number | ''>('')
  const [plate, setPlate] = useState('')
  const { loading, setLoading, openSnackbar } = useUIStore()

  useEffect(() => {
    getLots()
      .then(setLots)
      .catch((e) => openSnackbar(`Falha ao carregar estacionamentos: ${e.message}`, 'error'))
  }, [openSnackbar])

  const canSubmit = Boolean(lotId && plate.length >= 7)

  async function handleEnter() {
    if (!canSubmit) return
    setLoading(true)
    try {
      await enter(Number(lotId), { plate })
      openSnackbar('Entrada registrada com sucesso!', 'success')
      setPlate('')
    } catch (e: any) {
      openSnackbar(e.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  async function handleExit() {
    if (!canSubmit) return
    setLoading(true)
    try {
      const res = await exitAccess(Number(lotId), { plate })
      openSnackbar(`Saída registrada. Valor: ${res.charged_value} (${res.charging_type})`, 'success')
      setPlate('')
    } catch (e: any) {
      openSnackbar(e.message, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Terminal do Operador
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            select
            label="Estacionamento"
            value={lotId}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLotId(e.target.value ? Number(e.target.value) : '')}
            fullWidth
          >
            {lots.map((lot: ParkingLotOut) => (
              <MenuItem key={lot.id} value={lot.id}>
                {lot.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <PlateTextField value={plate} onChange={setPlate} required />
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleEnter} disabled={!canSubmit || loading}>
            Registrar Entrada
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleExit} disabled={!canSubmit || loading}>
            Registrar Saída
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
