import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

interface Props {
  label?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  disabled?: boolean
}

export function PlateTextField({ label = 'Placa', value, onChange, required, disabled }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.toUpperCase()
    const filtered = raw.replace(/[^A-Z0-9-]/g, '').slice(0, 8)
    onChange(filtered)
  }

  const inputProps: TextFieldProps['inputProps'] = {
    inputMode: 'text',
    pattern: '[A-Z0-9-]{7,8}',
    placeholder: 'ABC1D23',
  }

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      inputProps={inputProps}
      fullWidth
    />
  )
}
