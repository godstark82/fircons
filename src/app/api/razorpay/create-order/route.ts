import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getRegistrationFeePaise } from "@/lib/fees";

export async function POST(req: NextRequest) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay is not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET." },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { category, country, email, fullName } = body || {};

    if (!category || !country || !email || !fullName) {
      return NextResponse.json(
        { error: "category, country, email, and fullName are required" },
        { status: 400 },
      );
    }

    const amountPaise = getRegistrationFeePaise(category, country);

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: amountPaise,
      currency: "INR",
      receipt: `reg_${Date.now()}`,
      notes: {
        category,
        country,
        email,
        fullName,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (error: any) {
    console.error("Razorpay create-order error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create payment order" },
      { status: 500 },
    );
  }
}
