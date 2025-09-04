export interface ContractorOut {
  id: number
  name: string
}

export interface ParkingLotOut {
  id: number
  contractor_id: number
  name: string
  open_at: string // "HH:MM:SS"
  close_at: string // "HH:MM:SS"
  capacity: number
}

export interface PricingProfileOut {
  id: number
  parking_lot_id: number
  name: string
  fraction_minutes: number
  fraction_rate: string // Decimal serialized as string
  hourly_rate: string
  daily_rate: string
  nightly_rate: string
}

export interface VehicleOut {
  id: number
  plate: string
  owner_name?: string | null
}

export interface EventOut {
  id: number
  parking_lot_id: number
  name: string
  starts_at: string // ISO
  ends_at: string // ISO
  price: string
}

export interface QuoteResponse {
  lot_id: number
  start_at: string // ISO
  end_at: string // ISO
  charged_value: string
  charging_type: string
}
