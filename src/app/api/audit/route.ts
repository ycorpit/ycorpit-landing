import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Anthropic from "@anthropic-ai/sdk";

const TO = "contacts@ycorpit.com";
const CC = ["alex.yenza@ycorpit.com", "val.enz@ycorpit.com"];

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function analyzeWithAI(data: Record<string, string>): Promise<{ analysis: string; draftReply: string }> {
  const prompt = `You are a senior operations consultant at Ycorpit — a boutique ops consulting firm staffed by ex-engineers from large tech companies. A new client just submitted an audit request.

CLIENT DATA:
- Name: ${data.name}
- Company: ${data.company || "not provided"}
- Industry: ${data.industry}
- Team size: ${data.teamSize}
- Goals: ${data.goals}
- Budget: ${data.budget || "not specified"}
- Problem description: ${data.problem}
- Client-side estimate shown: ${data.estimate || "none"}

Respond in two clearly labeled sections:

---ANALYSIS---
Write a concise internal analyst note (4–6 sentences). Cover:
1. What the core operational problem actually is
2. What category of work this falls into (automation / integration / process redesign / AI / ops management)
3. Recommended first steps and likely scope
4. Any risks, red flags, or clarifying questions worth raising on the discovery call

---DRAFT REPLY---
Write a short, professional email from Ycorpit to the client. Tone: direct, expert, no fluff. Structure:
- 1 sentence acknowledging receipt and showing you understood their problem
- 2–3 sentences on your initial read of the situation (what you think is going on, what the likely fix category is)
- What happens next: we'll review in detail and send a precise proposal within 24 hours, then schedule a call to walk through scope and confirm deliverables before any work begins
- Sign off as "The Ycorpit Team"

Keep the draft reply under 150 words. Do not use em dashes. Do not mention pricing in the reply.`;

  const message = await anthropic.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 800,
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
  const goals = (data.goals || "").split(",").filter(Boolean).join(", ") || "—";
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Industry", data.industry],
    ["Team size", data.teamSize],
    ["Goals", goals],
    ["Budget", data.budget || "Not specified"],
  ];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #0a0a0a; color: #ededeb; margin: 0; padding: 32px; }
    .card { max-width: 640px; margin: 0 auto; background: #111; border: 1px solid #1a1a1a; border-radius: 4px; overflow: hidden; }
    .header { padding: 24px 28px; border-bottom: 1px solid #1a1a1a; }
    .header h1 { font-size: 20px; font-weight: 400; margin: 0; letter-spacing: -0.02em; }
    .header p { font-size: 12px; color: #707070; margin: 6px 0 0; font-family: monospace; letter-spacing: 0.05em; }
    .body { padding: 24px 28px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 14px; vertical-align: top; }
    td:first-child { width: 140px; color: #707070; font-family: monospace; font-size: 11px; letter-spacing: 0.05em; padding-top: 12px; }
    .box { background: #0a0a0a; border: 1px solid #1a1a1a; padding: 16px; margin-bottom: 24px; border-radius: 2px; }
    .box p { font-size: 13px; color: #ededeb; line-height: 1.65; margin: 0; white-space: pre-wrap; }
    .estimate-box { border-left: 2px solid #d4a93a; padding: 12px 16px; background: #0a0a0a; margin-bottom: 24px; }
    .estimate-box strong { color: #d4a93a; font-weight: 500; font-size: 18px; display: block; margin-bottom: 4px; font-family: monospace; }
    .ai-box { border-left: 2px solid #5b9cf6; padding: 12px 16px; background: #0a0a0a; margin-bottom: 24px; }
    .ai-box p { font-size: 13px; color: #ededeb; line-height: 1.7; margin: 0; white-space: pre-wrap; }
    .draft-box { border: 1px solid #2a2a2a; border-left: 3px solid #5b9cf6; padding: 20px; background: #0d0d0d; border-radius: 2px; }
    .draft-box p { font-size: 14px; color: #d0d0d0; line-height: 1.75; margin: 0; white-space: pre-wrap; }
    .section-label { font-size: 11px; color: #707070; font-family: monospace; letter-spacing: 0.08em; margin-bottom: 10px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New audit request</h1>
      <p>YCORPIT · ${new Date().toUTCString()}</p>
    </div>
    <div class="body">
      <table>
        ${rows.map(([label, value]) => `<tr><td>${label.toUpperCase()}</td><td>${value}</td></tr>`).join("")}
      </table>

      <p class="section-label">PROBLEM DESCRIPTION</p>
      <div class="box">
        <p>${(data.problem || "").replace(/\n/g, "<br>")}</p>
      </div>

      ${data.estimate ? `
      <p class="section-label">CLIENT-SIDE ESTIMATE SHOWN</p>
      <div class="estimate-box">
        <strong>${data.estimate}</strong>
        <p style="font-size:12px;color:#707070;margin:0;">Auto-calculated from form inputs. For reference only.</p>
      </div>
      ` : ""}

      <p class="section-label">AI ANALYST NOTE</p>
      <div class="ai-box">
        <p>${ai.analysis.replace(/\n/g, "<br>")}</p>
      </div>

      ${ai.draftReply ? `
      <p class="section-label">DRAFT REPLY TO CLIENT — review and send when ready</p>
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

    const [aiResult] = await Promise.all([
      analyzeWithAI(body),
    ]);

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
      from: `"Ycorpit Audit Form" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: TO,
      cc: CC.join(", "),
      replyTo: body.email ? `${body.name} <${body.email}>` : undefined,
      subject: `New audit request — ${body.name || "Anonymous"} (${body.company || body.industry || "unknown"})`,
      html: buildHtml(body, aiResult),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Audit error:", err);
    return NextResponse.json({ ok: false, error: "Failed to process" }, { status: 500 });
  }
}
