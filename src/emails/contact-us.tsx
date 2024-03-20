import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from '../src/app/page.module.scss'

// import { Button, Html } from "@react-email/components";
import {
    Body,
    Container,
    Head,
    Html,
    Markdown,
    Preview,
    Text,
} from '@react-email/components';
import { CSSProperties } from 'react';



interface FormData {
    firstName: string
    lastName: string
    phone: number
    email: string
    description: string
}

interface ContactUsEmailProps {
    name: string;
    email: string;
    message: string;
}

// const ContactPage = () => {
//     const [formData, setFormData] = useState<FormData>({
//         firstName: '',
//         lastName: '',
//         phone: 0,
//         email: '',
//         description: '',
//     });
// }



// ---------------------------------------------------------------------------------

interface ContactUsEmailProps {
    name: string;
    email: string;
    message: string;
}

export const ContactUsEmail = ({
    name,
    email,
    message,
}: ContactUsEmailProps) => (
    <Html>
        <Head />
        <Preview>Thanks for contacting us {name}!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Text style={paragraph}>Hi {name},</Text>
                <Text style={paragraph}>We have received your message</Text>
                <Markdown
                    markdownContainerStyles={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                        borderRadius: '8px',
                        padding: '20px',
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #e5e7eb',
                    }}
                >
                    {message}
                </Markdown>
                <Text style={paragraph}>
                    We will get back to you as soon as possible at {email}.
                </Text>
            </Container>
        </Body>
    </Html>
);
// export default ContactUsEmail;




const main: CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: CSSProperties = {
    margin: '0 auto',
    padding: '20px 0 48px',
};

const paragraph: CSSProperties = {
    fontSize: '16px',
    lineHeight: '26px',
};

// ---------------------------------------------------------------------------------




//     const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: FormEvent) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/send', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             const data = await response.json();
//             console.log(data);
//             // Handle success or navigate to another page
//             // todo open confirmation MODAL
//         } catch (error) {
//             console.error('Error sending email form data:', error);
//         }
//     };

//     return (
//         <div className={styles.contactInputs}>
//             <Form onSubmit={handleSubmit} method='POST'>
//                 <Form.Group className="mb-3" controlId="formFirstName">
//                     <Form.Label>First Name</Form.Label>
//                     <Form.Control name="firstName" type="text" placeholder="John" value={formData.firstName} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formLastName">
//                     <Form.Label>Last Name</Form.Label>
//                     <Form.Control name="lastName" type="text" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formPhoneNumber">
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control name="phone" type="tel" placeholder="xxx-xxx-xxxx" value={formData.phone} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control name="email" type="text" placeholder="example@email.com" value={formData.email} onChange={handleChange} />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formDescription">
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control name="description" as="textarea" placeholder="How can I help?" value={formData.description} onChange={handleChange} />
//                 </Form.Group>
//                 <Button>Send</Button>
//             </Form>
//         </div>
//     )
// }

// export default ContactPage