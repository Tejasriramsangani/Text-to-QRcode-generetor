import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


function Contact() {
  return (
    <>
    <Navbar/>
    <Hero 
    cName="hero-mid" 
    heroImg="https://images.unsplash.com/photo-1685443930058-877ab44b526c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    title="Contact"
    btnClass="hide"
    />

     <ContactForm/> 
    <Footer/>
   
      
    </>
  )
}

export default Contact
