import React from 'react'
import './AboutContact.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <div className="title">
      <p><span className="span1">IlluminateInk</span><Link to="/home" className="goback">Back to HomePage</Link></p>
      </div>
    <div className="aboutContainer">
      <img className="aboutImg" src='https://images.pexels.com/photos/7014946/pexels-photo-7014946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
      <p className="para1">IlluminateInk is blogging platform designed to provide a user-friendly inteface to ensure positive user experience.<br/>In the era where content creation is dynamic and diverse, our project aims to revolutionize the wa individuals express themselves online.<br/>This application would help you to build connection with the outside world.<br/>Engage and interact with the blogging community...!</p>
      <p className="para2">Happy Blogging :) </p>
    </div>
    </>
  )
}

export default About;