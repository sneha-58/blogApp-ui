import './App.css';
import Login from './components/Login-SignUp/Login.jsx';
import SignUp from './components/Login-SignUp/SignUp.jsx';
// import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import{ BrowserRouter, Routes, Route, } from "react-router-dom";
import Post from './components/Posts/Post.jsx';
import CreatePost from './components/CreatePost/CreatePost.jsx';
import About from './components/Navbar/About.js';
import Contact from './components/Navbar/Contact.js';
import PostDetail from './components/Posts/PostDetail.jsx';
import Dashboard from './components/Posts/Dashboard.jsx';
import { User } from './components/Navbar/User.jsx';
import Navbar from './components/Navbar/Navbar.js';
import { Account } from './components/Navbar/Account.jsx';
import { ChangePassword } from './components/Navbar/ChangePassword.jsx';
import './footer.css';
import SinglePost from './components/Posts/SinglePost.jsx';
import FavoritesPage from './components/Posts/FavoritesPage.jsx';
import { useState } from 'react';
import PostItem from './components/Posts/PostItem.jsx';
import DashboardSinglePost from './components/Posts/DashboardSinglePost.jsx';

function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/postdetail" element={<PostDetail />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/postdashboard/:postId" element={<DashboardSinglePost />} />
        <Route path="/favorites" component={() => <FavoritesPage favorites={[]} />} />
        {/* <Route path="/favorites" element={<FavoritesPage />}></Route> */}
        {/* <Route path="/wishlist" component={() => <PostItem allFavorites={favorites} updateFavorites={setFavorites} />} />
        <Route path="/favorites" component={() => <FavoritesPage favorites={favorites} />} /> */}
      </Routes>
      </BrowserRouter>
      <footer className="footer">
      <h2>Contact Us</h2>
      <p>We would love to respond to your queries and help you succeed.<br/>Feel free to get in touch with us</p>
      <div className="contact-details">
        <div className="contact-info">          <h3>Location</h3>
          <p>IlluminateInk,</p>
          <p>#919, 7th cross Street,</p>
          <p>Banglore, India</p>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: contactus@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default App;