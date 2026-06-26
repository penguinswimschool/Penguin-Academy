# Stripe Checkout Setup Guide

## Prerequisites

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
STRIPE_SECRET_KEY=sk_test_your_test_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_test_publishable_key_here
```

## Creating Products and Prices in Stripe

1. Go to your Stripe Dashboard
2. Navigate to Products > Add Product
3. Create the following products with their corresponding prices:

### Product 1: Penguin Pro Bundle
- Name: "Penguin Pro Swim Teacher Pathway – Full Certification Bundle"
- Price: $2,888.00 USD
- One-time payment

### Product 2: SSI Level 1
- Name: "SSI Swim Teacher Level 1 Certification"
- Price: $1,288.00 USD
- One-time payment

### Product 3: SSI Level 2
- Name: "SSI Swim Teacher Level 2 Certification"
- Price: $1,288.00 USD
- One-time payment

### Product 4: Baby & Me
- Name: "Baby & Me Swim Instructor Course"
- Price: $888.00 USD
- One-time payment

### Product 5: Adult Swim
- Name: "Adult Swim Instructor Course"
- Price: $888.00 USD
- One-time payment

### Product 6: React Right
- Name: "React Right (CPR, AED, First Aid)"
- Price: $199.00 USD
- One-time payment

## Update Price IDs

After creating the products in Stripe, copy the Price IDs and update them in `lib/stripe-config.ts`:

```typescript
export const products: StripeProduct[] = [
  {
    id: 'bundle',
    name: 'Penguin Pro Swim Teacher Pathway – Full Certification Bundle',
    priceId: 'price_ACTUAL_STRIPE_PRICE_ID_HERE', // Replace with real price ID
    mode: 'payment',
    description: 'Complete certification bundle including all SSI courses'
  },
  // ... update all other products
];
```

## Testing

1. Use Stripe's test card numbers for testing:
   - Test card: 4242 4242 4242 4242
   - Expiry: Any future date
   - CVC: Any 3 digits

2. The checkout will redirect to your success page after payment

## Production Deployment

1. Switch to live mode in Stripe Dashboard
2. Update environment variables with live keys
3. Update price IDs with live price IDs
4. Configure webhook endpoints for production

## Troubleshooting

- Check browser console for detailed error messages
- Verify Stripe API keys are correct
- Ensure price IDs match exactly with Stripe Dashboard
- Check that all environment variables are set correctly 