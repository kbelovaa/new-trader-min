import React from 'react';
import './Footer.scss';

const Footer = () => (
  <div className="container">
    <footer className="footer">
      <p className="footer__text">Copyright © 2024 New trader.<br className='footer__linebreak' /> All rights reserved</p>
      <ul className="footer__links">
        <li>
          <span className="footer__link">Terms of Use</span>
        </li>
        <li>
          <span className="footer__link">Cookies</span>
        </li>
        <li>
          <span className="footer__link">Privacy Policy</span>
        </li>
        <li>
          <span className="footer__link">Legal Notice</span>
        </li>
      </ul>
    </footer>
  </div>
);

export default Footer;
