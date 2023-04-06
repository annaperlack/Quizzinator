import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a
            href="#study"
            className={`nav-link ${currentPage === "Home" && "active"}`}
            onClick={() => handlePageChange("Study")}
          >
            Study Time
          </a>
        </li>
        <li>
          <a
            href="connect"
            className={`nav-link ${currentPage === "Home" && "active"}`}
            onClick={() => handlePageChange("Connect")}
          >
            Connect
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`nav-link ${currentPage === "Home" && "active"}`}
            onClick={() => handlePageChange("Contact")}
          >
            Questions?
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;