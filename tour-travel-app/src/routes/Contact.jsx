import React from 'react';
import Hero from '../components/Hero.jsx'
import contactImg from '../assets/2.jpg'
import ContactForm from '../components/ContactForm.jsx'
function Contact() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={contactImg}
                title='Contact'
                btnClass="hide" />
             <ContactForm/>
        </>
    );
}

export default Contact;