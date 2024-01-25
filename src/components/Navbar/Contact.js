import React from 'react'
import './AboutContact.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <div className="title">
      <p><span className="span1">IlluminateInk</span><Link to="/home" className="goback">Back to HomePage</Link></p>
    </div>
    <div className="contactUs">
    <div className="contact">
      <h2>Contact With Us</h2>
      <p>We would love to respond to your queries and help you succeed.<br/>Feel free to get in touch with us</p>
    </div> 
    <div className="reachUs">
        <h2>Reach Us</h2>
        <p> Email <span>contactus@gmail.com</span></p>
        <p>Phone <span>+91 9876543210</span></p>
        <p>Address <span>#919, 7th cross Street,<br/>Banglore, India </span></p>
    </div> 
    </div>
    </>
  )
}

export default Contact;