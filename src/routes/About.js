import React from 'react'
import  Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutUs from './AboutUs'

function About(){
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1550482781-48d477e61c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UVJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
    title="About"
    btnClass="hide"

    />
    <AboutUs/>
    <Footer/>
   
    </>
  )
}

export default About
