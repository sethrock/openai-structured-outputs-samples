
import { services } from '@/config/data/demo-data'

export async function GET() {
  try {
    return new Response(JSON.stringify({ services }), {
      status: 200
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to fetch services' }), {
      status: 500
    })
  }
}
