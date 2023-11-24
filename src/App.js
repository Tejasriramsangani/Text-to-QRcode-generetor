import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Solutions from './routes/Solutions'
import Login from './routes/Login'
import Try from './routes/Try'




const App = () => {
  return (
    <>
    <div className='App'>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/solutions" element={<Solutions/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Try" element={<Try/>}/>

         
           
            

           
           
           
        </Routes>
      
      <Navbar/>
    
      </div>


   
        

   

      
    </>
  )
}

export default App
