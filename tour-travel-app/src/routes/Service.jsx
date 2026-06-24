import React from 'react';
import Hero from '../components/Hero.jsx'
import aboutImg from '../assets/aboutImg.jpg'
import Trip from '../components/Trip.jsx'

function Service() {
    return (
        <>
            <Hero
                cName="hero-mid"
                heroImg={aboutImg}
                title='Service'
                btnClass="hide" />
            <Trip/>
        </>
    );
}

export default Service;