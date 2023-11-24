import React from "react";
import "./Answer.css";
import AOS from 'aos';



const Answer = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <h1>QR Code Solutions and Services</h1>
        <br />

        <h4>
          Rated best QR Code solution provider by world's top brands, we are a
          one stop solution for all your QR Code marketing and business needs.
        </h4>
        <br />

        <ul>
          <li>
            → Increase customer enagement and boost the scan rates by more than
            50% with our unique QR shapes and stickers.
          </li>
          <li>
            → Understand your campaign performance better with real time
            advanced analytics.
          </li>
          <li>
            → Automate and organize most of your QR work with bulk upload and
            folder features.
          </li>
          <li>
            → Start free and scale with paid plans tailored for small businesses
            to large enterprises.
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <div className="boxes">
        <div className="box" >
       
          <h2></h2>
          <img src="" alt="" />
          <p>
          </p>
        </div>
        <br/>
        <div className="box" >
        <i class="fa-solid fa-star fa-2xl"></i>          
        <h2></h2>
          <img src="" alt="" />
          <p>
          </p>
        </div>
        <br/>
        <div className="box" >
        <i class="fa-brands fa-facebook fa-2xl"></i>
          <h2></h2>
          <img src="" alt="" />
          <p
          </p>
        </div>
        <br/>
        </div>
        <div className="boxes1">
        <div className="box"  >
        <i class="fa-solid fa-download fa-2xl"></i>
          <h2></h2>
          <img src="" alt="" />
          <p>
          </p>
        </div>
       <br/>
       <div className="box"  >
       <i class="fa-solid fa-list fa-2xl"></i>
          <h2></h2>
          <img src="" alt="" />
          <p>
          </p>
        </div><br/>
        <div className="box"   >
        <i class="fa-solid fa-wifi fa-2xl"></i>
          <h2></h2>
          <img src="" alt="" />
          <p>Share your WIFI SSID and password with a Wi-Fi QR code. 
            Allow people to scan the Qr code 
          </p>
        </div> 
        <br/>
        

      
        
      </div> */}


 <div class="main">
  
  <ul class="cards">
    <li class="cards_item">
      <div class="card" data-aos="flip-up"  data-aos-duration="1000" data-aos-offset="200">
        <div class="card_image"><img src="./images/facebook.png"/></div>
        <div class="card_content">
          <h2 class="card_title">Facebook</h2>
          <p class="card_text">Generate beautiful QR code landing pages for your facebook bussiness,
          and , get more traffic and likes! Converts your offline visitors to online followers</p>
         
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="flip-left"  data-aos-duration="1000" data-aos-offset="200">
        <div class="card_image"><img src="./images/event.png"/></div>
        <div class="card_content">
          <h2 class="card_title">Event</h2>
          <p class="card_text">Generate perfect landing pages for your events. Increases signup and oarticipation. Let people follow
            you on social media.Get detailed in-depth Analytics.</p>
          
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="flip-down"  data-aos-duration="1000" data-aos-offset="200">
        <div class="card_image"><img src="./images/coupon.png"/></div>
        <div class="card_content">
          <h2 class="card_title">Coupon</h2>
          <p class="card_text">Create coupon pages for your discount camapigns.
          Increase partcipating of your offline visitors. Generate the cool looking page.</p>
          
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-offset="200">
        <div class="card_image"><img src="./images/app.png"/></div>
        <div class="card_content">
          <h2 class="card_title">App Download</h2>
          <p class="card_text">Increase your app downloads with a rated best app QR code page , Sometimes of the top future
            100 companines use this.</p>
        
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="200" >
        <div class="card_image"><img src="./images/menu.png"/></div>
        <div class="card_content">
          <h2 class="card_title">Menu</h2>
          <p class="card_text">Create a perfect touchless menu pages in minutes with restaurant Menu QR code . 
            Use round or food shaped Qr's.</p>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card" data-aos="zoom-in-down" data-aos-duration="1000" data-aos-offset="200">
        <div class="card_image"><img src="./images/bussiness.png"/></div>
        <div class="card_content">
          <h2 class="card_title">Bussiness</h2>
          <p class="card_text">Create stunning bussiness pages in a just few minutes. Let yout offline visitors add you to their contact
          list easily. Make them follow your social pages with a simple scan.</p>
        </div>
      </div>
    </li> 
  </ul>
</div>

<h3 class="made_by">Made with ♡</h3>
    </>
  );
};

export default Answer;
