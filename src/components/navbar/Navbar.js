import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const linksContainerRef = useRef(null);
  // const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }
  // }, [showLinks]);

  return (
    <div className="nav_section">
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <a class="nav-brand" href="index.html">
              <span> Bridge Book Club </span>
            </a>

            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div
            className={`${
              showLinks ? "links-container show-container" : "links-container"
            }`}
          >
            <ul className="links">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Purpose & Rules</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
