import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
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

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // In production, you would send an email here using nodemailer
    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service || 'Not specified',
      message: body.message || 'No message provided',
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement email sending with nodemailer
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, errors: ['Failed to process request'] },
      { status: 500 }
    );
  }
}
