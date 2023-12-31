import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import MessageUsEmail from './email-template';

const resend = new Resend('re_RJLeeJN9_FDm74qQmuhFU5RKGrxgQxiia');

export async function POST(req: NextRequest) {
  const { name, email, message, phone, country, company } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${name} <onboarding@neupanekrishna.com.np>`, // your verified domain
      to: ['neupane.krishna33@gmail.com'],  // the email address you want to send a message
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, message, phone, country, company }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}