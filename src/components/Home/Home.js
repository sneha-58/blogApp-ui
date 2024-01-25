import React from 'react'
import './home.css';
import Navbar from '../Navbar/Navbar.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar/>
    <section className="content">
        <img src="https://www.wallpapertip.com/wmimgs/66-666819_website-design-background-creative-background-image-for-website.jpg" height="610px" width="100%"></img>
        <div className="overlay-buttons">
          <Link to="/create" className="overlay-button">Create a Blog</Link>
          <Link to="/post" className="overlay-button">Read a Blog</Link>
        </div>
      </section>
      </>
  )
}

export default Home;