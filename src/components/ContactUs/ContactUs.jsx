import React, { useState } from 'react';
import { contactUs } from '../../http/google';
import ModalWindow from '../ModalWindow/ModalWindow';
import './ContactUs.scss';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [text, setText] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormInvalid = () => {
    if (!name || !email || !isEmailValid || !text) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!checkIsFormInvalid()) {
      try {
        setShowSpinner(true);
        const result = await contactUs(name, email, text);
        if (result) {
          setIsModalOpen(true);
        }
      } finally {
        setShowSpinner(false);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="contact-us">
          <h2 className="contact-us__title title">Contact us</h2>
          <form className={`contact-us__form ${isFormValid ? '' : 'invalid'}`} onSubmit={handleFormSubmit}>
            <div className="input-wrap">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`input ${!name ? 'invalid-field' : ''}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`input ${!email || !isEmailValid ? 'invalid-field' : ''}`}
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                autoComplete="off"
              />
              <p className={isEmailValid ? 'hidden' : 'input__note'}>Please enter a valid email address.</p>
            </div>
            <div className="input-wrap">
              <label htmlFor="text" className="label">
                Text
              </label>
              <textarea
                id="text"
                rows="1"
                className={`input contact-us__message ${!text ? 'invalid-field' : ''}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight + 2}px`;
                }}
              ></textarea>
            </div>
            <p className={!isFormValid && (!name || !email || !text) ? 'input__note' : 'hidden'}>
              Please fill in all fields
            </p>
            {showSpinner ? (
              <div className="spinner spinner_small"></div>
            ) : (
              <button type="submit" className={`contact-us__btn btn btn_solid ${checkIsFormInvalid() ? 'inactive' : ''}`}>
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
      <ModalWindow isOpen={isModalOpen} setIsOpen={setIsModalOpen} email={email} />
    </section>
  );
};

export default ContactUs;
