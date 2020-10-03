import React, { useState } from 'react';

function ContactForm() {


    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    // destructure object into named properties
    const { name, email, message } = formState; 

    function handleChange(e) {
        // spread op; sync form data w/ dynamic property names
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onChange={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5"  onChange={handleChange} defaultValue={message} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;