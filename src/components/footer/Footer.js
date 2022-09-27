import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section_footer">
      <div className="container grid grid-footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <span className="logo">Bridge Discussion</span>
          </a>
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
            Copyright &copy; 2022 by Omnifood Inc. All rights are reserved.
          </p>
        </div>
        <div className="adress-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-navigation">
            <li>
              <a className="footer-link" href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-navigation">
            <li>
              <a className="footer-link" href="#">
                Create Account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS App
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android App
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-navigation">
            <li>
              <a className="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
