import React,{ useState } from 'react';
import './LoginSignUp.css';
import { ChangePassword } from '../Navbar/ChangePassword.jsx';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login=()=>{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const handleSubmit = (e)=> {
    //     e.preventDefault()
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    //     axios.post('http://127.0.0.1:3001/login', {email, password})
    //     .then(res => console.log('Response : '+res))
    //     .catch(err => console.log('Eror : '+err));
    // }

    return(
        // <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className='header'>
                <div className="underline"></div>
            </div>
            <div className="inputs">
            <h1 className="heading">Login</h1>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email"  placeholder="Email"/> {/* onChange={e => setEmail(e.target.value)}/> */}
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/> {/* onChange={e => setPassword(e.target.value)}/> */}
            </div>
            </div>
            {/* {action==="Sign Up"?<div></div>: */}
            <div className="forgot-password">Lost Your Password?<Link to="/changepassword"><span> Click Here!</span></Link></div>
            {/* } */}
            <div className="submit-container">
                {/* <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> */}
                <Link to="/home">
                <button className="submit">Login</button>
                </Link>
                <div>
                    <p>Don't have an account ? </p><button> <Link to="/signup" className="submit">SignUp</Link></button>
                </div>
            </div>
        </div>
        // </form>
    );
};

export default Login;