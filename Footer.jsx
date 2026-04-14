import React from 'react';
import { Link } from 'react-router-dom';
import "../../public/style/style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            My Restaurant is dedicated to serving fresh, delicious meals with passion and care.
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@myrestaurant.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Foodie Street, Flavor Town, USA</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.facebook.com/vijayrawat" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{" "} |{" "}
            <a href="https://www.instagram.com/mr_rawat_ji_07" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "} |{" "}
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/menu">Menu</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}𝖬𝗒 𝖱𝖾𝗌𝗍𝖺𝗎𝗋𝖺𝗇𝗍. 𝖠𝗅𝗅 𝗋𝗂𝗀𝗁𝗍𝗌 𝗋𝖾𝗌𝖾𝗋𝗏𝖾𝖽.</p>
      </div>
    </footer>
  );
}

export default Footer;