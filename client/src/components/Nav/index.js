import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Button from '@mui/material/Button';


function Header({ currentPage, handlePageChange, user }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.href = '/'
  };
  return (
    <header className="header">
      <div className="header-logo">
        {/* app logo here */}
      </div>
      <nav className="navbar">
        <Button
          variant="contained"
          href="/study"
          className={`nav-link ${currentPage === "Study" && "active"}`}
          to='/study'
        >
          Study Time
        </Button>
        <Button
          variant="contained"
          href="/connect"
          className={`nav-link ${currentPage === "Connect" && "active"}`}
          to='/connect'
        >
          Connect
        </Button>
        <Button
          variant="contained"
          href="/contact"
          className={`nav-link ${currentPage === "Contact" && "active"}`}
          to='/contact'
        >
          Questions?
        </Button>
        <Button variant="contained" onClick={logout}>
          Logout
        </Button>
      </nav>
      <div className="header-user">
        {/* code for profile picture v */}
        {user && (
          <>
            <img src={user.picture} alt={user.name} />
            <span>{user.name}</span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

