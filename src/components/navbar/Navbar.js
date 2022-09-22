import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="nav_section">
      <nav>
        <div className="container nav__container">
          <Link to="/" className="nav__brand">
            <span> Bridge Book Club </span>
          </Link>

          <ul className={`nav__links ${showLinks ? "show__nav" : "hide__nav"}`}>
            <li>
              <NavLink
                to="home"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="purpose"
                className={({ isActive }) => (isActive ? "active-nav" : "")}
              >
                Purpose & Rules
              </NavLink>
            </li>
          </ul>

          <button className="nav__toggle-btn" onClick={toggleLinks}>
            {!showLinks ? <FaBars /> : <FaTimes />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
