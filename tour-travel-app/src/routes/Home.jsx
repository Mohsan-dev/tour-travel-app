import React, { Component } from 'react';
import Hero from '../components/Hero.jsx'
import homeImg from '../assets/homeImg.jpg'
function Home() {
    return ( 
        <>
          <Hero
          cName="hero"
          heroImg={homeImg}
          title='Your Journey Your Story'
          text ="Choose Your Favourite Distination."
          buttontext = "Travel Plan"
          url = "/"
          btnClass = "show" />
        </>
     );
}

export default Home;