import { http, HttpResponse } from 'msw'

const lots = [
  { id: 1, contractor_id: 1, name: 'Estacionamento Centro', open_at: '08:00:00', close_at: '20:00:00', capacity: 100 },
  { id: 2, contractor_id: 1, name: 'Estacionamento Shopping', open_at: '10:00:00', close_at: '22:00:00', capacity: 200 },
]

const pricingByLot: Record<number, any> = {
  1: {
    id: 1,
    parking_lot_id: 1,
    name: 'Padrão',
    fraction_minutes: 15,
    fraction_rate: '5.00',
    hourly_rate: '12.00',
    daily_rate: '50.00',
    nightly_rate: '30.00',
  },
  2: {
    id: 2,
    parking_lot_id: 2,
    name: 'Especial',
    fraction_minutes: 10,
    fraction_rate: '6.00',
    hourly_rate: '14.00',
    daily_rate: '60.00',
    nightly_rate: '35.00',
  },
}

const vehicles = [
  { id: 1, plate: 'ABC1D23', owner_name: 'João' },
  { id: 2, plate: 'EFG4H56', owner_name: 'Maria' },
]

export const handlers = [
  http.get('/v1/health', () => HttpResponse.json({ status: 'ok' })),

  http.get('/v1/lots', () => HttpResponse.json(lots)),

  http.get<{ id: string }>('/v1/lots/:id', ({ params }) => {
    const id = Number(params.id)
    const lot = lots.find((l) => l.id === id)
    if (!lot) return HttpResponse.json({ detail: 'Not found' }, { status: 404 })
    return HttpResponse.json(lot)
  }),

  http.get<{ id: string }>('/v1/lots/:id/pricing', ({ params }) => {
    const id = Number(params.id)
    const pricing = pricingByLot[id]
    if (!pricing) return HttpResponse.json({ detail: 'Not found' }, { status: 404 })
    return HttpResponse.json(pricing)
  }),

  http.get('/v1/vehicles', () => HttpResponse.json(vehicles)),

  http.get<{ lotId: string }>('/v1/lots/:lotId/quote', ({ request, params }: { request: Request; params: { lotId: string } }) => {
    const lotId = Number(params.lotId)
    const url = new URL(request.url)
    const start_at = url.searchParams.get('start_at') ?? new Date().toISOString()
    const end_at = url.searchParams.get('end_at') ?? new Date().toISOString()
    return HttpResponse.json({
      lot_id: lotId,
      start_at,
      end_at,
      charged_value: '12.00',
      charging_type: 'hourly',
    })
  }),

  http.post<{ lotId: string }>('/v1/lots/:lotId/accesses/enter', async ({ params, request }: { params: { lotId: string }; request: Request }) => {
    const lotId = Number(params.lotId)
    const body = (await request.json()) as { plate: string }
    const now = new Date().toISOString()
    return HttpResponse.json({
      id: Math.floor(Math.random() * 1000) + 1,
      vehicle_id: 1,
      parking_lot_id: lotId,
      start_at: now,
      end_at: null,
      price: null,
      status: 'open',
      plate: body.plate,
    })
  }),

  http.post<{ lotId: string }>('/v1/lots/:lotId/accesses/exit', async ({ params, request }: { params: { lotId: string }; request: Request }) => {
    const _lotId = Number(params.lotId)
    const _body = (await request.json()) as { plate: string }
    return HttpResponse.json({
      id: Math.floor(Math.random() * 1000) + 1,
      charged_value: '10.00',
      charging_type: 'fraction',
    })
  }),

  // Future endpoints (placeholders)
  http.get('/v1/events', () =>
    HttpResponse.json([
      { id: 1, name: 'Show no Centro', start_at: '2025-09-10T20:00:00Z', end_at: '2025-09-11T02:00:00Z' },
    ]),
  ),
  http.get('/v1/associates', () =>
    HttpResponse.json([
      { id: 1, name: 'Empresa XPTO', cnpj: '00.000.000/0001-00', vehicles: 12 },
    ]),
  ),
  http.get('/v1/reports/summary', () =>
    HttpResponse.json({ total_revenue: '12345.67', open_accesses: 3, closed_accesses: 42 }),
  ),
]
