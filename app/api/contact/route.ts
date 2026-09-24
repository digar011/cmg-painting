import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SITE_CONFIG } from '@/lib/constants';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c);

function transport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT || 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Basic validation
    const errors: string[] = [];

    if (!body.name || body.name.trim().length < 2) {
      errors.push('Name is required');
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('Valid email is required');
    }

    const phoneDigits = body.phone?.replace(/\D/g, '') || '';
    if (phoneDigits.length < 10) {
      errors.push('Valid phone number is required');
    }

    const message = (body.message || '').slice(0, 5000);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const mailer = transport();
    const to = process.env.CONTACT_EMAIL || SITE_CONFIG.email;
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    if (!mailer || !from) {
      // Never pretend a quote request was delivered.
      console.error('Contact form: SMTP is not configured; request not delivered', {
        service: body.service || 'Not specified',
      });
      return NextResponse.json(
        { success: false, errors: [`We couldn't send your request online. Please call us at ${SITE_CONFIG.phone}.`] },
        { status: 503 },
      );
    }

    const service = body.service || 'Not specified';
    const rows: [string, string][] = [
      ['Name', body.name.trim()],
      ['Email', body.email.trim()],
      ['Phone', body.phone.trim()],
      ['Service', service],
      ['Message', message || '—'],
    ];
    await mailer.sendMail({
      from,
      to,
      replyTo: body.email.trim(),
      subject: `New quote request: ${service} — ${body.name.trim()}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<h2>New quote request from the website</h2><table cellpadding="6">${rows
        .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
        .join('')}</table>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, errors: [`Failed to send your request. Please call us at ${SITE_CONFIG.phone}.`] },
      { status: 500 },
    );
  }
}
