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
    <header className="section_nav">
      <Link to="/" className="logo">
        <span> Bridge Book Club </span>
      </Link>

      <nav className="main-nav">
        <ul
          className={`main-nav-list ${showLinks ? "show__nav" : "hide__nav"}`}
        >
          <li>
            <a href="#how" className="main-nav-link">
              How it works
            </a>
            {/* <NavLink
              to="#how"
              className={({ isActive }) =>
                isActive ? "main-nav-link active-nav" : "main-nav-link"
              }
              onClick={toggleLinks}
            >
              How it works
            </NavLink> */}
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "main-nav-link active-nav" : "main-nav-link"
              }
              onClick={toggleLinks}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive ? "main-nav-link active-nav" : "main-nav-link"
              }
              onClick={toggleLinks}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="purpose"
              className={({ isActive }) =>
                isActive ? "main-nav-link active-nav" : "main-nav-link"
              }
              onClick={toggleLinks}
            >
              Purpose & Rules
            </NavLink>
          </li>

          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? "main-nav-link nav-cta active-nav"
                  : "main-nav-link nav-cta"
              }
              onClick={toggleLinks}
            >
              Purpose & Rules
            </NavLink>
          </li>
        </ul>

        <button className="nav__toggle-btn" onClick={toggleLinks}>
          {!showLinks ? <FaBars /> : <FaTimes />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
