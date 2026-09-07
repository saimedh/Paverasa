import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { Resend } from 'resend';

function resendDevPlugin() {
  return {
    name: 'resend-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/send-email', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
          return;
        }

        let bodyStr = '';
        req.on('data', (chunk) => {
          bodyStr += chunk;
        });
        req.on('end', async () => {
          try {
            const env = loadEnv(server.config.mode, process.cwd(), '');
            const apiKey = env.RESEND_API_KEY || env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY;

            if (!apiKey) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'RESEND_API_KEY is not set in .env' }));
              return;
            }

            const resend = new Resend(apiKey);
            const toEmail = env.RESEND_TO_EMAIL || 'support@paverasa.in';
            const fromEmail = env.RESEND_FROM_EMAIL || 'Paverasa <onboarding@resend.dev>';

            const body = JSON.parse(bodyStr || '{}');
            const { type, name, email, subject, message, date, time } = body;

            const emailSubject =
              type === 'booking'
                ? `[Discovery Call] ${name} — ${date || 'Upcoming'} at ${time || 'TBD'}`
                : `[Inquiry] ${subject || 'General'} — from ${name}`;

            const htmlContent =
              type === 'booking'
                ? `<h2>Discovery Call Booking</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Date:</strong> ${date}</p><p><strong>Time:</strong> ${time}</p>`
                : `<h2>New Contact Inquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Topic:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${message}</p>`;

            const { data, error } = await resend.emails.send({
              from: fromEmail,
              to: [toEmail],
              replyTo: email,
              subject: emailSubject,
              html: htmlContent,
            });

            if (error) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: error.message }));
              return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, id: data?.id }));
          } catch (e) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: e.message }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    resendDevPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
