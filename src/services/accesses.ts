import { http } from './http'
import type { AccessClosedResponse, AccessEnterRequest, AccessExitRequest, AccessOut } from '../types/access'

export async function enter(lotId: number, body: AccessEnterRequest): Promise<AccessOut> {
  const { data } = await http.post<AccessOut>(`/v1/lots/${lotId}/accesses/enter`, body)
  return data
}

export async function exitAccess(lotId: number, body: AccessExitRequest): Promise<AccessClosedResponse> {
  const { data } = await http.post<AccessClosedResponse>(`/v1/lots/${lotId}/accesses/exit`, body)
  return data
}
