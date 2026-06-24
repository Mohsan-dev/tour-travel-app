import React from 'react';
import Hero from '../components/Hero.jsx'
import aboutImg from '../assets/aboutImg.jpg'
import AboutUs from '../components/AboutUs.jsx';
function About() {
    return ( 
        <>
         <Hero
          cName="hero-mid"
          heroImg={aboutImg}
          title='About'
          btnClass = "hide" />
         <AboutUs/> 
        </>
     );
}

export default About;