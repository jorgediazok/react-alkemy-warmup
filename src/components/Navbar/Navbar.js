import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();

  //FUNCTION TO LOGOUT
  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container justify-content-between">
        <div>
          <Link to="/">
            <span className="navbar-brand mb-0 h1">Home</span>
          </Link>
          <span className="navbar__divider">|</span>
          <Link to="/add">
            <span className="navbar-brand mb-0 h1">Add Post</span>
          </Link>
        </div>
        <div className="navbar-logout">
          <span className="navbar-brand mb-0 h1" onClick={logout}>
            Logout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
