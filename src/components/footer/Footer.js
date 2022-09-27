import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  // Return today's date and time
  var currentTime = new Date();

  // returns the year (four digits)
  var year = currentTime.getFullYear();

  return (
    <footer className="section_footer">
      <ul className="social-links">
        <li>
          <a className="footer-link" href="#">
            <IoLogoInstagram className="social-icon" />
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            <IoLogoFacebook className="social-icon" />
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            <IoLogoTwitter className="social-icon" />
          </a>
        </li>
      </ul>
      <p className="copyright">
        Copyright &copy; {year} by Seyir Yazilim Inc. All rights are reserved.
      </p>
    </footer>
  );
};

export default Footer;
