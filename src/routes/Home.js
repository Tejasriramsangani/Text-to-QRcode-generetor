import React from 'react'
import Navbar from '../components/Navbar'
import Hero from'../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="../images/image2.avif"
    title="Get started on your QR code in seconds."
    text="Make your custom QR code in a few taps."
    buttonText="Get Started"
    url="/"
    btnClass="show"
    />
    <Main/>
    <Footer/> 
    </>
  )
}
export default Home
