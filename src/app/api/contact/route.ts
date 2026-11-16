import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Anthropic from "@anthropic-ai/sdk";

const TO = "contacts@ycorpit.com";
const CC = ["alex.yenza@ycorpit.com", "val.enz@ycorpit.com"];

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function analyzeWithAI(data: Record<string, string>): Promise<{ analysis: string; draftReply: string }> {
  const prompt = `You are the founder of YCorpIT — a small IT consulting firm for small and mid-sized businesses, offering three core services (Spend Audit for software/AI subscription waste, AI Chatbot Quality Check for testing customer-facing bots, and Workflow Automation for automating manual processes), plus FinOps audits and custom software by request. A new lead just submitted the contact form.

LEAD DATA:
- Name: ${data.name}
- Company: ${data.company || "not provided"}
- Email: ${data.email}
- Interested in: ${data.interests}
- Message: ${data.message}

Respond in two clearly labeled sections:

---ANALYSIS---
Write a concise internal note (3-5 sentences). Cover:
1. Which of the three services (if any) this lead most likely needs
2. What's unclear and worth asking on the call
3. Any red flags (out of scope, budget mismatch, unclear problem)

---DRAFT REPLY---
Write a short, professional email reply from YCorpIT to the lead. Tone: direct, plain English, no jargon, no fluff. Structure:
- 1 sentence acknowledging their message and showing you understood the problem
- 1-2 sentences on which service likely fits and why, in plain terms
- Invite them to book the free 20-minute call at https://cal.com/ycorpit-contacts, or say we'll follow up by email
- Sign off as "Alex, YCorpIT"

Keep the draft reply under 130 words. Do not use em dashes. Do not quote exact prices.`;

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 700,
    messages: [{ role: "user", content: prompt }],
  });

  const text = (message.content[0] as { text: string }).text;
  const analysisMatch = text.match(/---ANALYSIS---([\s\S]*?)---DRAFT REPLY---/);
  const draftMatch = text.match(/---DRAFT REPLY---([\s\S]*?)$/);

  return {
    analysis: analysisMatch?.[1]?.trim() ?? text,
    draftReply: draftMatch?.[1]?.trim() ?? "",
  };
}

function buildHtml(data: Record<string, string>, ai: { analysis: string; draftReply: string }) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Interested in", data.interests || "Not specified"],
  ];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f7f8fa; color: #1d1d1f; margin: 0; padding: 32px; }
    .card { max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e6e8eb; border-radius: 12px; overflow: hidden; }
    .header { padding: 24px 28px; border-bottom: 1px solid #e6e8eb; }
    .header h1 { font-size: 20px; font-weight: 700; margin: 0; letter-spacing: -0.02em; }
    .header p { font-size: 12px; color: #6e6e73; margin: 6px 0 0; letter-spacing: 0.03em; }
    .body { padding: 24px 28px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 10px 0; border-bottom: 1px solid #e6e8eb; font-size: 14px; vertical-align: top; }
    td:first-child { width: 140px; color: #6e6e73; font-size: 11px; letter-spacing: 0.04em; padding-top: 12px; }
    .box { background: #f7f8fa; border: 1px solid #e6e8eb; padding: 16px; margin-bottom: 24px; border-radius: 8px; }
    .box p { font-size: 13px; color: #1d1d1f; line-height: 1.65; margin: 0; white-space: pre-wrap; }
    .ai-box { border-left: 3px solid #0071e3; padding: 12px 16px; background: #f7f8fa; margin-bottom: 24px; border-radius: 0 8px 8px 0; }
    .ai-box p { font-size: 13px; color: #1d1d1f; line-height: 1.7; margin: 0; white-space: pre-wrap; }
    .draft-box { border: 1px solid #e6e8eb; border-left: 3px solid #0a8754; padding: 20px; background: #fdfdfd; border-radius: 0 8px 8px 0; }
    .draft-box p { font-size: 14px; color: #1d1d1f; line-height: 1.75; margin: 0; white-space: pre-wrap; }
    .section-label { font-size: 11px; color: #6e6e73; letter-spacing: 0.06em; margin-bottom: 10px; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New contact form submission</h1>
      <p>YCORPIT · ${new Date().toUTCString()}</p>
    </div>
    <div class="body">
      <table>
        ${rows.map(([label, value]) => `<tr><td>${label.toUpperCase()}</td><td>${value}</td></tr>`).join("")}
      </table>

      <p class="section-label">MESSAGE</p>
      <div class="box">
        <p>${(data.message || "").replace(/\n/g, "<br>")}</p>
      </div>

      <p class="section-label">AI ANALYST NOTE</p>
      <div class="ai-box">
        <p>${ai.analysis.replace(/\n/g, "<br>")}</p>
      </div>

      ${ai.draftReply ? `
      <p class="section-label">DRAFT REPLY — review and send when ready</p>
      <div class="draft-box">
        <p>${ai.draftReply.replace(/\n/g, "<br>")}</p>
      </div>
      ` : ""}
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const aiResult = await analyzeWithAI(body);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"YCorpIT Contact Form" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: TO,
      cc: CC.join(", "),
      replyTo: body.email ? `${body.name} <${body.email}>` : undefined,
      subject: `New contact form — ${body.name || "Anonymous"} (${body.company || "unknown"})`,
      html: buildHtml(body, aiResult),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ ok: false, error: "Failed to process" }, { status: 500 });
  }
}
