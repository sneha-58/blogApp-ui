import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import './user.css';
import Navbar from '../Navbar/Navbar.js';

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  return (
    <>
    <Navbar />
      <div className='profile'>
        {user ? (
          <>
            <Link to='' className='img' onClick={() => setProfileOpen(!profileOpen)}>
              Profile
            </Link>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://vectorified.com/images/profile-png-icon-18.png' alt='Account' />
                    </div>
                    <div className='text'>
                      <h4>Chandler Bing</h4>
                    </div>
                  </div>
                </Link>
                <Link to='/create'>
                  <button className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
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
    </>
  )
}