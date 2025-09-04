import dayjs from 'dayjs'

export function toISOFromLocalInput(value: string): string {
  // value is expected in 'YYYY-MM-DDTHH:mm' local time
  return dayjs(value).toISOString()
}

export function timeHHMM(value: string): string {
  // expects 'HH:MM:SS'
  return value ? value.slice(0, 5) : ''
}
