import React from 'react';
import Hero from '../components/Hero.jsx'
import contactImg from '../assets/2.jpg'
function Contact() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={contactImg}
                title='Contact'
                btnClass="hide" />
        </>
    );
}

export default Contact;