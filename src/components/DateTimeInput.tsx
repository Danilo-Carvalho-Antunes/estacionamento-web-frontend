import { TextField } from '@mui/material'
import dayjs from 'dayjs'
import React from 'react'

interface Props {
  label?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  disabled?: boolean
}

export function DateTimeInput({ label = 'Data/Hora', value, onChange, required, disabled }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value)
  }

  return (
    <TextField
      type="datetime-local"
      label={label}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      fullWidth
      InputLabelProps={{ shrink: true }}
    />
  )
}

export function nowLocalInput(): string {
  return dayjs().format('YYYY-MM-DDTHH:mm')
}

export function addHoursLocalInput(hours: number): string {
  return dayjs().add(hours, 'hour').format('YYYY-MM-DDTHH:mm')
}
