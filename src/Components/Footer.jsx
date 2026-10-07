
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section footer-about">
          <h2>DK-Veg</h2>

          <p>
            Fresh, delicious and healthy vegetarian food made
            with love and the finest ingredients.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/menu">Menu</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            <span>123 Anna Street, Tirupur</span>
          </p>

          <p>
            <FaPhone />
            <span>+91 98765 43210</span>
          </p>

          <p>
            <FaEnvelope />
            <span>hello@dkveg.com</span>
          </p>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>

          <p>Monday - Friday</p>
          <p>11:00 AM - 10:00 PM</p>

          <p>Saturday - Sunday</p>
          <p>10:00 AM - 11:00 PM</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2026 DK-Veg. All Rights Reserved.</p>

        <p>Pure Vegetarian • Fresh Ingredients • Happy Dining</p>
      </div>
    </footer>
  );
}

export default Footer;
