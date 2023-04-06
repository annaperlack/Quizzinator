import React from "react";

function Header({ currentPage, handlePageChange, user }) {
  return (
    <header className="header">
      <div className="header-logo">
        {/* app logo here */}
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <a
              href="#study"
              className={`nav-link ${currentPage === "Study" && "active"}`}
              onClick={() => handlePageChange("Study")}
            >
              Study Time
            </a>
          </li>
          <li>
            <a
              href="#connect"
              className={`nav-link ${currentPage === "Connect" && "active"}`}
              onClick={() => handlePageChange("Connect")}
            >
              Connect
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${currentPage === "Contact" && "active"}`}
              onClick={() => handlePageChange("Contact")}
            >
              Questions?
            </a>
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