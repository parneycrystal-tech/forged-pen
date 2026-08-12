// /api/waitlist-welcome.js
// Triggered by a Supabase Database Webhook on INSERT into the waitlist table.
// Sends the "you're on the list" acknowledgment via Resend.
// RESEND_API_KEY lives only as a Vercel environment variable — never hardcoded here.

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
        // onboarding@resend.dev is Resend's shared sending address for accounts without a
        // verified custom domain. Swap this once forgedpen.com is verified with Resend.
        from: "Forged Pen <onboarding@resend.dev>",
        to: email,
        subject: "You're on the list",
        html: `
          <div style="font-family: Georgia, serif; font-size: 16px; line-height: 1.7; color: #3A3228; max-width: 480px; margin: 0 auto; padding: 20px;">
            <p>Hi,</p>
            <p>Thanks for your interest in Forged Pen. You're officially on the list.</p>
            <p>We're putting together a good first group of beta writers, a real mix of planners, discovery writers, and everyone in between, so it may take a little while to hear back. If it looks like a good fit, you'll get a real invite directly.</p>
            <p>In the meantime, if you'd like to help us get to know how you write, here's a short form:<br>
            <a href="${applicationFormUrl}" style="color: #A8884A;">${applicationFormUrl}</a></p>
            <p>No pressure either way. Just glad you're here.</p>
            <p>Forged Pen</p>
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
