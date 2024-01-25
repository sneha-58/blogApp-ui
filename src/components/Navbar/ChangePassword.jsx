import React from "react";
import image from "../Assets/input.jpg";
import "./account.css";
import { Link } from 'react-router-dom';

export const ChangePassword = () => {
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' />
                <img src="https://www.best4geeks.com/wp-content/uploads/2018/08/50-cute-girl-profile-picture.jpg" alt='image' class='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label htmlFor=''>Username</label>
              <input type='text' />
              <label htmlFor=''>Email</label>
              <input type='email' />
              <label htmlFor=''>Password</label>
              <input type='password' />
              <label htmlFor=''>Confirm Password</label>
              <input type='password' />
              <Link to='/account'>
              <button className='button'> Save </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}