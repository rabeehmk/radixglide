import { NextResponse } from "next/server";
import { enquirySummary, validateEnquiry, type Enquiry } from "@/lib/enquiry";

/**
 * Contact form endpoint.
 *
 * Enquiries are delivered to every provider configured through environment variables.
 * Nothing is faked: when no provider is configured the endpoint returns 503 with
 * `code: "not_configured"` and the form tells the visitor to use another channel.
 *
 *  - CONTACT_WEBHOOK_URL   POSTs the enquiry as JSON. Works with Zapier, Make, n8n,
 *                          Google Sheets (Apps Script), most CRMs and custom databases.
 *  - RESEND_API_KEY        Sends an email via Resend (https://resend.com).
 *    CONTACT_TO_EMAIL      Recipient inbox (required with RESEND_API_KEY).
 *    CONTACT_FROM_EMAIL    Verified sender, e.g. "RadixGlide <website@yourdomain.com>".
 */

async function sendWebhook(url: string, enquiry: Enquiry) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...enquiry, website: undefined, submittedAt: new Date().toISOString(), source: "radixglide-website" }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

async function sendEmail(enquiry: Enquiry) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "RadixGlide Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: enquiry.email,
      subject: `New enquiry: ${enquiry.service} — ${enquiry.name}`,
      text: enquirySummary(enquiry),
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Partial<Enquiry> | null;
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden honeypot field — accept silently, deliver nothing.
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateEnquiry(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, code: "invalid", errors }, { status: 400 });
  }

  const enquiry = body as Enquiry;
  const tasks: Promise<void>[] = [];
  if (process.env.CONTACT_WEBHOOK_URL) tasks.push(sendWebhook(process.env.CONTACT_WEBHOOK_URL, enquiry));
  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) tasks.push(sendEmail(enquiry));

  if (tasks.length === 0) {
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const results = await Promise.allSettled(tasks);
  if (results.every((r) => r.status === "rejected")) {
    console.error("[contact] delivery failed", results);
    return NextResponse.json({ ok: false, code: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
