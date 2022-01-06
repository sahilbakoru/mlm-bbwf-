import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


export default function contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    
    function handleSubmit(e) {
    e.preventDefault();
    console.log(name,email, phone, message);
    // clearing the values
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    }

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lush3uc', 'template_qv4e1mo', form.current, 'user_Y02STmSFrf5GOeu5T7LRn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
 

  return (
    <div>
      <section id="contact" className="ud-contact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title">
                <span>CONTACT US</span>
                <h2>
                  Let’s talk about <br />
                  Love to hear from you!
                </h2>
              </div>
              <div className="ud-contact-info-wrapper">
                <div className="ud-single-info">
                  <div className="ud-info-icon">
                    <i className="lni lni-map-marker"></i>
                  </div>
                  <div className="ud-info-meta">
                    <h5>Our Location</h5>
                    <p>132001, Karnal, Haryana</p>
                  </div>
                </div>
                <div className="ud-single-info">
                  <div className="ud-info-icon">
                    <i className="lni lni-envelope"></i>
                  </div>
                  <div className="ud-info-meta">
                    <h5>How Can We Help?</h5>
                    <p>info@yourdomain.com</p>
                    <p>contact@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div
              className="ud-contact-form-wrapper wow fadeInUp"
              data-wow-delay=".2s">
              <h3 className="ud-contact-form-title">Send us a Message</h3>

              <form  ref={form} onSubmit={ sendEmail} className="ud-contact-form">
                <div className="ud-form-group">
                  <label for="fullName">Full Name*</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    
                  />
                </div>
                <div className="ud-form-group">
                  <label for="email">Email*</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="ud-form-group">
                  <label for="phone">Phone*</label>
                  <input
                    type="text"
                    name="user_phone"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="ud-form-group">
                  <label for="message">Message*</label>
                  <textarea
                    name="message"
                    rows="1"
                    placeholder="type your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="ud-form-group mb-0">
                  <button type="submit"  onClick={handleSubmit} className="ud-main-btn">
                    Send Message
                  </button> 
                   </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </div>
  )
}

