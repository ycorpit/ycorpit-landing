import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO = "contacts@ycorpit.com";
const CC = ["alex.yenza@ycorpit.com", "val.enz@ycorpit.com"];

function buildHtml(data: Record<string, string>) {
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
    body { font-family: 'Geist', Arial, sans-serif; background: #0a0a0a; color: #ededeb; margin: 0; padding: 32px; }
    .card { max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #1a1a1a; border-radius: 4px; overflow: hidden; }
    .header { padding: 24px 28px; border-bottom: 1px solid #1a1a1a; }
    .header h1 { font-size: 20px; font-weight: 400; margin: 0; letter-spacing: -0.02em; }
    .header p { font-size: 12px; color: #707070; margin: 6px 0 0; font-family: monospace; letter-spacing: 0.05em; }
    .body { padding: 24px 28px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 14px; vertical-align: top; }
    td:first-child { width: 140px; color: #707070; font-family: monospace; font-size: 11px; letter-spacing: 0.05em; padding-top: 12px; }
    .problem-box { background: #0a0a0a; border: 1px solid #1a1a1a; padding: 16px; margin-bottom: 24px; border-radius: 2px; }
    .problem-box p { font-size: 13px; color: #ededeb; line-height: 1.65; margin: 0; }
    .estimate-box { border-left: 2px solid #d4a93a; padding: 12px 16px; background: #0a0a0a; }
    .estimate-box p { font-size: 13px; color: #707070; margin: 0; line-height: 1.6; }
    .estimate-box strong { color: #d4a93a; font-weight: 500; font-size: 20px; display: block; margin-bottom: 4px; font-family: monospace; }
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

      <p style="font-size:11px;color:#707070;font-family:monospace;letter-spacing:0.05em;margin-bottom:10px;">PROBLEM DESCRIPTION</p>
      <div class="problem-box">
        <p>${(data.problem || "").replace(/\n/g, "<br>")}</p>
      </div>

      ${data.estimate ? `
      <p style="font-size:11px;color:#707070;font-family:monospace;letter-spacing:0.05em;margin-bottom:10px;">CLIENT-SIDE ESTIMATE</p>
      <div class="estimate-box">
        <strong>${data.estimate}</strong>
        <p>Auto-calculated from form inputs. Use as a starting point only.</p>
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
      html: buildHtml(body),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
