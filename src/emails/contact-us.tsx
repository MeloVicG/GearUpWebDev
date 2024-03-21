import React from 'react'
// import { Button, Form } from 'react-bootstrap'
// import styles from '../src/app/page.module.scss'

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


interface ContactUsEmailProps {
    firstName: string;
    lastName: string;
    phone: number ;
    email: string;
    description: string;
}


export const ContactUsEmail = ({
    firstName,
    lastName,
    phone,
    email,
    description
}: ContactUsEmailProps) => (
    <Html>
        <Head />
        <Preview>GearUP WebDev Request {firstName} {lastName}!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Text style={paragraph}>You have a GearUp WebDev Request from {firstName} {lastName},</Text>
                        <Text style={paragraph}>Client info:</Text>
                        <Text style={paragraph}>First Name: {firstName}</Text>
                        <Text style={paragraph}>Last Name: {lastName}</Text>
                        <Text style={paragraph}>Phone Number: {phone}</Text>
                        <Text style={paragraph}>Email: {email}</Text>
                <Markdown
                    markdownContainerStyles={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                        borderRadius: '8px',
                        padding: '20px',
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #e5e7eb',
                    }}
                >
                    {description}
                </Markdown>
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