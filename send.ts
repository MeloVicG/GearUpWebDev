import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/email-template';
// import { EmailTemplate } from '../../../../components/contact-us';
import { Resend } from 'resend';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    phone: number;
    email: string;
    description: string;
}

// export const send = async (formData: FormData) => {
//     const senderEmail = formData.get('email');
//     const message = formData.get('message');

//     if(!message || typeof message !== "string"){
//         return {
//             error:"Invalid Message"
//         };
//     }
//     if(!senderEmail || typeof senderEmail !== "string"){
//         return {
//             error:"Invalid Message"
//         };
//     }
// 
//     resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['victorGdeveloper@gmail.com'],
//         subject: `${firstName} GearUp WebDev Request`,
//         reply_to:senderEmail as string,
//         text: message as string,
//     })
// }

//----------------------------------------------------------------------------------
// export default async (req: NextApiRequest, res: NextApiResponse) => {
    
//     if (req.method !== 'POST') {
//         return res.status(405).end('Method Not Allowed');
//     }
//     // const { firstName, lastName, phone, email, description }: EmailTemplateProps & { lastName: string; phone: number; email: string; description: string; } = req.body;
//     const { firstName, lastName, phone, email, description } = req.body as EmailTemplateProps;
    
//     const emailContent = ReactDOMServer.renderToString(
//         React.createElement(EmailTemplate, { firstName, lastName, phone, email, description })
//     );
//     // const emailContent = ReactDOMServer.renderToString(<EmailTemplate firstName={firstName} />); // Ensure your EmailTemplate supports rendering to string

//     const { data, error } = await resend.emails.send({
//     // const { data, error } = await resend.emails.send({
//         from: 'Acme <onboarding@resend.dev>',
//         to: ['victorGdeveloper@gmail.com'],
//         subject: `${firstName} GearUp WebDev Request` ,
//         react: emailContent,
//     });

//     if (error) {
//         return res.status(400).json(error);
//     }

//     res.status(200).json(data);
// };
