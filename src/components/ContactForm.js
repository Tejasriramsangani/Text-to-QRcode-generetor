// <?php include 'sendemail.php'; ?>

import React,{useState} from 'react'
import './ContactForm.css'


    const ContactForm = () =>{
        const [formData, setFormData] = useState({
            name:'',
            email:'',
            message:'',
        });
        const handleChange = (e) => {
            setFormData({...formData,[e.target.name]: [e.target.value]})
        }

            const handleSubmit= (e) =>{
                e.preventDefault();
                fetch("/send-email",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    
                    },
                    body:JSON.stringify(formData),
                })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) =>
                console.log("DEV1 ERROR:-", error));
            };
        
  return (
    <>

     {/* <div className='alert-success'>
        <span>Message Sent!  Thank you for Contacting us.</span>
    </div> 

    <div className='alert-error'>
        <span>Something went wrong! Please try again.</span>
    </div>
   */} 
    <div className='contact-section'>
        <div className='contact-info'>
            <div>
               
                <i className='fas fa-map-marker-alt'></i>Address, City, Country</div>
            <div>
                <i className='fas fa-envelope'></i>contact@email.com</div>
            <div>
                <i className='fas fa-phone'></i>+91 8522058813</div>
            <div>
                <i className='fas fa-clock'></i>Mon - Fri 8:00 AM to 5:00 PM</div>
              
        
        </div>
        <div className='contact-form'>
            <h2>Contact Us</h2>
            <br/>
            <form className='contact' action="" onSubmit={handleSubmit} method='post'>
                <input type="text" name='name' id="name" className='text-box' value={formData.name} placeholder='Your Name' required onChange={handleChange} />
                <input type="email" name='email' id="email" className='text-box'  value={formData.email} placeholder='Your Email'  required  onChange={handleChange}/>
                <textarea name="message"id="message" rows="5" value={formData.message} placeholder='Your Message' required onChange={handleChange}>

                </textarea>
                <input type="submit" name='submit' className='send-btn' value="send"/>
            </form>
        </div>
      
    </div>
    </>
  )
}

export default ContactForm
