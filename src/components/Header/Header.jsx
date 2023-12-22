import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const headerRef = useRef(null);

  return (
    <div className="content">
      <header className="header-section">
        <div className="container">
          <div className="header" ref={headerRef}>
            <a href="/" className="header__label">
              Newtrader.net
            </a>
            <div className="burger" onClick={() => setIsBurgerMenuOpen(true)}>
              <div className="burger__bar"></div>
              <div className="burger__bar"></div>
              <div className="burger__bar"></div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
      <BurgerMenu isOpen={isBurgerMenuOpen} setIsOpen={setIsBurgerMenuOpen} />
    </div>
  );
};

export default Header;
