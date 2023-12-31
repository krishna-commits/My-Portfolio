import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from './email-template';
import { Resend } from 'resend';

const resend = new Resend('re_C9BeaK7X_2dTLr4b1juLDDgtbPpq6XqcN');

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Make sure the request has a valid JSON body
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required in the request body' });
    }

    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@neupanekrishna.com.np>`,
      to: ['neupanekrishna33@gmail.com'],
      subject: 'Email Test',
      react: EmailTemplate({ name }), // Use the extracted name value
    });

    if (error) {
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Error processing request:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
