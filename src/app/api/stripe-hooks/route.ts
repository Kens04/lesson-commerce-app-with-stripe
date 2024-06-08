import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("webhook dispatch");

  return NextResponse.json({ received: true });
}

const stripe = require('stripe')('sk_test_...');


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_829513b2cb58557327860ab5ba218063bb20112796b26e6a6646438a0986eacb";


  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.created':
      const customerSubscriptionCreated = event.data.object;
      // Then define and call a function to handle the event customer.subscription.created
      break;
    case 'customer.subscription.deleted':
      const customerSubscriptionDeleted = event.data.object;
      // Then define and call a function to handle the event customer.subscription.deleted
      break;
    case 'customer.subscription.updated':
      const customerSubscriptionUpdated = event.data.object;
      // Then define and call a function to handle the event customer.subscription.updated
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }