import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured. Please set RESEND_API_KEY.',
    });
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.RESEND_TO_EMAIL || 'support@paverasa.in';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Paverasa <onboarding@resend.dev>';

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        // body remains as-is
      }
    }

    const { type, name, email, subject, message, date, time } = body || {};

    if (!email || !name) {
      return res.status(400).json({ success: false, error: 'Name and email are required.' });
    }

    let emailSubject = '';
    let htmlContent = '';

    if (type === 'booking') {
      emailSubject = `[Discovery Call] ${name} — ${date || 'Upcoming'} at ${time || 'TBD'}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 24px; color: #111827; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #0b0f19; padding: 28px 32px; border-bottom: 3px solid #F97316; }
            .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .badge { display: inline-block; background: rgba(249,115,22,0.15); color: #F97316; border: 1px solid rgba(249,115,22,0.3); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; margin-top: 8px; text-transform: uppercase; }
            .content { padding: 32px; }
            .field-group { margin-bottom: 20px; }
            .field-label { font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .field-val { font-size: 15px; color: #111827; font-weight: 500; background: #f3f4f6; padding: 10px 14px; border-radius: 8px; }
            .highlight-card { background: #fff7ed; border: 1px solid #fed7aa; padding: 16px; border-radius: 10px; margin: 20px 0; }
            .highlight-title { font-size: 13px; font-weight: 700; color: #c2410c; margin-bottom: 6px; }
            .highlight-detail { font-size: 16px; font-weight: 600; color: #9a3412; }
            .footer { padding: 20px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Paverasa Discovery Call Booking</h1>
              <span class="badge">New Scheduled Meeting</span>
            </div>
            <div class="content">
              <div class="highlight-card">
                <div class="highlight-title">Scheduled Session Details</div>
                <div class="highlight-detail">&#128197; ${date || 'Date not specified'} &nbsp;&bull;&nbsp; &#9200; ${time || 'Time not specified'}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Attendee Name</div>
                <div class="field-val">${name}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Attendee Email</div>
                <div class="field-val"><a href="mailto:${email}" style="color: #F97316; text-decoration: none;">${email}</a></div>
              </div>
            </div>
            <div class="footer">
              Sent automatically via Paverasa Contact System &bull; Resend API
            </div>
          </div>
        </body>
        </html>
      `;
    } else {
      // Default: Contact Inquiry
      emailSubject = `[Inquiry] ${subject || 'General'} — from ${name}`;
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 24px; color: #111827; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #0b0f19; padding: 28px 32px; border-bottom: 3px solid #F97316; }
            .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .badge { display: inline-block; background: rgba(249,115,22,0.15); color: #F97316; border: 1px solid rgba(249,115,22,0.3); font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 9999px; margin-top: 8px; text-transform: uppercase; }
            .content { padding: 32px; }
            .field-group { margin-bottom: 20px; }
            .field-label { font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .field-val { font-size: 15px; color: #111827; font-weight: 500; background: #f3f4f6; padding: 10px 14px; border-radius: 8px; }
            .message-box { background: #fdfbf7; border: 1px solid #fed7aa; padding: 16px; border-radius: 10px; margin-top: 12px; font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap; }
            .footer { padding: 20px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Paverasa Website Inquiry</h1>
              <span class="badge">${subject || 'General Inquiry'}</span>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Name</div>
                <div class="field-val">${name}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Sender Email</div>
                <div class="field-val"><a href="mailto:${email}" style="color: #F97316; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field-group">
                <div class="field-label">Topic / Subject</div>
                <div class="field-val">${subject || 'N/A'}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Message</div>
                <div class="message-box">${message || '(No message content)'}</div>
              </div>
            </div>
            <div class="footer">
              Sent automatically via Paverasa Contact System &bull; Resend API
            </div>
          </div>
        </body>
        </html>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ success: false, error: error.message || 'Failed to send email via Resend' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error sending email:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error while sending email',
    });
  }
}
