export const dynamic = "force-dynamic";

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Do NOT initialize Stripe out here globally anymore!

export async function POST(req: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  
  // 1. Safety check for key availability before creation
  if (!process.env.STRIPE_SECRET_KEY || !webhookSecret) {
    console.error("Missing Stripe Environment Variables");
    return new NextResponse("Server Configuration Error", { status: 500 });
  }

  // 2. Initialize Stripe safely inside the runtime function scope
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-12-18.acacia",
  });

  const body = await req.text();
  const headerList = await headers();
  const signature = headerList.get("stripe-signature");

  if (!signature) {
    return new NextResponse("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;

    try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) { // Removed ": any"
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook Error: ${errorMessage}`);
    return new NextResponse(`Webhook Error: ${errorMessage}`, { status: 400 });
  }


  // Handle specific events
  switch (event.type) {
    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`Subscription ${subscription.id} updated.`);
      break;
    }
    case "customer.subscription.deleted":
      console.log(`Subscription cancelled.`);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
