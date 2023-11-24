import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Answer from '../components/Answer'


const Solutions = () => {
  return (
    <>
     <Navbar/>
    <Hero 
    cName="hero-mid" 
    heroImg="https://images.unsplash.com/photo-1619472376731-3ca648a34b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
    title="Solutions"
    btnClass="hide"
    />

    <Answer/>
    <Footer/>
   
      
    </>
  )
}

export default Solutions
