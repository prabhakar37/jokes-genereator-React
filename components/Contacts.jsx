import React from 'react'
import Navbar from './Navbar';
import "../src/styles/contact.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacts() {  

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