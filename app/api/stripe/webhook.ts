import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Invoice } from '@/entities/invoice'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

// Create admin client for auto-enrollment operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!
  const body = await req.text()
  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  if (event.type === 'invoice.paid') {
    const invoice = event.data.object as Stripe.Invoice
    console.log(`Received invoice.paid webhook for invoice: ${invoice.id}`)
    
    if (typeof invoice.id === 'string') {
      // Update invoice status
      await Invoice.syncFromStripe(invoice.id, 'paid', new Date().toISOString().split('T')[0])
      
      // Handle auto-enrollment
      await handleAutoEnrollment(invoice.id)
    } else {
      console.error('Stripe invoice.id is not a string:', invoice.id)
    }
  } else if (event.type === 'invoice.payment_failed') {
    const invoice = event.data.object as Stripe.Invoice
    console.log(`Received invoice.payment_failed webhook for invoice: ${invoice.id}`)
    
    if (typeof invoice.id === 'string') {
      await Invoice.syncFromStripe(invoice.id, 'overdue')
    } else {
      console.error('Stripe invoice.id is not a string:', invoice.id)
    }
  } else if (event.type === 'invoice.sent') {
    const invoice = event.data.object as Stripe.Invoice
    console.log(`Received invoice.sent webhook for invoice: ${invoice.id}`)
    
    if (typeof invoice.id === 'string') {
      await Invoice.syncFromStripe(invoice.id, 'open')
    } else {
      console.error('Stripe invoice.id is not a string:', invoice.id)
    }
  }
  // Add more event types as needed

  return NextResponse.json({ received: true })
}

// Handle auto-enrollment when invoice is paid
async function handleAutoEnrollment(stripeInvoiceId: string) {
  try {
    // Find the local invoice record
    const { data: invoice, error: invoiceError } = await supabaseAdmin
      .from('invoices')
      .select(`
        *,
        client_id,
        class_id,
        enrollment_id
      `)
      .eq('stripe_invoice_id', stripeInvoiceId)
      .single()

    if (invoiceError) {
      console.error('Error finding invoice for auto-enrollment:', invoiceError)
      return
    }

    if (!invoice) {
      console.log('No local invoice found for Stripe invoice:', stripeInvoiceId)
      return
    }

    // If this invoice has an enrollment_id, update the enrollment payment status
    if (invoice.enrollment_id) {
      const { error: enrollmentError } = await supabaseAdmin
        .from('class_enrollments')
        .update({ 
          payment_status: 'paid',
          updated_at: new Date().toISOString()
        })
        .eq('id', invoice.enrollment_id)

      if (enrollmentError) {
        console.error('Error updating enrollment payment status:', enrollmentError)
      } else {
        console.log(`Auto-enrollment completed for enrollment ${invoice.enrollment_id}`)
        
        // Optionally update client status to 'enrolled' if they were 'confirmed'
        if (invoice.client_id) {
          const { data: client } = await supabaseAdmin
            .from('client_signups')
            .select('status')
            .eq('id', invoice.client_id)
            .single()

          if (client?.status === 'confirmed') {
            await supabaseAdmin
              .from('client_signups')
              .update({ 
                status: 'enrolled',
                updated_at: new Date().toISOString()
              })
              .eq('id', invoice.client_id)
            
            console.log(`Client status updated to 'enrolled' for client ${invoice.client_id}`)
          }
        }
      }
    }
  } catch (error) {
    console.error('Error in auto-enrollment process:', error)
  }
}