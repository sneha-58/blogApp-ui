import React from "react";
import "./account.css";
import { Link } from 'react-router-dom';

export function Account(){
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h2><i>Welcome, Sneha</i></h2>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file'/>
                <img src="https://www.best4geeks.com/wp-content/uploads/2018/08/50-cute-girl-profile-picture.jpg" alt='image' class='image-preview' />
              </div>
            </div>
            <div className='right'>
              <Link to="/changepassword"><button className='button'> Change Password </button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}