import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from './email-template';
import { Resend } from 'resend';

const resend = new Resend('re_C9BeaK7X_2dTLr4b1juLDDgtbPpq6XqcN');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
