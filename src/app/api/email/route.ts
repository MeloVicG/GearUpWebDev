import { Resend } from 'resend';
// import * as React from 'react';
import { ContactUsEmail } from '../../../emails/contact-us';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const payload = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: payload.email,
            to: 'victorGdeveloper@gmail.com',
            subject: `Thank you for contacting us, ${payload.name}`,
            react: ContactUsEmail(payload),
        });

        if (error) {
            return Response.json({ error });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error });
    }
}
