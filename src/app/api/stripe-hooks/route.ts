import { NextRequest, NextResponse } from "next/server";
import initStripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new initStripe(process.env.Stripe_SECRET_KEY!);
  const signature = req.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

  const reqBuffer = Buffer.from(await req.arrayBuffer());

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      reqBuffer,
      signature!,
      endpointSecret!
    );
    // switch (event.type) {
    //   case "customer.subscription.created":
    //     const customerSubscriptionCreated = event.data.object;
    //     // Then define and call a function to handle the event customer.subscription.created
    //     break;
    //   case "customer.subscription.deleted":
    //     const customerSubscriptionDeleted = event.data.object;
    //     // Then define and call a function to handle the event customer.subscription.deleted
    //     break;
    //   case "customer.subscription.updated":
    //     const customerSubscriptionUpdated = event.data.object;
    //     // Then define and call a function to handle the event customer.subscription.updated
    //     break;
    //   // ... handle other event types
    //   default:
    //     console.log(`Unhandled event type ${event.type}`);
    // }

    console.log(event);
    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json(`{Webhook Error: ${err.message}`, { status: 401 });
  }
}
