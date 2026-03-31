import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM_EMAIL = "Nooh Quran Academy <info@noohquran.creativebilal.com>";
const ADMIN_EMAIL = "creativebilalakram@gmail.com";

function buildEmailHTML(name: string, email: string, plan: string, whatsapp: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f4f6fa;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6fa;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(37,60,132,0.08);">
        <tr><td style="background:linear-gradient(135deg,#1a2a5e 0%,#2d4a9e 50%,#253c84 100%);padding:40px 40px 32px;text-align:center;">
          <h1 style="margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Nooh Quran Academy</h1>
          <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.7);font-weight:400;">Your Quran Learning Journey Begins</p>
        </td></tr>
        <tr><td style="padding:36px 40px 20px;">
          <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#1a2a5e;">Assalamu Alaikum, ${name}! 🌙</h2>
          <p style="margin:0 0 28px;font-size:15px;color:#6b7280;line-height:1.6;">JazakAllahu Khairan for booking your free trial. We've received your request and our team will reach out within 24 hours.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fc;border-radius:12px;border:1px solid #e8ecf4;">
            <tr><td style="padding:24px 28px;">
              <p style="margin:0 0 16px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#2d4a9e;">Booking Details</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:8px 0;font-size:14px;color:#6b7280;width:120px;">Name</td><td style="padding:8px 0;font-size:14px;color:#1a2a5e;font-weight:600;">${name}</td></tr>
                <tr><td style="padding:8px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:120px;">Email</td><td style="padding:8px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;">${email}</td></tr>
                <tr><td style="padding:8px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:120px;">Plan</td><td style="padding:8px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;"><span style="background:linear-gradient(135deg,#2d4a9e,#3b5fc9);color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;">${plan}</span></td></tr>
                ${whatsapp ? `<tr><td style="padding:8px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:120px;">WhatsApp</td><td style="padding:8px 0;font-size:14px;color:#1a2a5e;font-weight:600;border-top:1px solid #e8ecf4;">${whatsapp}</td></tr>` : ""}
                ${message ? `<tr><td style="padding:8px 0;font-size:14px;color:#6b7280;border-top:1px solid #e8ecf4;width:120px;vertical-align:top;">Message</td><td style="padding:8px 0;font-size:14px;color:#1a2a5e;line-height:1.5;border-top:1px solid #e8ecf4;">${message}</td></tr>` : ""}
              </table>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:8px 40px 32px;">
          <h3 style="margin:0 0 12px;font-size:16px;font-weight:700;color:#1a2a5e;">What's Next?</h3>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:6px 0;font-size:14px;color:#4b5563;line-height:1.5;">✅ &nbsp;Our team will contact you within 24 hours</td></tr>
            <tr><td style="padding:6px 0;font-size:14px;color:#4b5563;line-height:1.5;">📅 &nbsp;We'll schedule your 3-day free trial</td></tr>
            <tr><td style="padding:6px 0;font-size:14px;color:#4b5563;line-height:1.5;">📖 &nbsp;Start your personalized Quran learning</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:0 40px 36px;text-align:center;">
          <a href="https://wa.me/18255954870" style="display:inline-block;background:linear-gradient(135deg,#2d4a9e 0%,#3b5fc9 100%);color:#ffffff;text-decoration:none;padding:14px 36px;border-radius:10px;font-size:15px;font-weight:600;letter-spacing:0.3px;">Chat on WhatsApp →</a>
        </td></tr>
        <tr><td style="background:#f8f9fc;padding:24px 40px;border-top:1px solid #e8ecf4;text-align:center;">
          <p style="margin:0 0 4px;font-size:13px;color:#9ca3af;">Nooh Quran Academy — Learn Quran with Expert Guidance</p>
          <p style="margin:0;font-size:12px;color:#d1d5db;">This is an automated confirmation email. Please do not reply.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, plan, whatsapp, message } = await req.json();

    if (!name || !email || !plan) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = buildEmailHTML(name, email, plan, whatsapp || "", message || "");

    // Send to user
    const userRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: `Booking Confirmed — ${plan} | Nooh Quran Academy`,
        html,
      }),
    });

    const userResult = await userRes.json();
    if (!userRes.ok) {
      console.error("Resend user email error:", userResult);
      return new Response(JSON.stringify({ error: "Failed to send user email", details: userResult }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send to admin
    const adminRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        subject: `New Booking: ${name} — ${plan}`,
        html,
      }),
    });

    const adminResult = await adminRes.json();
    if (!adminRes.ok) {
      console.error("Resend admin email error:", adminResult);
    }

    return new Response(JSON.stringify({ success: true, id: userResult.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
