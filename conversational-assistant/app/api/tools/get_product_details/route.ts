
import { serviceDetails } from '@/config/data/demo-data'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const serviceId = url.searchParams.get('serviceId')

    const service = serviceDetails.find(service => service.id === serviceId)
    return new Response(JSON.stringify({ service }), {
      status: 200
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to find service' }), {
      status: 500
    })
  }
}
