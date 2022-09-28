import React, { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <header className={`${isNavOpen ? "section_nav nav-open" : "section_nav"}`}>
      <Link to="/" className="logo">
        <span> Bridge Book Club </span>
      </Link>

      <nav className="main-nav">
        <ul
          className={`main-nav-list ${showLinks ? "show__nav" : "hide__nav"}`}
        >
          <li>
            <NavLink
              to="/"
              className="main-nav-link"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "main-nav-link active-nav" : "main-nav-link"
              }
              onClick={() => setIsNavOpen(!isNavOpen)}
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
              onClick={() => setIsNavOpen(!isNavOpen)}
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
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Purpose & Rules
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="btn-mobile-nav"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <IoMenuOutline className="icon-mobile-nav" name="menu-outline" />
        <IoCloseOutline className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>
  );
};

export default Navbar;
