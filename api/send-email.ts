import type { VercelRequest, VercelResponse } from "@vercel/node";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const FROM_EMAIL = "Nooh Quran Academy <noreply@info.noohquranlearningcentre.com>";
const ADMIN_EMAIL = "sarwarhafizusman83@gmail.com";

function buildUserEmailHTML(name: string, plan: string, whatsapp: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f4f6fa;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6fa;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(37,60,132,0.08);">
        <tr><td style="background:linear-gradient(135deg,#1a2a5e 0%,#2d4a9e 50%,#253c84 100%);padding:36px 40px 28px;text-align:center;">
          <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Nooh Quran Academy</h1>
        </td></tr>
        <tr><td style="padding:32px 40px 16px;">
          <h2 style="margin:0 0 8px;font-size:20px;font-weight:700;color:#1a2a5e;">Assalamu Alaikum, ${name} 🌙</h2>
          <p style="margin:0 0 24px;font-size:15px;color:#6b7280;line-height:1.7;">
            JazakAllahu Khairan for reaching out. We've received your details and someone from our team will get in touch with you shortly.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fc;border-radius:12px;border:1px solid #e8ecf4;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#2d4a9e;">Your Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;width:100px;">Plan</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;font-weight:600;"><span style="background:linear-gradient(135deg,#2d4a9e,#3b5fc9);color:#fff;padding:3px 10px;border-radius:20px;font-size:12px;">${plan}</span></td></tr>
                ${whatsapp ? `<tr><td style="padding:6px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:100px;">WhatsApp</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;">${whatsapp}</td></tr>` : ""}
                ${message ? `<tr><td style="padding:6px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:100px;vertical-align:top;">Message</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;line-height:1.5;border-top:1px solid #e8ecf4;">${message}</td></tr>` : ""}
              </table>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:20px 40px 28px;">
          <p style="margin:0 0 6px;font-size:14px;color:#4b5563;line-height:1.6;">We'll reach out within 24 hours to schedule your free trial In Sha Allah.</p>
        </td></tr>
        <tr><td style="padding:0 40px 32px;text-align:left;">
          <a href="https://wa.me/18255954870" style="display:inline-block;background:linear-gradient(135deg,#2d4a9e 0%,#3b5fc9 100%);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:600;">Chat on WhatsApp →</a>
        </td></tr>
        <tr><td style="background:#f8f9fc;padding:20px 40px;border-top:1px solid #e8ecf4;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Nooh Quran Academy — Learn Quran with Expert Guidance</p>
          <p style="margin:6px 0 0;font-size:11px;color:#b0b8c9;">Powered by <a href="https://creativebilal.com" style="color:#2d4a9e;text-decoration:none;">Creative Bilal</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildAdminEmailHTML(name: string, email: string, plan: string, whatsapp: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f4f6fa;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6fa;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(37,60,132,0.08);">
        <tr><td style="background:linear-gradient(135deg,#1a2a5e 0%,#253c84 100%);padding:28px 40px;text-align:left;">
          <h1 style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">📩 New Inquiry Received</h1>
        </td></tr>
        <tr><td style="padding:28px 40px 16px;">
          <p style="margin:0 0 20px;font-size:15px;color:#4b5563;line-height:1.6;">A new student has submitted an inquiry through the website.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fc;border-radius:12px;border:1px solid #e8ecf4;">
            <tr><td style="padding:20px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;width:100px;">Name</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;font-weight:600;">${name}</td></tr>
                <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:100px;">Email</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;">${email}</td></tr>
                <tr><td style="padding:6px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:100px;">Plan</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;"><span style="background:#2d4a9e;color:#fff;padding:3px 10px;border-radius:20px;font-size:12px;">${plan}</span></td></tr>
                ${whatsapp ? `<tr><td style="padding:6px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:100px;">WhatsApp</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;">${whatsapp}</td></tr>` : ""}
                ${message ? `<tr><td style="padding:6px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:100px;vertical-align:top;">Message</td><td style="padding:6px 0;font-size:14px;color:#1a2a5e;line-height:1.5;border-top:1px solid #e8ecf4;">${message}</td></tr>` : ""}
              </table>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 40px 28px;text-align:left;">
          <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#2d4a9e 0%,#3b5fc9 100%);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:10px;font-size:14px;font-weight:600;">Reply to ${name} →</a>
        </td></tr>
        <tr><td style="background:#f8f9fc;padding:16px 40px;border-top:1px solid #e8ecf4;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Nooh Quran Academy — Admin Notification</p>
          <p style="margin:6px 0 0;font-size:11px;color:#b0b8c9;">Powered by <a href="https://creativebilal.com" style="color:#2d4a9e;text-decoration:none;">Creative Bilal</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, plan, whatsapp, message } = req.body;

    if (!name || !email || !plan) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const userHtml = buildUserEmailHTML(name, plan, whatsapp || "", message || "");
    const adminHtml = buildAdminEmailHTML(name, email, plan, whatsapp || "", message || "");

    // Send to user
    const userEmail = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: `Assalamu Alaikum ${name} — Nooh Quran Academy`,
        html: userHtml,
      }),
    });

    // Send to admin
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `New Inquiry: ${name} — ${plan}`,
        html: adminHtml,
      }),
    });

    const result = await userEmail.json();

    if (!userEmail.ok) {
      console.error("Resend error:", result);
      return res.status(500).json({ error: "Failed to send email", details: result });
    }

    return res.status(200).json({ success: true, id: result.id });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
