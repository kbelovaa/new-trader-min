import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="container">
    <footer className="footer">
      <p className="footer__text">Copyright © 2024 New trader. All rights reserved</p>
      <ul className="footer__links">
        <li>
          <a href="#" className="footer__link">
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Cookies
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Legal Notice
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
