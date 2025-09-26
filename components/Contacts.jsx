import React from 'react'
import Navbar from './Navbar';
import "../src/styles/contact.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacts() {  

  // function formFunc(e){
  // e.preventDefault()
  //   // console.log(e.target.value); 
  //   console.log(e.target[0].value);
  //   console.log(e.target[1].value);
  //   console.log(e.target[2].value);
  //   console.log(e.target[3].value);
  // }




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const myServiceID = "service_um9e9bo"
    const myTemplateID = ""
    const myPublicKey  = "VhWQ9UebqGPhukHzl"

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: {myPublicKey}, 
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <>
      <Navbar></Navbar>
      <div className="contact-container">
        <div className='box'>
          <h2>Contact / Query Form</h2>

        <form id="contactForm"  ref={form}  onSubmit={sendEmail} >
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            defaultValue={""}
          />
          <button>Send Message</button>
        </form >

        <div className="success-message" id="successMessage">
          Thank you! Your message has been sent.
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Contacts