import './navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link, Routes, Route } from "react-router-dom";
import './user.css';

const Navbar = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false)
  }
  
    return (
    <>
      <nav className="main-nav">
            <div className="logo">
                <h2>
                <span>I</span>lluminate
                <span>I</span>nk
                </h2>
            </div>
            <div className="menu-link">
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                      <div className='profile'>
                          {user ? (
                          <>
                             <Link to='' className='profileLink' onClick={() => setProfileOpen(!profileOpen)}>
                               Profile
                              </Link>
                            {profileOpen && (
                                <div className='openProfile boxItems' onClick={close}>
                            <Link to='/account'>
                                <div className='image'>
                                <div className='text'>
                                <h4>Chandler Bing</h4>
                                </div>
                                <div className='img'>
                                <img src='https://vectorified.com/images/profile-png-icon-18.png' alt='Account' />
                                </div>
                                </div>
                            </Link>
                        <Link to='/create'>
                    <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <Link to='/wishlist'>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                </Link>
                <Link to="/contact">
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                </Link>
                <Link to="/login">
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
                </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
            </li>
            </ul>
        </div>
      </nav>
    </>
    )
}

export default Navbar;