import { http } from './http'
import type { VehicleOut } from '../types/common'

export async function getVehicles(): Promise<VehicleOut[]> {
  const { data } = await http.get<VehicleOut[]>('/v1/vehicles')
  return data
}

export async function getVehicle(id: number): Promise<VehicleOut> {
  const { data } = await http.get<VehicleOut>(`/v1/vehicles/${id}`)
  return data
}
