import React from 'react';
import Hero from '../components/Hero.jsx'
import aboutImg from '../assets/aboutImg.jpg'

function Service() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={aboutImg}
                title='Service'
                btnClass="hide" />
        </>
    );
}

export default Service;