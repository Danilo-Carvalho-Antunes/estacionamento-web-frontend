import { useEffect, useState, type ChangeEvent } from 'react'
import { Box, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'
import { getLots, getPricing } from '../services/lots'
import type { ParkingLotOut, PricingProfileOut } from '../types/common'
import { formatMoneyBRL } from '../utils/format'

export function Pricing() {
  const [lots, setLots] = useState<ParkingLotOut[]>([])
  const [lotId, setLotId] = useState<number | ''>('')
  const [profile, setProfile] = useState<PricingProfileOut | null>(null)

  useEffect(() => {
    getLots().then(setLots).catch(() => setLots([]))
  }, [])

  useEffect(() => {
    if (lotId) getPricing(Number(lotId)).then(setProfile).catch(() => setProfile(null))
  }, [lotId])

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Perfis de Preço
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            select
            label="Estacionamento"
            value={lotId}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLotId(Number(e.target.value))}
            fullWidth
          >
            {lots.map((lot: ParkingLotOut) => (
              <MenuItem key={lot.id} value={lot.id}>
                {lot.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {profile && (
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6">{profile.name}</Typography>
          <Typography>Fracao: {profile.fraction_minutes} min — {formatMoneyBRL(profile.fraction_rate)}</Typography>
          <Typography>Hora: {formatMoneyBRL(profile.hourly_rate)}</Typography>
          <Typography>Diária: {formatMoneyBRL(profile.daily_rate)}</Typography>
          <Typography>Noturna: {formatMoneyBRL(profile.nightly_rate)}</Typography>
        </Paper>
      )}
    </Box>
  )
}
