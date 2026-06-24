import React, { Component } from 'react';
import Hero from '../components/Hero.jsx'
import homeImg from '../assets/homeImg.jpg'
import Destination from '../components/Destination.jsx';
import Trip from '../components/Trip.jsx';
import Footer from '../components/Footer.jsx';
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
          <Destination/>
          <Trip/>
        </>
     );
}

export default Home;