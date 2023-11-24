const express  = require('express')
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const PORT = 3000;
app.post('/send-email', (req,res) =>{
    const {name,email,message} = req.body;
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth: {
          user: 'sammingimeghana@gmail.com',
          pass: 'fbcvjylzvctgsgtk',
        }
      });
const mailOptions ={
    from: 'email',
    to:'sammingimeghana@gmail.com',
    subject:"Contact Form Submission",
    html:`
    Name:${name} 
    Email:"${email} 
    Message:${message}
    <h1>Hello</h1>
    `,
};
transporter.sendMail(mailOptions,(error,info) =>{
    if(error){
        console.log('DEV2 ERROR: -', error);
        res.status(500).json({Success:false,message:'Error sending mail'})

    }
    else{
        console.log('emailsent', info.response);
        res.status(200).json({Success:true, message:"Email sent successfully"})
    }
})
});
app.listen(PORT, () =>{
    console.log(`Server running at ${PORT}`);

});
   
