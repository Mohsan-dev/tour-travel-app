import React from 'react';
import Hero from '../components/Hero.jsx'
import aboutImg from '../assets/aboutImg.jpg'
function About() {
    return ( 
        <>
         <Hero
          cName="hero-mid"
          heroImg={aboutImg}
          title='About'
          btnClass = "hide" />
        </>
     );
}

export default About;