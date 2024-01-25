import React, { useState } from 'react';
import dashboardData from './dashboardData.js';
import PostItem from './PostItem.jsx';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import './dashboard.css';
import { FaHeart } from 'react-icons/fa';
import DashboardSinglePost from '../Posts/DashboardSinglePost.jsx';
import { Routes, Route } from 'react-router-dom';

export default function Dashboard() {
  const [posts, setPosts] = useState(dashboardData);
//now added
    const [favorites, setFavorites] = useState([]);
    const [hasFavorited, setHasFavorited] = useState(false);

    const handleAddToFavorites = () => {
      if (!hasFavorited) {
        setFavorites(favorites + 1);
        setHasFavorited(true);
      }
      else {
        setFavorites(favorites - 1);
        setHasFavorited(false);
      }
    }
//upto this
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (confirmDelete) {
      console.log('Post deleted!');
    }
  };
  return (
    <>
      <Navbar />
      <section className="dashboard">
        {posts.length !== 0 ? (
          <div className="containerdashboard categoryPosts-container">
            {posts.map(({ id, image, category, authorId, title, content }, index) => (
              <article key={id} className="dashboard-post">
                <div className="dashboard-post-info">
                  <div className="dashboard-post-image">
                    <img src={image} alt="" />
                  </div>
                  <h5>{title}</h5>
                  {/* <DashboardItem
                    image={image}
                    category={category}
                    authorId={authorId}
                    title={title}
                    content={content}
                    postId={id}
                  /> */}
                </div>
                <div className="dashboard-posts-action">
                  <Link to={`/postdashboard/${id}`}>
                  <button className="btn btn-sm btn-primary">
                    View
                  </button>
                  </Link>
                  <button className="btn btn-sm btn-secondary">
                    Edit
                  </button>
                  <button onClick={handleDelete} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2 className="error-center">You have no posts.</h2>
            <p className="subtext">Why not create one?</p>
          </div>
        )}
        {/* <div className="container dashboard-container">
        </div> */}
      </section>
      <Routes>
        <Route path="/postdashboard/:postId" element={<DashboardSinglePost />} />
      </Routes>
    </>
  );
}
