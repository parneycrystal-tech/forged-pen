// /api/waitlist-welcome.js
// Triggered by a Supabase Database Webhook on INSERT into the waitlist table.
// Sends the "you're on the list" acknowledgment via Resend.
// RESEND_API_KEY lives only as a Vercel environment variable, never hardcoded here.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;
    // Supabase webhooks send { type: "INSERT", table: "waitlist", record: {...}, ... }
    const email = payload?.record?.email;
    if (!email) {
      return res.status(400).json({ error: "No email in webhook payload" });
    }

    const applicationFormUrl = "https://forgedpen.com/beta-application.html";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Forged Pen <noreply@mail.forgedpen.com>",
        to: email,
        subject: "Welcome to the Forged Pen Beta Waitlist",
        html: `
          <div style="font-family: Georgia, serif; font-size: 16px; line-height: 1.7; color: #3A3228; max-width: 480px; margin: 0 auto; padding: 20px;">
            <p>Hi,</p>
            <p>Thank you so much for joining the Forged Pen Beta waitlist!</p>
            <p>We're building our first group of beta writers now, whose brains work differently: planners, discovery writers, and everyone in between. Space is limited and this doesn't guarantee a spot, but we're targeting October 1, 2026 to start letting people in. Watch for a second email from us directly if a spot opens up for you.</p>
            <p>While you wait, take two minutes to fill out this short survey, it's how we're putting that first group together:<br>
            <a href="${applicationFormUrl}" style="color: #A8884A;">${applicationFormUrl}</a></p>
            <p>The Forged Pen Team</p>
          </div>
        `
      })
    });

    const data = await resendResponse.json();
    if (!resendResponse.ok) {
      console.error("Resend error:", data);
      return res.status(502).json({ error: "Email send failed" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Waitlist welcome error:", err);
    return res.status(500).json({ error: "Internal error" });
  }
}
