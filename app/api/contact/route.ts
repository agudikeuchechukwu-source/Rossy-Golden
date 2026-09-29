import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please enter your full name.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return NextResponse.json(
        { error: 'Please specify a subject for your enquiry.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Please enter a message of at least 5 characters.' },
        { status: 400 }
      );
    }

    // In production or with database, this would persist the enquiry or trigger an email.
    // For demonstration, we safely return a verified success response.
    return NextResponse.json({
      success: true,
      message: 'Your message has been received successfully! Agudike Maryrose will respond promptly.',
      receivedAt: new Date().toISOString(),
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message.' },
      { status: 500 }
    );
  }
}
