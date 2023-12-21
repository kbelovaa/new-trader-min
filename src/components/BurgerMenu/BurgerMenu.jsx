import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  const burgerMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeBurgerMenu = () => setIsOpen(false);

  return (
    <div className={`burger-menu ${isOpen ? ' active' : ''}`} ref={burgerMenuRef}>
      <svg
        className="burger-menu__cross"
        onClick={closeBurgerMenu}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M29.4277 29.4282L10.5715 10.5721" stroke="black" strokeLinecap="round" />
        <path d="M29.4285 10.5721L10.5723 29.4282" stroke="black" strokeLinecap="round" />
      </svg>
      <nav className="burger-menu__nav">
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <NavLink className="burger-menu__link" to="/" onClick={closeBurgerMenu}>
              Main page
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink className="burger-menu__link" to="/faq" onClick={closeBurgerMenu}>
              Faq
            </NavLink>
          </li>
          <li className="burger-menu__item">
            <NavLink className="burger-menu__link" to="/contact-us" onClick={closeBurgerMenu}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
