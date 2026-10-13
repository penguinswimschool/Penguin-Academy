import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: 'Public account registration is not available.' }, { status: 403 })
}
