import React,{ useState } from 'react';
import './LoginSignUp.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const SignUp=()=>{
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post('http://localhost:3001/signup', {username, email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return(
        <form onSubmit={handleSubmit}>
        <div className='container'>
            <div className='header'>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <h1 className="heading">SignUp</h1>
                <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" onChange={e => setUsername(e.target.value)}/>
            </div>
            {/* } */}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email"  placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            </div>
            </div>
            <div className="submit-container">
                <button className="submit">SignUp</button>
                <div>
                    <p>Already have an account ?</p> <button><Link to="/login" className="submit">Login</Link></button>
                </div>
            </div>
        </div>
        </form>
    );
};

export default SignUp;