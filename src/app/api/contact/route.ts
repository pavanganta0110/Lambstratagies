import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, serviceInterest, budgetRange, projectTimeline, message, website } = body;

    // 1. Honeypot Spam Protection
    // The 'website' field is hidden on the UI. If a bot fills it in, we reject the request silently.
    if (website) {
      console.warn("Honeypot field triggered: potential spam block.");
      return NextResponse.json(
        { success: true, message: "Request received." },
        { status: 200 }
      );
    }

    // 2. Required Field Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !email.trim()) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }
    if (!serviceInterest || !serviceInterest.trim()) {
      return NextResponse.json({ error: "Service interest is required." }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    // 3. Email Format Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    // 4. Initialize Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const ccEmail = process.env.CONTACT_CC_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Email service is currently unavailable. Please try again later." },
        { status: 500 }
      );
    }

    if (!toEmail || !ccEmail || !fromEmail) {
      console.error("Missing CONTACT_TO_EMAIL, CONTACT_CC_EMAIL, or CONTACT_FROM_EMAIL environment variables.");
      return NextResponse.json(
        { error: "Email configuration is incorrect." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // 5. Send email using Resend
    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      cc: ccEmail,
      replyTo: email,
      subject: "New Consultation Request from Lamb Strategy Website",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Consultation Request</title>
            <style>
              body { font-family: sans-serif; color: #1e293b; line-height: 1.5; margin: 0; padding: 20px; background-color: #f8fafc; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 30px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
              h2 { color: #0F294A; border-bottom: 2px solid #38bdf8; padding-bottom: 10px; margin-top: 0; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #475569; display: block; font-size: 13px; text-transform: uppercase; margin-bottom: 3px; }
              .value { color: #0f172a; font-size: 15px; background: #f1f5f9; padding: 8px 12px; border-radius: 4px; display: block; white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Consultation Request</h2>
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${escapeHtml(name)}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${escapeHtml(email)}</span>
              </div>
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${escapeHtml(phone || "Not Provided")}</span>
              </div>
              <div class="field">
                <span class="label">Company:</span>
                <span class="value">${escapeHtml(company || "Not Provided")}</span>
              </div>
              <div class="field">
                <span class="label">Service Interest:</span>
                <span class="value">${escapeHtml(serviceInterest)}</span>
              </div>
              <div class="field">
                <span class="label">Budget Range:</span>
                <span class="value">${escapeHtml(budgetRange || "Not Provided")}</span>
              </div>
              <div class="field">
                <span class="label">Project Timeline:</span>
                <span class="value">${escapeHtml(projectTimeline || "Not Provided")}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <span class="value">${escapeHtml(message)}</span>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return NextResponse.json(
        { error: "Failed to send message via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: emailResponse.data });
  } catch (error) {
    console.error("Contact API route unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

// Simple helper to escape HTML and prevent potential HTML injection in email body
function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
