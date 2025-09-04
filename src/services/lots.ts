import { http } from './http'
import type { ParkingLotOut, PricingProfileOut, QuoteResponse } from '../types/common'

export async function getLots(): Promise<ParkingLotOut[]> {
  const { data } = await http.get<ParkingLotOut[]>('/v1/lots')
  return data
}

export async function getLot(id: number): Promise<ParkingLotOut> {
  const { data } = await http.get<ParkingLotOut>(`/v1/lots/${id}`)
  return data
}

export async function getPricing(lotId: number): Promise<PricingProfileOut> {
  const { data } = await http.get<PricingProfileOut>(`/v1/lots/${lotId}/pricing`)
  return data
}

export async function getQuote(
  lotId: number,
  params: { start_at: string; end_at: string },
): Promise<QuoteResponse> {
  const { data } = await http.get<QuoteResponse>(`/v1/lots/${lotId}/quote`, { params })
  return data
}
