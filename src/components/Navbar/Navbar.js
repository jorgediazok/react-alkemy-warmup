import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container justify-content-start">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <span className="navbar__divider">|</span>
        <Link to="/add">
          <span className="navbar-brand mb-0 h1">Add Post</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
