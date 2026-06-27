import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const LEAD_NOTIFICATION_EMAIL = 'swim@penguinswimschool.sg'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json()

    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, error: 'Name, email, and phone are required' }, { status: 400 })
    }

    const { error: insertError } = await supabaseAdmin
      .from('contact_submissions')
      .insert({ name, email, phone })

    if (insertError) {
      console.error('Error storing contact submission:', insertError)
      return NextResponse.json({ success: false, error: 'Failed to store submission' }, { status: 500 })
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: process.env.CONTACT_FROM_EMAIL || 'Penguin Academy <onboarding@resend.dev>',
          to: LEAD_NOTIFICATION_EMAIL,
          replyTo: email,
          subject: `New Academy enquiry from ${name}`,
          text: `New contact form submission from swimcoachcertification.com\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
        })
      } catch (emailError) {
        // Submission is already stored; don't fail the request if only the email step fails.
        console.error('Error sending lead notification email:', emailError)
      }
    } else {
      console.warn('RESEND_API_KEY not set — skipping email notification for contact submission')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
