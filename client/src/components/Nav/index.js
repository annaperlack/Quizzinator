import React from "react";
import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange, user }) {
  return (
    <header className="header">
      <div className="header-logo">
        {/* app logo here */}
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link
              href="#study"
              className={`nav-link ${currentPage === "Study" && "active"}`}
              to = '/study'
            >
              Study Time
            </Link>
          </li>
          <li>
            <Link
              href="#connect"
              className={`nav-link ${currentPage === "Connect" && "active"}`}
              to = '/connect'
            >
              Connect
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`nav-link ${currentPage === "Contact" && "active"}`}
              to = '/contact'
            >
              Questions?
            </Link>
          </li>
        </ul>
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