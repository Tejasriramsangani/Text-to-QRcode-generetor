import React from "react";
import "./AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <div className="total">
      <div className="containerw">
        <div className="containerw1">
          <h1> 1. What is Qr?</h1>
          
          <p>
            A QR Code is a two-dimensional barcode that is readable by
            smartphones. It allows to encode over 4000 characters in a two
            dimensional barcode. QR Codes may be used to display text to the
            user, to open a URL, save a contact to the address book or to
            compose text messages. "QR Code" is a registered trademark of DENSO
            WAVE INCORPORATED. To read QR Codes with a smartphone, you can just
            use the default camera app. On desktop devices, you can just
            bookmark the Scan section of this web app. Than can be useful to
            send a link from a phone to your desktop browser for example.
          </p>
        </div>
        <div className="containerw2">
          <img
            className="img-fluid"
            // src="https://images.pexels.com/photos/8830498/pexels-photo-8830498.jpeg?auto=compress&cs=tinysrgb&w=600"
            src="https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/qr-code-scanner-file-upload/what-is-a-qr-code-scanner-image.webp"
            alt="img"
          />
        </div>
      </div>
      {/* *****containerw end***** */}
      <div className="container-div">
        <div className="container-div2 img-fluid">
          <img
            className="img-fluid"
            src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/about_page/illustrations/socia-media_illustration.png."
            alt=""
          />
        </div>

        <div className="container-div1">
          <h1>
            {" "}
            2. Are the QR Codes generated on this site restricted to personal
            use?
          </h1>
          
          <p>
            No! There is no restriction of any kind. You can use these QR Code
            images for whatever you like, also commercially. Please note that
            the word "QR Code" is a registered trademark of DENSO WAVE
            INCORPORATED. If you want to use it, you have to add a trademark
            comment. Please see here for details.
          </p>
        </div>
      </div>
      {/* ****************container-div end*********** */}
      <div className="container-divv">
        <div className="container-divv1">
          <h1> 3. What are Static QR Codes?</h1>
          <p>
            Static QR Codes encode the content directly in the image itself. You
            can think of them like regular printed text, just represented in
            different way. That means you cannot update the content once
            generated. Because the content is directly encoded in the image,
            they also grow in size with the amount of content they store.
          </p>
        </div>
        <div className="container-divv2 img-fluid">
          <img
            className="img-fluid"
            src="https://fiverr-res.cloudinary.com/image/upload/w_1200/f_auto,q_auto/v1/attachments/generic_asset/asset/b8705aa1962eda6724898c0b6a1ad81e-1626001877122/qr%20code-min.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="about-container">
        <div className="about-container2 img-fluid">
          <img
            className="img-fluid"
            src="https://www.digitaldogdirect.com/wp-content/uploads/2020/10/QR-codes-and-direct-mail-2.png"
            alt=""
          />
        </div>
        <div className="about-container1">
          <h1> 4. What are Dynamic QR Codes?</h1>
          <p>
            The content of a Static QR Code cannot be changed once generated.
            What is referred to as a Dynamic QR Code, is a QR Code pointing to a
            static URL that hosts the actual content (e.g. the real URL). The
            hosted content can be changed after the QR Code has been printed.
            After signing in, this service also allows you to generate Dynamic
            QR Codes (available under My QR Codes). We automatically create a
            URL that points to your actual content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
