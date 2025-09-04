export interface AccessEnterRequest {
  plate: string
  start_at?: string
}

export interface AccessExitRequest {
  plate: string
  end_at?: string
}

export interface AccessOut {
  id: number
  vehicle_id: number
  parking_lot_id: number
  start_at: string
  end_at?: string | null
  price?: string | null
  status: string
}

export interface AccessClosedResponse {
  id: number
  charged_value: string
  charging_type: string
}
