'use client';


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from '@/app/page.module.scss'
// import { Button } from '@react-email/components';


interface FormState {
    firstName: string;
    lastName: string;
    phone: number | undefined;
    email: string;
    description: string;
}

const ContactUs: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        firstName: '',
        lastName: '',
        phone: undefined,
        email: '',
        description: '',
    });
    const [errors, setErrors] = useState<FormState>({
        firstName: '',
        lastName: '',
        phone: undefined,
        email: '',
        description: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    //email regex
    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            const errors = { firstName: '', lastName: '', phone: undefined, email: '', description: '' };

            if (formState.firstName === '') {
                errors.firstName = 'First Name is required';
            }
            if (formState.lastName === '') {
                errors.lastName = 'Last Name is required';
            }
            // if (formState.phone === null || undefined) {
            //     errors.phone = 'Phone Number is required';
            // }

            if (formState.email === '' || !validateEmail(formState.email)) {
                errors.email = 'Valid email is required';
            }


            if (formState.description === '') {
                errors.description = 'Message is required';
            }

            setErrors(errors);

            if (!errors.firstName && !errors.lastName && !errors.phone && !errors.email && !errors.description) {
                try {
                    await fetch('/api/email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formState),
                    });
                    console.log("email sent!");
                    setFormState({ firstName: '', lastName: '', phone: undefined, email: '', description: '' });
                }
                catch {
                    console.log("email sent FAILED!");
                }
            }
            else {
                console.log("validation failed, did not send anything");
            }
        } catch (error) {
            console.log("Error: email did not send");

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className={styles.contactInputs}>
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" type="text" placeholder="John" value={formState.firstName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" type="text" placeholder="Doe" value={formState.lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phone" type="tel" placeholder="xxx-xxx-xxxx" value={formState.phone !== undefined ? formState.phone.toString() : ''} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="text" placeholder="example@email.com" value={formState.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control name="description" as="textarea" placeholder="How can I help?" value={formState.description} onChange={handleChange} />
            </Form.Group>
            <Button type="submit" disabled={isSubmitting} >
                {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
        </Form>
    );
};

export default ContactUs;
