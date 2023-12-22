import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ModalWindow.scss';

const ModalWindow = ({ isOpen, setIsOpen, email, date, time, timeZone }) => {
  const modalRef = useRef(null);

  const { pathname } = useLocation();
  const isContactUs = pathname === '/contact-us';

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
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

  const closeModal = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className={`modal-background ${isOpen ? ' active' : ''}`}>
      <div className="modal" ref={modalRef}>
        <div className="confirmation">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M5 16.25L11.25 22.5L25 8.75" stroke="#284657" strokeLinecap="round" />
          </svg>
          <h3 className="confirmation__title">{isContactUs ? 'Thank you for your message' : 'Booking confirmation'}</h3>
          <p className="confirmation__text">
            {isContactUs
              ? 'We will reply to your email'
              : `Thank you for scheduling the call. I'm looking forward to talk to you on ${date} at ${time} (${timeZone})`}
          </p>
          <span className={isContactUs ? 'confirmation__email' : 'hidden'}>{email}</span>
          <button className="confirmation__btn btn btn_solid" onClick={closeModal}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
